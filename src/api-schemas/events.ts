/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/events.ts)
 * Last updated: 2025-05-30T14:50:29.976Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { CalendarEvent } from './common/ts-interfaces';
import { SchemaFromInterface } from './common/utils';

// Core schema
const CalendarEventSchema = z.object({
  id: z.number(),
  uuid: z.string(),
  accountId: z.number(),
  createdById: z.number().nullable(),
  title: z.string().nullable(),
  description: z.string().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().nullable(),
  isAllDay: z.boolean(),
  entityId: z.number().nullable(),
  reminderDate: z.coerce.date().nullable()
}) satisfies SchemaFromInterface<CalendarEvent>;

const EventEntitySchema = z.object({
  uuid: z.string(),
  type: z.enum(['CUSTOMER', 'MECH'])
});

// Use PascalCase for schema names to match imported CalendarEventSchema pattern
export const EventRequestSchema = CalendarEventSchema.pick({ uuid: true });
export const EventResponseSchema = CalendarEventSchema.omit({
  id: true,
  accountId: true,
  entityId: true
}).extend({
  entity: EventEntitySchema.optional()
});

export const EventListResponseSchema = z.array(EventResponseSchema);

export type EventResponse = z.infer<typeof EventResponseSchema>;
export type EventListResponse = z.infer<typeof EventListResponseSchema>;
export type SelectEventRequest = z.infer<typeof EventRequestSchema>;

// Request schema
export const CreateEventRequestSchema = CalendarEventSchema.omit({
  id: true,
  uuid: true,
  entityId: true,
  reminderDate: true,
  createdById: true
}).extend({
  entity: EventEntitySchema.optional()
});

export const UpdateEventRequestSchema = CalendarEventSchema.omit({
  id: true,
  uuid: true,
  accountId: true,
  createdById: true,
  entityId: true,
  reminderDate: true
}).extend({
  entity: EventEntitySchema.optional()
});

export type CreateEventRequest = z.infer<typeof CreateEventRequestSchema>;
export type UpdateEventRequest = z.infer<typeof UpdateEventRequestSchema>;
