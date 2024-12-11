export interface TokenStore {
  getAccessToken: () => string | null;
  getRefreshToken: () => string | null;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  clear: () => void;
}

export class TokenManager {
  constructor(
    private tokenStore: TokenStore,
    private baseUrl: string,
  ) {}

  async refreshToken(): Promise<boolean> {
    const refreshToken = this.tokenStore.getRefreshToken();

    if (!refreshToken) {
      return false;
    }

    try {
      const response = await fetch(`${this.baseUrl}/auth/refresh-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }

      const data = await response.json();
      // @ts-ignore-
      if (data.accessToken && data.refreshToken) {
        // @ts-ignore-
        this.tokenStore.setAccessToken(data.accessToken);
        // @ts-ignore-
        this.tokenStore.setRefreshToken(data.refreshToken);
        return true;
      }

      return false;
    } catch (error) {
      console.error("Error refreshing token:", error);
      return false;
    }
  }
}
