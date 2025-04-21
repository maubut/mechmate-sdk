/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/account.responses.ts)
 * Last updated: 2025-04-21T15:23:13.079Z
 * Update this file when API schema changes
 */

import { z } from "zod";
import { PriceBaseSchema } from './price.responses';

export const AccountPreferencesBaseSchema = z.object({
  invoiceStartNumber: z.number(),
  worksheetStartNumber: z.number(),
  language: z.string(),
  hourlyRates: PriceBaseSchema.optional(),
  currency: z.string(),

  dateTime: z.object({
    dateFormat: z.string(),
    timeFormat: z.string(),
    timezone: z.string()
  })
});

export const PackageBaseSchema = z
  .object({
    name: z.string(),
    startedAt: z.union([z.date(), z.string().datetime()]).optional(),
    expireAt: z.union([z.date(), z.string().datetime()]).optional(),
    isTrial: z.boolean().nullable().optional()
  })
  .refine(
    (data) => {
      if (data.startedAt && data.expireAt) {
        return data.startedAt < data.expireAt;
      }
      return true;
    },
    {
      message: 'expireAt must be after startedAt',
      path: ['expireAt']
    }
  );

export const AccountBaseSchema = z.object({
  preferences: AccountPreferencesBaseSchema,
  package: PackageBaseSchema
});

export const AccountResponseSchema = AccountBaseSchema.extend({});

// Request schemas
export const CreateAccountPreferencesSchema = AccountPreferencesBaseSchema;

export const UpdateAccountPreferencesSchema =
  AccountPreferencesBaseSchema.partial();

export const DeleteAccountPreferencesSchema = z.object({
  id: z.number()
});

// Response schemas
export const AccountPreferencesResponseSchema = z.object({
  preferences: AccountPreferencesBaseSchema,
  packages: z.array(PackageBaseSchema)
});

// Types
export type CreateAccountPreferencesRequest = z.infer<
  typeof CreateAccountPreferencesSchema
>;
export type UpdateAccountPreferencesRequest = z.infer<
  typeof UpdateAccountPreferencesSchema
>;
export type DeleteAccountPreferencesRequest = z.infer<
  typeof DeleteAccountPreferencesSchema
>;
export type AccountPreferencesResponse = z.infer<
  typeof AccountPreferencesResponseSchema
>;

export type AccountPreferences = z.infer<typeof AccountPreferencesBaseSchema>;
