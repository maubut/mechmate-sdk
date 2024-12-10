import { SDKConfig } from "./client/base";
import { WorkorderClient } from "./client/workorder";

// Entity schemas
export * from "./schemas/workorder.schema";

// Grouped exports for covenience
export * as workorderSchemas from "./schemas/workorder.schema";

export class MechmateSDK {
  public workorder: WorkorderClient;

  constructor(config: SDKConfig) {
    this.workorder = new WorkorderClient(config);
  }
}
