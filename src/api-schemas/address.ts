/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/address.ts)
 * Last updated: 2025-04-21T15:23:13.084Z
 * Update this file when API schema changes
 */

import { z } from "zod";

export const AddressTypeEnum = z.enum(["BILLING", "SHIPPING", "BOTH"]);

export const AddressBaseSchema = z.object({
    id: z.number(),
    street_number: z.string().nullable(),
    address_line_1: z.string().nullable(),
    address_line_2: z.string().nullable(),
    city: z.string().nullable(),
    region: z.string().nullable(),
    postcode: z.string().nullable(),
    country: z.string().nullable(),
    createdAt: z.string().datetime().optional(),
    updatedAt: z.string().datetime().optional(),
    name: z.string().nullable(),
    type: AddressTypeEnum
});

export type Address = z.infer<typeof AddressBaseSchema>;
