import { AuthClient } from "./client/auth";
import { AuthTokens, BaseClient, SDKConfig } from "./client/base";
import { WorkorderClient } from "./client/workorder";

// Entity schemas
export * from "./schemas/workorder.schema";
export * from "./schemas/login.schema";
export * from "./schemas/session.schema";
export * from "./utils/validation";

// Grouped exports for covenience
export * as workorderSchemas from "./schemas/workorder.schema";

export class MechmateSDK {
  public auth: AuthClient;
  public workorder: WorkorderClient;
  private clients: BaseClient[] = [];

  constructor(config: SDKConfig) {
    this.workorder = new WorkorderClient(config);
    this.auth = new AuthClient(config);

    this.clients = [this.auth, this.workorder];
  }

  setTokens(tokens: AuthTokens) {
    this.clients.forEach((client) => client.setTokens(tokens));
  }
}
