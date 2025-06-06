/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/address.ts)
 * Last updated: 2025-06-06T01:08:36.905Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { SchemaFromInterface } from './common/utils';
import { Address } from './common/ts-interfaces';

export const AddressTypeEnum = z.enum(['BILLING', 'SHIPPING']);

// Core schema
export const AddressSchema = z.object({
  id: z.number(),
  street_number: z.string().nullable(),
  address_line_1: z.string().nullable(),
  address_line_2: z.string().nullable(),
  city: z.string().nullable(),
  region: z.string().nullable(),
  postcode: z.string().nullable(),
  country: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string().nullable(),
  type: AddressTypeEnum
}) satisfies SchemaFromInterface<Address>;

// Response schema
export const AddressResponseSchema = AddressSchema;

// export const CustomerSchema = z.object({
//   id: z.number(),
//   uuid: z.string(),
//   accountId: z.number(),
//   email: z.string().email().nullable(),
//   mobile: z.string().regex(mobileRegex),
//   createdAt: z.coerce.date(),
//   updatedAt: z.coerce.date(),
//   fullname: z.string()
// }) satisfies SchemaFromInterface<Customer>;

// export type Address = z.infer<typeof AddressBaseSchema>;

export type AddressResponse = z.infer<typeof AddressResponseSchema>;
