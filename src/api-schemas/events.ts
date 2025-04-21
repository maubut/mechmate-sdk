/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/events.ts)
 * Last updated: 2025-04-21T15:23:13.094Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { CalendarEventSchema } from './generated/zod';

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
