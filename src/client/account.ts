import { z } from "zod";
import { BaseClient, SDKResponse } from "./base";
import { validateRequest } from "../utils/validation";

export const RateTypeEnum = z.enum(["STANDARD"]);

export const PriceSchema = z.object({
  rateType: RateTypeEnum,
  valuePerUnit: RateTypeEnum,
});

export const AccountPreferencesSchema = z.object({
  invoiceStartNumber: z.number().int().min(1),
  worksheetStartNumber: z.number().int().min(1),
  language: z.string().min(2).max(5), // ISO language codes,
  hourlyRates: PriceSchema.optional(),
});

export type AccountPreferencesResponse = z.infer<
  typeof AccountPreferencesSchema
>;
export type AccountPreferencesRequest = z.infer<
  typeof AccountPreferencesSchema
>;

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
