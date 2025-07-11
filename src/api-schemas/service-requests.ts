/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/service-requests.ts)
 * Last updated: 2025-07-11T02:06:00.516Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { ServiceBaseSchema } from './service';
import { PriceBaseSchema } from './price.responses';

// Request schemas for service operations
export const CreateServiceRequestSchema = ServiceBaseSchema.omit({
  id: true,
  accountId: true,
  createdAt: true,
  updatedAt: true,
  parentId: true
}).extend({
  price: PriceBaseSchema.optional()
});

export const UpdateServiceRequestSchema = ServiceBaseSchema.omit({
  accountId: true,
  createdAt: true,
  updatedAt: true,
  parentId: true
}).extend({
  price: PriceBaseSchema.optional()
}).partial().extend({
  id: z.number() // ID is required for updates
});

export const DeleteServiceRequestSchema = z.object({
  id: z.number()
});

// Enhanced response schema with price information
export const ServiceResponseSchema = ServiceBaseSchema.omit({
  accountId: true
}).extend({
  price: PriceBaseSchema.optional()
});

// Type exports
export type CreateServiceRequest = z.infer<typeof CreateServiceRequestSchema>;
export type UpdateServiceRequest = z.infer<typeof UpdateServiceRequestSchema>;
export type DeleteServiceRequest = z.infer<typeof DeleteServiceRequestSchema>;
export type ServiceResponse = z.infer<typeof ServiceResponseSchema>;
