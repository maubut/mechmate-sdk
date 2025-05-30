/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/customer.responses.ts)
 * Last updated: 2025-05-30T17:09:30.648Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { MechBaseSchema } from './mech.schema';
import { BaseFilterSchema } from './filters';
import { QueryParams } from './common/query-params';
import { SchemaFromInterface } from './common/utils';
import { Customer } from './common/ts-interfaces';

const mobileRegex = /^(\+?[1-9]\d{0,3}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/;

// Core schema
export const CustomerSchema = z.object({
  id: z.number(),
  uuid: z.string(),
  accountId: z.number(),
  email: z.string().email().nullable(),
  mobile: z.string().regex(mobileRegex),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  fullname: z.string()
}) satisfies SchemaFromInterface<Customer>;

// Request schema
export const CustomerResponseSchema = CustomerSchema.omit({
  id: true,
  accountId: true
}).extend({
  uuid: z.string().uuid().optional()
});

// Request schema
export const CreateCustomerRequestSchema = CustomerSchema.omit({
  id: true,
  accountId: true,
  uuid: true,
  createdAt: true,
  updatedAt: true
});

export const UpdateCustomerRequestSchema = CustomerSchema.omit({
  id: true,
  accountId: true,
  createdAt: true,
  updatedAt: true
});

export const UpsertCustomerRequestSchema = CreateCustomerRequestSchema.extend({
  uuid: z.string().uuid().optional()
});

// Response schema

// Type exports
export type CreateCustomerRequest = z.infer<typeof CreateCustomerRequestSchema>;
export type UpsertCustomerRequest = z.infer<typeof UpsertCustomerRequestSchema>;
export type UpdateCustomerRequest = z.infer<typeof UpdateCustomerRequestSchema>;

export const CustomerVehiclesSchema = z.array(MechBaseSchema);

export const CreateCustomerSchema = CustomerSchema;

export const UpdateCustomerSchema = CustomerSchema.partial().extend({
  uuid: z.string().uuid()
});

export const CustomerFilterableFields = {
  mobile: 'string'
} as const;

const customerFields = Object.keys(CustomerFilterableFields) as Array<
  keyof typeof CustomerFilterableFields
>;

export const CustomerFilterSchema = BaseFilterSchema.extend({
  field: z.enum(customerFields as [string, ...string[]])
});

export type CustomerFilter = z.infer<typeof CustomerFilterSchema>;
export interface CustomerQueryParams extends QueryParams {
  filters?: CustomerFilter[];
}

export type CustomerResponse = z.infer<typeof CustomerResponseSchema>;
