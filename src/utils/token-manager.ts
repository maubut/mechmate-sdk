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

      window.addEventListener('storage', (event) => {
        console.log('Storage event listener', event);

        if(event.key === 'accessToken') {
          // TODO:
        }
      });
    }

    private isTokenExpired(token: string | null): boolean {
      if(!token) return true;

      try {
        const [, payload ] = token.split('.');
        const decoded = JSON.parse(atob(payload));
        return decoded.exp * 1000 < Date.now();;
      } catch {
        return true;
      }

    }
  
    getAccessToken(): string | null {
      if(this.isTokenExpired(this.accessToken)) {
        console.warn('token is expired');
        return null;
      }
      
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
        try {
        return this.refreshPromise;
        } catch(error) {
          this.refreshPromise = null;
          throw error;
        }
      }
  
      this.refreshPromise = (async () => {
        try {
          const response = await fetch(`${this.config.baseUrl}/auth/refresh-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken: this.refreshToken }),
          });
  
          if (!response.ok) {
            throw new Error('Token refresh failed');
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
          this.clearTokens();
          throw error;
        } finally {
          this.refreshPromise = null;
        }
      })();
  
      return this.refreshPromise;
    }
  }