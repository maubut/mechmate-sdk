/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/service.ts)
 * Last updated: 2025-07-11T02:06:00.517Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { SchemaFromInterface } from './common/utils';
import { Service } from './common/ts-interfaces';

export const ServiceBaseSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  isPreset: z.boolean(),
  parentId: z.number().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  accountId: z.number()
}) satisfies SchemaFromInterface<Service>;

export const ServiceSchema = z.object({
  id: z.number(),
  accountId: z.number(),
  uuid: z.string()
});

export const ServiceRequestSchema = ServiceSchema.pick({ id: true });
export const ServiceResponseSchema = ServiceBaseSchema.omit({
  accountId: true
});

export const CreateServiceRequestSchema = ServiceBaseSchema.omit({
  id: true,
  accountId: true,
  createdAt: true,
  updatedAt: true,
  parentId: true
});

export const UpdateServiceRequestSchema = ServiceBaseSchema.omit({
  accountId: true,
  createdAt: true,
  updatedAt: true,
  parentId: true
});

export type CreateServiceRequest = z.infer<typeof CreateServiceRequestSchema>;
// ReadServiceRequest
export type UpdateServiceRequest = z.infer<typeof UpdateServiceRequestSchema>;
// DeleteServiceRequest

export type ServiceResponse = z.infer<typeof ServiceResponseSchema>;
