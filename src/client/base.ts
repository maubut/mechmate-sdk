import { TokenManager, TokenStore } from "../auth/token-manager";

export interface SDKConfig {
  baseUrl: string;
  tokenStore: TokenStore;
  onError?: (error: any) => void;
  onUnauthorized?: () => Promise<boolean>; // Returns true if retry should happen
}

export interface RequestOptions {
  handleErrors?: boolean;
  headers?: Record<string, string>;
}

export class BaseClient {
  private tokenManager: TokenManager;
  private refreshPromise: Promise<boolean> | null = null;

  constructor(private config: SDKConfig) {
    this.tokenManager = new TokenManager(config.tokenStore, config.baseUrl);
  }

  protected async fetch<T>(
    path: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    body?: unknown,
    options: RequestOptions = {},
  ): Promise<T> {
    try {
      const response = await this.makeRequest(path, method, body, options);
      return this.handleResponse(response);
    } catch (error) {
      console.log(error);

      // @ts-ignore
      if (error.code === "AUTH_TOKEN_EXPIRED") {
        // If there's already a refresh in progress, wait for it
        if (this.refreshPromise) {
          await this.refreshPromise;
          // Retry the original request after refresh
          return this.makeRequest(path, method, body, options).then(
            (response) => this.handleResponse(response),
          );
        }

        // Start a new refresh process
        this.refreshPromise = this.tokenManager.refreshToken();
        const refreshed = await this.refreshPromise;
        this.refreshPromise = null;

        if (refreshed) {
          // Token refreshed successfully, retry the original request
          return this.makeRequest(path, method, body, options).then(
            (response) => this.handleResponse(response),
          );
        }
      }

      if (options.handleErrors !== false && this.config.onError) {
        this.config.onError(error);
      }

      throw error;
    }
  }

  private async makeRequest(
    path: string,
    method: string,
    body?: unknown,
    options: RequestOptions = {},
  ) {
    const accessToken = this.config.tokenStore.getAccessToken();

    const requestOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": path.includes("print")
          ? "application/pdf"
          : "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        ...options.headers,
      },
    };
    if (method !== "GET" && body) {
      requestOptions.body = JSON.stringify(
        Object.fromEntries(
          Object.entries(body as Record<string, any>).filter(
            ([_, value]) => value !== "",
          ),
        ),
      );
    }

    const response = await fetch(
      `${this.config.baseUrl}${path}`,
      requestOptions,
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
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
