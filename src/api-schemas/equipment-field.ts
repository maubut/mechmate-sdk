/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/equipment-field.ts)
 * Last updated: 2025-05-01T15:53:21.747Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { EquipmentField, FieldPurpose } from './common/ts-interfaces';
import { SchemaFromInterface } from './common/utils';

export const FieldPurposeEnum = [
  'GENERAL',
  'MILEAGE',
  'ENGINE_HOURS',
  'RUNTIME',
  'REGISTRATION',
  'SERIAL_NUMBER',
  'MAKE_MODEL_YEAR'
] as const satisfies readonly FieldPurpose[];

const EquipmentFieldSchema = z.object({
  id: z.number(),
  name: z.string(),
  required: z.boolean(),
  defaultValue: z.string().nullable(),
  purpose: z.enum(FieldPurposeEnum),
  equipmentTypeId: z.number(),
  deletedAt: z.date().nullable()
}) satisfies SchemaFromInterface<EquipmentField>;

export const EquipmentFieldRequestSchema = EquipmentFieldSchema.pick({
  id: true,
  purpose: true,
  name: true
}).partial({
  id: true
});

export const EquipmentFieldResponseSchema = EquipmentFieldSchema.omit({
  equipmentTypeId: true
});
