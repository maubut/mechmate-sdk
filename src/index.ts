import { z } from "zod";
import { AuthClient } from "./client/auth";
import { AuthTokens, BaseClient, SDKConfig } from "./client/base";
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

export class MechmateSDK {
  public auth: AuthClient;
  public workorder: WorkorderClient;
  public account: AccountClient;
  public user: UserClient;
  
  private clients: BaseClient[] = [];

  constructor(config: SDKConfig) {
    this.workorder = new WorkorderClient(config);
    this.auth = new AuthClient(config);
    this.account = new AccountClient(config);
    this.user = new UserClient(config);

    this.clients = [this.auth, this.workorder, this.account, this.user];
  }

  setTokens(tokens: AuthTokens) {
    this.clients.forEach((client) => client.setTokens(tokens));
  }
}
