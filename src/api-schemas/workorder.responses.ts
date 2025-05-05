/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/workorder.responses.ts)
 * Last updated: 2025-05-05T20:12:01.388Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import {
  CreateCustomerRequestSchema,
  CustomerResponseSchema,
  UpdateCustomerRequestSchema
} from './customer.responses';
import { BaseFilterSchema } from './filters';
import { QueryParams } from './common/query-params';
import { MechBaseSchema } from './mech.schema';
import { Worksheet } from './common/ts-interfaces';
import { SchemaFromInterface } from './common/utils';

// Core schema
const WorksheetSchema = z.object({
  id: z.number(),
  uuid: z.string().uuid(),
  worksheetId: z.number(),
  mechId: z.number().nullable(),
  accountId: z.number(),
  statusId: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  dueAt: z.coerce.date().nullable(),
  userId: z.number().nullable()
}) satisfies SchemaFromInterface<Worksheet>;

// export const WorkorderBaseResponseSchema = z.object({
//   technician: z.any().optional(),
//   mech: MechBaseSchema.optional(),
//   createdAt: z.date().or(z.string()),
//   updatedAt: z.date().or(z.string()),
//   dueAt: z.date().or(z.string()).optional(),
//   insights: z
//     .object({
//       DONE: z.number(),
//       total: z.number()
//     })
//     .optional()
// });

// Request schema
export const CreateWorkorderRequestSchema = WorksheetSchema.omit({
  id: true
});

export const WorkorderResponseSchema = WorksheetSchema.omit({
  id: true,
  accountId: true,
  mechId: true,
  userId: true
});

export const WorkorderFilterableFields = {
  status: 'string',
  technician: 'string'
} as const;

const workorderFields = Object.keys(WorkorderFilterableFields) as Array<
  keyof typeof WorkorderFilterableFields
>;

export const WorkorderFilterSchema = BaseFilterSchema.extend({
  field: z.enum(workorderFields as [string, ...string[]])
});

export interface WorkorderQueryParams extends QueryParams {
  filters?: WorkorderFilter[];
}

export type WorkorderFilter = z.infer<typeof WorkorderFilterSchema>;

export const CreateWorkorderSchema = z.object({
  statusId: z.number(),
  customer: z.union([CreateCustomerRequestSchema, UpdateCustomerRequestSchema]),
  technician: z.object({ uuid: z.string().uuid() }).optional(),
  mech: MechBaseSchema,
  dueDate: z.date().or(z.string()).optional()
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

export const WorkorderBaseResponseSchema = z.object({
  uuid: z.string().uuid(),
  worksheetId: z.number(),
  statusId: z.number(),
  technician: z.any().optional(),
  mech: MechBaseSchema.optional(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  dueAt: z.date().or(z.string()).optional(),
  insights: z
    .object({
      DONE: z.number(),
      total: z.number()
    })
    .optional()
});

// export type WorkorderResponse = z.infer<typeof WorkorderResponseSchema>;

// Schema for detailed single workorder response with complete entries
export const WorkorderDetailResponseSchema = WorkorderBaseResponseSchema.extend(
  {
    // Complete entry data for detailed view
  }
);

// Schema for list response with simplified entry previews
export const WorkorderListItemResponseSchema =
  WorkorderBaseResponseSchema.extend({
    // Simplified entry previews for list view
    entries: z
      .array(z.object({ name: z.string(), content: z.string() }))
      .optional()
  });

export const WorkorderListResponseSchema = z.object({
  list: z.array(WorkorderListItemResponseSchema)
});

// export type WorkorderResponse = z.infer<typeof WorkorderDetailResponseSchema>;
export type WorkorderDetailResponse = z.infer<
  typeof WorkorderDetailResponseSchema
>;
export type WorkorderListItemResponse = z.infer<
  typeof WorkorderListItemResponseSchema
>;

// export type CreateEquipmentTypeRequest = z.infer<typeof CreateEquipmentTypeRequestSchema>;
// export type ReadEquipmentTypeRequest = z.infer<typeof ReadEquipmentTypeRequestSchema>;
// export type UpdateEquipmentTypeRequest = z.infer<typeof UpdateEquipmentTypeRequestSchema>;
// export type DeleteEquipmentTypeRequest = z.infer<typeof DeleteEquipmentTypeRequestSchema>;
export type WorkorderResponse = z.infer<typeof WorkorderResponseSchema>;
// export type WorkorderResponseListResponse = z.infer<typeof WorkorderListResponseSchema>;
