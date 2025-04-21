/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/equipment-field.ts)
 * Last updated: 2025-04-21T15:23:13.091Z
 * Update this file when API schema changes
 */

import { EquipmentFieldSchema } from './generated/zod';

// Use PascalCase for schema names to match imported CalendarEventSchema pattern
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
