/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/timelog.ts)
 * Last updated: 2025-04-21T15:23:13.104Z
 * Update this file when API schema changes
 */

import { z } from "zod";
import {  UserResponseSchema } from "./user";
import { QueryParams } from "./common/query-params";
import { BaseFilterSchema } from "./filters";

export const TimeLogBaseSchema = z.object({
    id: z.number().optional(),
    startTime: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)
    .transform((isoString) => new Date(isoString))
    .optional(),
endTime: z.string()
  .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)
  .transform((isoString) => new Date(isoString))
  .optional(),
    user: UserResponseSchema,
    duration: z.number().min(0).optional(),
    notes: z.string().optional(), 
})

export const WorkorderTimeLogSchema = TimeLogBaseSchema.extend({
    workorderUuid: z.string().uuid(),
    entryId: z.number().optional(),
})

export type WorkorderTimeLogResponse = z.infer<typeof WorkorderTimeLogSchema>;

export const CreateWorkorderTimeLogSchema = WorkorderTimeLogSchema.omit({
    id: true
})
export type CreateWorkorderTimeLogRequest = z.infer<typeof CreateWorkorderTimeLogSchema>

export const UpdateWorkorderTimeLogSchema = CreateWorkorderTimeLogSchema.partial();
export type UpdateWorkorderTimeLogRequest = z.infer<typeof UpdateWorkorderTimeLogSchema>

export const WorkorderTimeLogFilterableFields = {
  workorderUuid: 'string'
} as const;

const workorderTimeLogFields = Object.keys(WorkorderTimeLogFilterableFields) as Array<
  keyof typeof WorkorderTimeLogFilterableFields 
>;

export const WorkorderTimeLogFilterSchema = BaseFilterSchema.extend({
  field: z.enum(workorderTimeLogFields as [string, ...string[]])
})

export type WorkorderTimeLogFilter = z.infer<typeof WorkorderTimeLogFilterSchema>;

export interface WorkorderTimeLogQueryParams extends QueryParams {
    filters?: WorkorderTimeLogFilter[]
}
