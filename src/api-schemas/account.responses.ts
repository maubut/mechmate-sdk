/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/account.responses.ts)
 * Last updated: 2024-12-21T01:18:17.929Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { PriceBaseSchema } from './price.responses';

export const AccountPreferencesBaseSchema = z.object({
  invoiceStartNumber: z.number(),
  worksheetStartNumber: z.number(),
  language: z.string(),
  hourlyRates: PriceBaseSchema.optional()
});

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
  packages: z.array(
    z.object({
      startedAt: z.date(),
      expireAt: z.date().nullable(),
      package: z.object({
        name: z.string()
      })
    })
  )
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
