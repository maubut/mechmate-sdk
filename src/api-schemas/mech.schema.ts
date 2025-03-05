/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/mech.schema.ts)
 * Last updated: 2025-03-05T01:23:04.580Z
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

export const MechFieldValueSchema = z.object({
  id: z.number().optional(),
  equipmentFieldId: z.number(),
  value: z.string(),
  purpose: z.string(),
  name: z.string().optional(),
});

export const MechFieldValues = z.array(MechFieldValueSchema);

// const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/; 

export const MechBaseSchema = z.object({ 
    uuid: z.string().uuid().optional(),
    modelYear: z.number().optional(),
    serialNumber: z.string()
    .toUpperCase()  // Normalize to uppercase
    .optional(),
    metric: MechMetricSchema.optional().nullable(),
    model: MechModelSchema.optional(),
    fieldValues: MechFieldValues.optional(),
    type: z.any(),
  customer: z.any()  })

export type VehicleResponse = z.infer<typeof MechBaseSchema>;
