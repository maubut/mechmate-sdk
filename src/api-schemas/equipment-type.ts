/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/equipment-type.ts)
 * Last updated: 2025-04-27T23:19:16.229Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import {
  EquipmentFieldRequestSchema,
  EquipmentFieldResponseSchema
} from './equipment-field';
import { EquipmentTypeSchema } from './generated/zod';

// Use PascalCase for schema names to match imported CalendarEventSchema pattern
export const EquipmentTypeRequestSchema = EquipmentTypeSchema.pick({
  id: true,
  accountId: true
})
  .partial({
    id: true
  })
  .extend({
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

export const UpdateEquipmentTypeRequestSchema = EquipmentTypeSchema.pick({
  id: true,
  name: true,
  accountId: true
}).extend({
  fields: EquipmentFieldRequestSchema.array().optional()
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
