/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/timelog.ts)
 * Last updated: 2025-07-10T01:37:07.980Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { UserResponseSchema, UserSchema } from './user';
import { QueryParams } from './common/query-params';
import { BaseFilterSchema } from './filters';
import { SchemaFromInterface } from './common/utils';
import { TimeLog } from './common/ts-interfaces';

export const TimeLogBaseSchema = z.object({
  id: z.number(),
  startTime: z.coerce.date().nullable(),
  endTime: z.coerce.date().nullable(),
  duration: z.number().nullable(), // Duration stored in minutes in DB
  notes: z.string().nullable(),
  userId: z.number(),
  entryId: z.number().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  accountId: z.number()
}) satisfies SchemaFromInterface<TimeLog>;

export const CreateWorkorderTimeLogSchema = TimeLogBaseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
}).extend({
  workorderUuid: z.string().uuid(),
  entryId: z.number().optional(),
  endTime: z.coerce.date().nullable().optional(),
  duration: z.number().nullable().optional()
});

export const TimelogResponseSchema = TimeLogBaseSchema.omit({
  accountId: true,
  userId: true
}).extend({
  user: UserSchema.pick({ fullname: true, profileUrl: true, uuid: true }),
  workorderUuid: z.string().uuid().optional()
});

export const CreateTimelogRequestSchema = TimeLogBaseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  userId: true
}).extend({
  workorderUuid: z.string().uuid(),
  entryId: z.number().optional(),
  notes: z.string().nullable().optional(),
  userUuid: z.string().uuid()
});

export type CreateTimelogRequest = z.infer<typeof CreateTimelogRequestSchema>;

export type CreateWorkorderTimeLogRequest = z.infer<
  typeof CreateWorkorderTimeLogSchema
>;

export const UpdateWorkorderTimeLogSchema =
  CreateWorkorderTimeLogSchema.partial();
export type UpdateWorkorderTimeLogRequest = z.infer<
  typeof UpdateWorkorderTimeLogSchema
>;

export const WorkorderTimeLogFilterableFields = {
  workorderUuid: 'string'
} as const;

const workorderTimeLogFields = Object.keys(
  WorkorderTimeLogFilterableFields
) as Array<keyof typeof WorkorderTimeLogFilterableFields>;

export const WorkorderTimeLogFilterSchema = BaseFilterSchema.extend({
  field: z.enum(workorderTimeLogFields as [string, ...string[]])
});

export type WorkorderTimeLogFilter = z.infer<
  typeof WorkorderTimeLogFilterSchema
>;

export interface WorkorderTimeLogQueryParams extends QueryParams {
  filters?: WorkorderTimeLogFilter[];
}

export type TimelogResponse = z.infer<typeof TimelogResponseSchema>;
