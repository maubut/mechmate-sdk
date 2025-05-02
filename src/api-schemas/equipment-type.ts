/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/equipment-type.ts)
 * Last updated: 2025-05-01T17:42:43.428Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import {
  EquipmentFieldRequestSchema,
  EquipmentFieldResponseSchema
} from './equipment-field';
import { EquipmentType } from './common/ts-interfaces';
import { SchemaFromInterface } from './common/utils';

const EquipmentTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  accountId: z.number(),
  fields: z.any()
}) satisfies SchemaFromInterface<EquipmentType>;

// Use PascalCase for schema names to match imported CalendarEventSchema pattern
export const EquipmentTypeRequestSchema = EquipmentTypeSchema.pick({
  accountId: true,
  id: true
}).partial({ id: true });

export const EquipmentTypeResponseSchema = EquipmentTypeSchema.omit({
  accountId: true
}).extend({
  fields: EquipmentFieldResponseSchema.array().optional()
});

export const EquipmentTypeListResponseSchema = z.array(
  EquipmentTypeResponseSchema
);

export const UpdateEquipmentTypeRequestSchema = EquipmentTypeSchema;

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
