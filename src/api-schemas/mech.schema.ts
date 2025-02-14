/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/mech.schema.ts)
 * Last updated: 2025-02-14T02:52:06.155Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

export const MechModelSchema = z.object({
      name: z.string(),
      id: z.number(),
      make: z.object({
        id: z.number(),
        name: z.string()
      })
    });

export const MechMakeSchema = z.object({});

export const MechMetricSchema = z.object({
  license: z.string().optional().nullable(),
  unit: z.string().optional().nullable(),
  mileage_in: z.number()
    .int()
    .max(999999999, "Mileage value is too large") // 9 digits should be enough
    .optional()
    .nullable(),
  mileage_out: z.number()
    .int()
    .max(999999999, "Mileage value is too large")
    .optional()
    .nullable(),
  engineHours: z.number().int()
    .optional()
    .nullable(),
});

const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/; 

export const MechBaseSchema = z.object({ 
     uuid: z.string().uuid().optional(),
    modelYear: z.number(),
    vin: z.string()
    .regex(vinRegex, 'Invalid VIN format - must be 17 characters excluding I, O, and Q')
    .toUpperCase()  // Normalize to uppercase
    .optional(),
    metric: MechMetricSchema.optional(),
    model: MechModelSchema,
  customer: z.any()  })

export type VehicleResponse = z.infer<typeof MechBaseSchema>;
