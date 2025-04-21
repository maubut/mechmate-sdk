/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/service.ts)
 * Last updated: 2025-04-21T15:23:13.102Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const ServiceSchema = z.object({
  id: z.number(),
  accountId: z.number(),
  uuid: z.string()
});

export const ServiceRequestSchema = ServiceSchema.pick({ id: true });
export const ServiceResponseSchema = ServiceSchema.omit({
  id: true,
  accountId: true
}).extend({});

export type ServiceResponse = z.infer<typeof ServiceResponseSchema>;
export type SelectServiceRequest = z.infer<typeof ServiceRequestSchema>;
