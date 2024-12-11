import { AuthTokens, BaseClient, SDKConfig } from "./client/base";
import { WorkorderClient } from "./client/workorder";

// Entity schemas
export * from "./schemas/workorder.schema";

// Grouped exports for covenience
export * as workorderSchemas from "./schemas/workorder.schema";

export class MechmateSDK {
  public workorder: WorkorderClient;
  private clients: BaseClient[] = [];

  constructor(config: SDKConfig) {
    this.workorder = new WorkorderClient(config);

    this.clients = [this.workorder];
  }

  setTokens(tokens: AuthTokens) {
    this.clients.forEach((client) => client.setTokens(tokens));
  }
}
