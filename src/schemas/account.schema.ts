import { z } from "zod";

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
