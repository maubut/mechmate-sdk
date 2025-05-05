/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/events.ts)
 * Last updated: 2025-05-05T19:38:30.943Z
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

// Use PascalCase for schema names to match imported CalendarEventSchema pattern
export const EventRequestSchema = CalendarEventSchema.pick({ id: true });
export const EventResponseSchema = CalendarEventSchema.omit({
  id: true,
  accountId: true
});

export const EventListResponseSchema = z.array(EventResponseSchema);

export type EventResponse = z.infer<typeof EventResponseSchema>;
export type EventListResponse = z.infer<typeof EventListResponseSchema>;
export type SelectEventRequest = z.infer<typeof EventRequestSchema>;
