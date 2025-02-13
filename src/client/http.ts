import { MechmateError } from "../errors";
import { RequestOptions, SDKConfig, SDKResponse } from "../types";
import { TokenManager } from "../utils/token-manager";
import { BaseClient } from "./base";

export class HTTPClient extends BaseClient {
    private refreshPromise: Promise<boolean> | null = null;

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
          // Wait for any ongoing refresh or initiate a new one
          if (!this.refreshPromise) {
            this.refreshPromise = this.tokenManager.refreshTokens();
          }
          
          const refreshed = await this.refreshPromise;
          this.refreshPromise = null; // Clear the promise

          if (refreshed) {
            response = await this.makeRequest(path, method, body, options);
          } else {
            this.config.onSessionExpired?.();
            throw new MechmateError('Session expired', 'UNAUTHORIZED', 'CLIENT', { reason: 'session_expired' });
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
      let accessToken;

      if(this.refreshPromise) {
        await this.refreshPromise;
        accessToken = await this.tokenManager.getAccessToken();
      } else {
        accessToken = await this.tokenManager.getAccessToken();
      }
      
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...options.headers,
      };
  
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }

      console.log('SDK Request:', path, headers.Authorization)
  
      const requestOptions: RequestInit = {
        method,
        headers,
        credentials: 'include'
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

      try {
 const data = await response.json();
      return { data, status: response.status, headers };
       
      } catch(error) {
       throw new MechmateError(
        'Invalid JSON response from server',
        'API_ERROR',
        'INTERNAL',
        {
          status: response.status,
          error: error instanceof Error ? error.message : String(error)
        }
       ) 
      }
  
          }
  }