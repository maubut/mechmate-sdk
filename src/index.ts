import { z } from "zod";
import { AuthClient } from "./client/auth";
import { AuthTokens, BaseClient, RequestOptions, SDKConfig, SDKResponse, TokenStorage } from "./client/base";
import { WorkorderClient } from "./client/workorder";
import { customErrorMap } from "./utils/zod-errors";
import { AccountClient } from "./client/account";
import { MechmateError } from "./errors"; // Add this import
import { UserClient } from "./client/user";

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
export * from "./api-schemas/user";

// Error handling
export { MechmateError };

// Grouped exports for covenience
export * as apiSchemas from "./api-schemas";

export interface MechmateSDKConfig extends SDKConfig {
  tokenStorage: TokenStorage; 
}

export class MechmateSDK extends BaseClient {
  public auth: AuthClient;
  public workorder: WorkorderClient;
  public account: AccountClient;
  public user: UserClient;
  
  private clients: BaseClient[] = [];

  constructor(config: MechmateSDKConfig) {
    super(config, config.tokenStorage);

    this.workorder = new WorkorderClient(config, config.tokenStorage);
    this.auth = new AuthClient(config, config.tokenStorage);
    this.account = new AccountClient(config, config.tokenStorage);
    this.user = new UserClient(config, config.tokenStorage);

    this.clients = [this.auth, this.workorder, this.account, this.user];
  }

  setTokens(tokens: AuthTokens) {
    this.clients.forEach((client) => client.setTokens(tokens));
  }

   /**
   * Make a direct API call while maintaining SDK features
   */
  async request<T>(
    path: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    options: RequestOptions = {},
    body?: unknown): Promise<SDKResponse<T>> {
      return this.fetch<SDKResponse<T>>(path, method, body, options);
    }
}
