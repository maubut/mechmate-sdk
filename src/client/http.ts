import { MechmateError } from "../errors";
import { RequestOptions, SDKConfig, SDKResponse } from "../types";
import { TokenManager } from "../utils/token-manager";
import { BaseClient } from "./base";

export class HTTPClient extends BaseClient {
    constructor(
      private config: SDKConfig,
      private tokenManager:TokenManager 
    ) {
      super(null);
    }
  
    async fetch<T>(
      path: string,
      method: string,
      body?: unknown,
      options: RequestOptions = {}
    ): Promise<SDKResponse<T>> {
      try {
        let response = await this.makeRequest(path, method, body, options);
        
        if (response.status === 401) {
          const refreshed = await this.tokenManager.refreshTokens();
          if (refreshed) {
            response = await this.makeRequest(path, method, body, options);
          } else {
            this.config.onSessionExpired?.();
            throw new MechmateError('Session expired', 'AUTH_SESSION_EXPIRED', 'CLIENT');
          }
        }
  
        return this.handleResponse<T>(response);
      } catch (error) {
        if (options.handleErrors !== false && this.config.onError) {
          this.config.onError(error);
        }
        throw error;
      }
    }
  
    private async makeRequest(path: string, method: string, body?: unknown, options: RequestOptions = {}): Promise<Response> {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...options.headers,
      };
  
      const accessToken = await this.tokenManager.getAccessToken();
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }
  
      const requestOptions: RequestInit = {
        method,
        headers
      };

      if (method !== 'GET' && body) {
        requestOptions.body = JSON.stringify(body);
      }
  
      return fetch(`${this.config.baseUrl}${path}`, requestOptions);
    }
  
    private async handleResponse<T>(response: Response): Promise<SDKResponse<T>> {
      const contentType = response.headers.get('content-type');
      const headers = Object.fromEntries(response.headers.entries());
  
      if (!response.ok) {
        const errorData = await response.json();
        throw MechmateError.fromApiError(errorData);
      }
  
      if (contentType?.includes('application/pdf')) {
        const blob = await response.blob();
        return { blob, headers, status: response.status } as unknown as SDKResponse<T>;
      }
  
      if (response.status === 204) {
        return { status: response.status, headers } as SDKResponse<T>;
      }
  
      const data = await response.json();
      return { data, status: response.status, headers };
    }
  }