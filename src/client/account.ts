import { BaseClient, SDKResponse } from "./base";
import { validateRequest } from "../utils/validation";
import {
  AccountPreferencesResponse,
  AccountPreferencesResponseSchema,
  CreateAccountPreferencesRequest,
  CreateAccountPreferencesSchema,
} from "../api-schemas/account.responses";

export class AccountClient extends BaseClient {
  async savePreferences(
    data: CreateAccountPreferencesRequest
  ): Promise<SDKResponse<AccountPreferencesResponse>> {
    const validatedData = validateRequest(CreateAccountPreferencesSchema, data);

    return this.fetch<SDKResponse<AccountPreferencesResponse>>(
      "/account/preferences",
      "PUT",
      validatedData
    );
  }

  async getPreferences(): Promise<SDKResponse<AccountPreferencesResponse>> {
    const response = await this.fetch<SDKResponse<AccountPreferencesResponse>>(
      "/account/preferences",
      "GET"
    );

    const validatedData = AccountPreferencesResponseSchema.parse(response.data);

    return {
      ...response,
      data: validatedData,
    };
  }
}
