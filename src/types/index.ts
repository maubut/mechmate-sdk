export type {
  // API types
  ApiResponse,
  ApiError,
  QueryParams,
} from "./api";


export interface TokenStorage {
  getTokens(): { accessToken: string | null; refreshToken: string | null };
  setTokens(tokens: AuthTokens): void;
  clearTokens(): void;
}

export interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface SDKConfig {
  baseUrl: string;
  tokenStorage: TokenStorage;
  onTokensRefreshed?: (tokens: AuthTokens) => void;
  onSessionExpired?: () => void;
  onError?: (error: any) => void;
}

export interface RequestOptions {
  handleErrors?: boolean;
  headers?: Record<string, string>;
  validateRequest?: boolean;
  validateResponse?: boolean;
  requestSchema?: any;
  responseSchema?: any;
}

export interface SDKResponse<T> {
  data: T;
  status: number;
  headers?: Record<string, string>;
}