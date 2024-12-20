/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/customer.responses.ts)
 * Last updated: 2024-12-20T20:49:24.046Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

const mobileRegex = /^(\+?[1-9]\d{0,3}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/;
export const CustomerBaseSchema = z.object({
  email: z.string().email().optional(),
  fullname: z.string().optional(),
  mobile: z.string().regex(mobileRegex)
});

export const CreateCustomerSchema = CustomerBaseSchema;

export const UpdateCustomerSchema = CustomerBaseSchema.partial().extend({
  uuid: z.string().uuid()
});

export type CreateCustomerRequest = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomerRequest = z.infer<typeof UpdateCustomerSchema>;
