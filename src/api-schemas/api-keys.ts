/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/api-keys.ts)
 * Last updated: 2025-06-27T02:03:29.979Z
 * Update this file when API schema changes
 */

import { SchemaFromInterface } from './common/utils';
import { ApiKey } from './generated';
import { z } from 'zod';

const ApiKeySchema = z.object({
  id: z.number(),
  uuid: z.string(),
  key: z.string(),
  accountId: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  expiresAt: z.date().nullable(),
  isActive: z.boolean(),
  lastUsedAt: z.date().nullable(),
  allowedOrigins: z.string().nullable(),
  allowedIps: z.string().nullable()
}) satisfies SchemaFromInterface<ApiKey>;

export const ApiKeyRequestSchema = ApiKeySchema.pick({
  accountId: true
});

export const ApiKeyResponseSchema = ApiKeySchema.omit({
  accountId: true
});

export const ApiKeyCreateRequestSchema = ApiKeySchema.omit({
  id: true,
  uuid: true,
  key: true,
  createdAt: true,
  updatedAt: true,
  lastUsedAt: true,
  expiresAt: true
}).extend({
  // Override specific fields to make them optional with defaults
  isActive: z.boolean().optional().default(true),
  description: z.string().nullable().optional(),
  allowedOrigins: z.string().nullable().optional(),
  allowedIps: z.string().nullable().optional()
});

export type ApiKeyResponse = z.infer<typeof ApiKeyResponseSchema>;
