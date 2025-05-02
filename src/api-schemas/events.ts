/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/events.ts)
 * Last updated: 2025-05-01T13:25:38.999Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { CalendarEvent } from './common/ts-interfaces';
import { SchemaFromInterface } from './common/utils';

const CalendarEventSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  startDate: z.date(),
  endDate: z.date(),
  accountId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  location: z.string().nullable(),
  isAllDay: z.boolean(),
  createdById: z.number().nullable()
  // Reference relationships
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
