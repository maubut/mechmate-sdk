import { BaseClient } from "./base";
import { validateRequest } from "../utils/validation";
import {
  AccountPreferencesResponse,
  AccountPreferencesResponseSchema,
  CreateAccountPreferencesRequest,
  CreateAccountPreferencesSchema,
} from "../api-schemas/account.responses";
import { SDKResponse } from "../types";
import { HTTPClient } from "./http";

export class AccountClient  {

  constructor(private httpClient: HTTPClient) {
  }

  async savePreferences(
    data: CreateAccountPreferencesRequest
  ): Promise<SDKResponse<AccountPreferencesResponse>> {
    const validatedData = validateRequest(CreateAccountPreferencesSchema, data);

    return this.httpClient.fetch<AccountPreferencesResponse>(
      "/account/preferences",
      "PUT",
      validatedData
    );
  }

  async getPreferences(): Promise<SDKResponse<AccountPreferencesResponse>> {
    const response = await this.httpClient.fetch<AccountPreferencesResponse>(
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
