import { AuthTokens, SDKConfig, TokenStorage } from "../types";

export class TokenManager {
    private accessToken: string | null = null;
    private refreshToken: string | null = null;
    private refreshPromise: Promise<boolean> | null = null;
  
    constructor(
      private tokenStorage: TokenStorage,
      private config: SDKConfig 
    ) {
      const { accessToken, refreshToken } = tokenStorage.getTokens();
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    }
  
    getAccessToken(): string | null {
      return this.accessToken;
    }
  
    getRefreshToken(): string | null {
      return this.refreshToken;
    }
  
    setTokens(tokens: AuthTokens) {
      this.accessToken = tokens.accessToken;
      this.refreshToken = tokens.refreshToken;
      this.tokenStorage.setTokens(tokens);
      this.config.onTokensRefreshed?.(tokens);
    }
  
    clearTokens() {
      this.accessToken = null;
      this.refreshToken = null;
      this.tokenStorage.clearTokens();
    }
  
    async refreshTokens(): Promise<boolean> {
      if (this.refreshPromise) {
        return this.refreshPromise;
      }
  
      this.refreshPromise = (async () => {
        try {
          const response = await fetch(`${this.config.baseUrl}/auth/refresh-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken: this.refreshToken }),
          });
  
          if (!response.ok) {
            return false;
          }
  
          const data = await response.json();
          if (data.accessToken && data.refreshToken) {
            this.setTokens({
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            });
            return true;
          }
          return false;
        } catch (error) {
          console.error('Token refresh failed:', error);
          return false;
        } finally {
          this.refreshPromise = null;
        }
      })();
  
      return this.refreshPromise;
    }
  }