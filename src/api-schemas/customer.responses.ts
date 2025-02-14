/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/customer.responses.ts)
 * Last updated: 2025-02-14T22:01:54.426Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { MechBaseSchema } from './mech.schema';

const mobileRegex = /^(\+?[1-9]\d{0,3}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/;
export const CustomerBaseSchema = z.object({
  email: z.string().email().optional(),
  fullname: z.string().optional(),
  mobile: z.string().regex(mobileRegex)
});

export const CustomerVehiclesSchema = z.array(MechBaseSchema);

export const CreateCustomerSchema = CustomerBaseSchema;

export const UpdateCustomerSchema = CustomerBaseSchema.partial().extend({
  uuid: z.string().uuid()
});

export type CreateCustomerRequest = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomerRequest = z.infer<typeof UpdateCustomerSchema>;
