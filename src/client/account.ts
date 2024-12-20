import { z } from "zod";
import { BaseClient, SDKResponse } from "./base";
import { validateRequest } from "../utils/validation";
import {
  AccountPreferencesRequest,
  AccountPreferencesResponse,
  AccountPreferencesSchema,
} from "../schemas/account.schema";

export class AccountClient extends BaseClient {
  async savePreferences(
    data: AccountPreferencesRequest
  ): Promise<SDKResponse<AccountPreferencesResponse>> {
    const validatedData = validateRequest(AccountPreferencesSchema, data);

    return this.fetch<SDKResponse<AccountPreferencesResponse>>(
      "/account/preferences",
      "PUT",
      validatedData
    );
  }

  async getPreferences(): Promise<SDKResponse<AccountPreferencesResponse>> {
    return this.fetch<SDKResponse<AccountPreferencesResponse>>(
      "/account/preferences",
      "GET"
    );
  }
}
