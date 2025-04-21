/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/equipment-type.ts)
 * Last updated: 2025-04-21T15:23:13.092Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import {
  EquipmentFieldRequestSchema,
  EquipmentFieldResponseSchema
} from './equipment-field';

export const EquipmentTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  accountId: z.number()
});

// Use PascalCase for schema names to match imported CalendarEventSchema pattern
export const EquipmentTypeRequestSchema = EquipmentTypeSchema.extend({
  fields: EquipmentFieldRequestSchema.array().optional()
});

export const EquipmentTypeResponseSchema = EquipmentTypeSchema.omit({
  accountId: true
}).extend({
  fields: EquipmentFieldResponseSchema.array().optional()
});

export const EquipmentTypeListResponseSchema = z.array(
  EquipmentTypeResponseSchema
);

export const UpdateEquipmentTypeRequestSchema =
  EquipmentTypeRequestSchema.required({
    id: true
  });

export type UpdateEquipmentTypeRequest = z.infer<
  typeof UpdateEquipmentTypeRequestSchema
>;

export type EquipmentTypeResponse = z.infer<typeof EquipmentTypeResponseSchema>;
export type EquipmentTypeListResponse = z.infer<
  typeof EquipmentTypeListResponseSchema
>;

export type SelectEquipmentTypeRequest = z.infer<
  typeof EquipmentTypeRequestSchema
>;

// CreateEquipmentTypeRequest
// ReadEqupipmentTypeRequest
// UpdateEquipmentTypeRequest
// DeleteEquipmentTypeRequest

// CreateEquipmentTypeResponse
// ReadEqupipmentTypeResponse
// UpdateEquipmentTypeResponse
// DeleteEquipmentTypeResponse
