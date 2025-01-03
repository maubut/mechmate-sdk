/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/workorder.responses.ts)
 * Last updated: 2024-12-27T20:34:40.095Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { CustomerBaseSchema } from './customer.responses';
import { BaseFilterSchema } from './filters';
import { QueryParams } from './common/query-params';

export const WorkorderFilterableFields = {
  status: 'string',
  technician: 'string'
} as const;

const workorderFields = Object.keys(WorkorderFilterableFields) as Array<
  keyof typeof WorkorderFilterableFields
>;

export const WorkorderFilterSchema = BaseFilterSchema.extend({
  field: z.enum(workorderFields as [string, ...string[]]),
  entityType: z.literal('workorder')
});

export interface WorkorderQueryParams extends QueryParams {
  filters?: WorkorderFilter[];
}

export type WorkorderFilter = z.infer<typeof WorkorderFilterSchema>;

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
  technician: z.any().optional(),
  mech: z.any().optional(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  insights: z
    .object({
      DONE: z.number(),
      total: z.number()
    })
    .optional()
});

export const WorkorderListResponseSchema = z.object({
  list: z.array(WorkorderResponseSchema)
});

export type WorkorderResponse = z.infer<typeof WorkorderResponseSchema>;
