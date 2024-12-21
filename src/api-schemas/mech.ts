/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/mech.ts)
 * Last updated: 2024-12-21T13:23:14.080Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const MechMetricSchema = z.object({
  license: z.string(),
  unit: z.string(),
  mileage_in: z.number(),
  engineHours: z.number()
});

export const MechModelSchema = z.object({});
export const MechMakeSchema = z.object({});

// "license": null,
// "mileage_in": null,
// "unit": null,
// "engineHours": null,
// "id": 12

export const MechBaseSchema = z.object({
  modelYear: z.number(),
  metric: MechMetricSchema,
  model: MechModelSchema
});
