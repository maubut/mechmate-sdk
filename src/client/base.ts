import { MechmateError } from "../errors";

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SDKResponse<T> {
  data: T;
  status: number;
  headers?: Record<string, string>;
}

export interface SDKConfig {
  baseUrl: string;
  accessToken?: string;
  refreshToken?: string;

  onTokensRefreshed?: (tokens: AuthTokens) => void;
  onSessionExpired?: () => void;

  onError?: (error: any) => void;
}

export interface RequestOptions {
  handleErrors?: boolean;
  headers?: Record<string, string>;
}

export class BaseClient {
  private refreshPromise: Promise<boolean> | null = null;

  protected accessToken?: string;
  protected refreshToken?: string;

  constructor(protected config: SDKConfig) {
    this.accessToken = config.accessToken;
    this.refreshToken = config.refreshToken;
  }

  public setTokens(tokens: AuthTokens) {
    this.accessToken = tokens.accessToken;
    this.refreshToken = tokens.refreshToken;
  }

  protected async fetch<T>(
    path: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    body?: unknown,
    options: RequestOptions = {}
  ): Promise<T> {
    try {
      const response = await this.makeRequest(path, method, body, options);
      return this.handleResponse(response);
    } catch (error) {
      console.log(error);

      /// @ts-ignore
      if (
        error instanceof MechmateError &&
        error.message === "AUTH_TOKEN_EXPIRED"
      ) {
        if (this.refreshPromise) {
          const refreshSuccessful = await this.refreshPromise;
          if (refreshSuccessful) {
            return this.makeRequest(path, method, body, options).then(
              (response) => this.handleResponse(response)
            );
          }
        }

        this.refreshPromise = this.refreshTokens();
        const refreshSuccessful = await this.refreshPromise;
        this.refreshPromise = null;

        if (refreshSuccessful) {
          return this.makeRequest(path, method, body, options).then(
            (response) => this.handleResponse(response)
          );
        } else {
          this.config.onSessionExpired?.();
        }
      }

      if (options.handleErrors !== false && this.config.onError) {
        this.config.onError(error);
      }

      if (error instanceof MechmateError) {
        throw error;
      }

      throw new MechmateError("Unknown error occured", "UNKNOWN", "UNKNOWN");
    }
  }

  private async refreshTokens(): Promise<boolean> {
    if (!this.refreshToken) {
      return false;
    }

    try {
      const response = await fetch(
        `${this.config.baseUrl}/auth/refresh-token`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken: this.refreshToken }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }

      const data = (await response.json()) as RefreshTokenResponse;

      if (data.accessToken && data.refreshToken) {
        this.accessToken = data.accessToken;
        this.refreshToken = data.refreshToken;

        this.config.onTokensRefreshed?.({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });

        return true;
      }

      return false;
    } catch (error) {
      console.error("Error refreshing token:", error);
      return false;
    }
  }

  private async makeRequest(
    path: string,
    method: string,
    body?: unknown,
    options: RequestOptions = {}
  ) {
    const requestOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": path.includes("print")
          ? "application/pdf"
          : "application/json",
        ...(this.accessToken && {
          Authorization: `Bearer ${this.accessToken}`,
        }),
        ...options.headers,
      },
    };
    if (method !== "GET" && body) {
      requestOptions.body = JSON.stringify(
        Object.fromEntries(
          Object.entries(body as Record<string, any>).filter(
            ([_, value]) => value !== ""
          )
        )
      );
    }

    const response = await fetch(
      `${this.config.baseUrl}${path}`,
      requestOptions
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw MechmateError.fromApiError(errorData);
    }

    return response;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get("content-type");
    const headers = Object.fromEntries(response.headers.entries());

    if (contentType?.includes("application/pdf")) {
      const blob = await response.blob();
      return { blob, headers, status: response.status } as unknown as T;
    }

    if (response.status === 204) {
      return { status: response.status } as unknown as T;
    }

    const data = contentType ? await response.json() : null;
    return { data, status: response.status } as T;
  }
}
