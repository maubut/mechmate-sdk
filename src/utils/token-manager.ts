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

      /* if(!accessToken && !refreshToken) {
        this.handleSessionExpired();
      } */
    }

    private handleSessionExpired(unexpected: boolean = true) {
      console.log('handle session expired SDK ')
      this.clearTokens();
      this.config.onSessionExpired?.();
    }

    private isTokenExpired(token: string | null): boolean {
      if(!token) return true;

      try {
        const [, payload ] = token.split('.');
        const decoded = JSON.parse(atob(payload));
                // Add some buffer time (e.g., 30 seconds) to prevent edge cases
        return (decoded.exp * 1000) - 30000 < Date.now();
      } catch {
        return true;
      }

    }
  
async getAccessToken(): Promise<string | null> {

  if (!this.accessToken && !this.refreshToken) {
    return null;
  } 

  if (this.isTokenExpired(this.accessToken) && !this.refreshToken) {
    this.handleSessionExpired(true);
    return null;
  }

      if(this.isTokenExpired(this.accessToken) && this.refreshToken) {
        console.warn('token is expired');
        const refreshed = await this.refreshTokens();

        if(!refreshed) {
          return null;
        }
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
        console.log('Waiting for refresh promise to complete...')
        return await this.refreshPromise;
      }

      if(!this.refreshToken) {
        console.log('refreshTokens', 'no tokens')
        this.handleSessionExpired(true);
        return false;
      }
  
      this.refreshPromise = (async () => {
        try {
          console.log('Initiating refresh promise...', this.refreshToken)
          const response = await fetch(`${this.config.baseUrl}/auth/refresh-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken: this.refreshToken }),
          });

          console.log('Initiate values:', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken: this.refreshToken }),
          })
  
          if (!response.ok) {
            throw new Error('Token refresh failed');
          }
  
          const data = await response.json();

          console.log('refreshPromise response:', data, response)
          if (data.accessToken && data.refreshToken) {
            console.log('SDK - refresh promise completed with success')
            this.setTokens({
              accessToken: data.accessToken,
              refreshToken: data.refreshToken,
            });
            return true;
          }

          console.log('refresh promise', 'false')

          this.handleSessionExpired(true);
          return false;
        } catch (error) {
          console.error('Token refresh failed:', error);
          this.handleSessionExpired(true);
          return false;
        } finally {
          this.refreshPromise = null;
        }
      })();
  
      return this.refreshPromise;
    }
  }