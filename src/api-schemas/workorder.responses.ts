/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/workorder.responses.ts)
 * Last updated: 2024-12-20T20:49:24.050Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { CustomerBaseSchema } from './customer.responses';

const WorkorderCustomerSchema = CustomerBaseSchema.extend({
  uuid: z.string().uuid().optional()
});

export const CreateWorkorderSchema = z.object({
  statusId: z.number(),

  customer: WorkorderCustomerSchema,

  technician: z.object({ uuid: z.string().uuid() }).optional(),
  mech: z.object({
    uuid: z.string().uuid().optional(),
    modelYear: z.number(),
    model: z.object({
      name: z.string(),
      id: z.number(),
      make: z.object({
        id: z.number(),
        name: z.string()
      })
    })
  })
});

export const UpdateWorkorderSchema = CreateWorkorderSchema.partial();

export const DeleteWorkorderSchema = z.object({
  uuid: z.string().uuid({
    message: 'Invalid workorder UUID'
  })
});

export const BatchDeleteWorkorderSchema = z.object({
  uuids: z.array(z.string().uuid()).min(1, {
    message: 'At least one workorder UUID must be provided'
  })
});

export type CreateWorkorderRequest = z.infer<typeof CreateWorkorderSchema>;
export type UpdateWorkorderRequest = z.infer<typeof UpdateWorkorderSchema>;

export type DeleteWorkorderRequest = z.infer<typeof DeleteWorkorderSchema>;
export type BatchDeleteWorkorderRequest = z.infer<
  typeof BatchDeleteWorkorderSchema
>;

export const WorkorderResponseSchema = z.object({
  uuid: z.string().uuid(),
  worksheetId: z.number(),
  statusId: z.number(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  insights: z
    .object({
      DONE: z.number().optional(),
      total: z.number().optional()
    })
    .optional()
});

export const WorkorderListResponseSchema = z.object({
  list: z.array(WorkorderResponseSchema)
});

export type WorkorderResponse = z.infer<typeof WorkorderResponseSchema>;
