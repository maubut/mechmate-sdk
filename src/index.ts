import { z } from "zod";
import { AuthClient } from "./client/auth";
import { WorkorderClient } from "./client/workorder";
import { customErrorMap } from "./utils/zod-errors";
import { AccountClient } from "./client/account";
import { MechmateError } from "./errors"; // Add this import
import { UserClient } from "./client/user";
import { TokenManager } from "./utils/token-manager";
import { AuthTokens, RequestOptions, SDKConfig, SDKResponse } from "./types";
import { HTTPClient } from "./client/http";
z.setErrorMap(customErrorMap);

// Entity schemas
export * from "./schemas/signup.schema";
export * from "./schemas/signin.schema";
export * from "./utils/validation";

export * from "./types";

// API schemas
export * from "./api-schemas/account.responses";
export * from "./api-schemas/workorder.responses";
export * from "./api-schemas/filters";
export * from "./api-schemas/mech.schema";
export * from "./api-schemas/user";

// Error handling
export { MechmateError };

// Grouped exports for covenience
export * as apiSchemas from "./api-schemas";

export class MechmateSDK {
  private tokenManager: TokenManager;
  private httpClient: HTTPClient;  // Add this

  public auth: AuthClient;
  public workorder: WorkorderClient;
  public account: AccountClient;
  public user: UserClient;

  constructor(config: SDKConfig) {
    // Initialize token manager
    this.tokenManager = new TokenManager(config.tokenStorage, config);

    this.httpClient = new HTTPClient(config, this.tokenManager);

    // Initialize domain clients
    this.auth = new AuthClient(this.httpClient, this.tokenManager);
    this.workorder = new WorkorderClient(this.httpClient);
    this.account = new AccountClient(this.httpClient);
    this.user = new UserClient(this.httpClient); 
  }

  setTokens(tokens: AuthTokens) {
    this.tokenManager.setTokens(tokens);
  }

  clearTokens() {
    this.tokenManager.clearTokens();
  }

async getTokenInfo() {
    const accessToken = await this.tokenManager.getAccessToken();
    if (!accessToken) return null;
  
    try {
      const [, payload] = accessToken.split('.');
      const decoded = JSON.parse(atob(payload));
      const remainingMs = (decoded.exp * 1000) - Date.now();
      
      return {
        remainingSeconds: Math.max(0, Math.floor(remainingMs / 1000)),
        expiresAt: new Date(decoded.exp * 1000)
      };
    } catch {
      return null;
    }
  }

  async request<T>(
    path: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    options: RequestOptions = {},
    body?: unknown
  ): Promise<SDKResponse<T>> {
    return this.httpClient.fetch<T>(path, method, body, options);
  }
}
