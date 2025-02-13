/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/auth-error.schema.ts)
 * Last updated: 2025-02-13T01:00:48.955Z
 * Update this file when API schema changes
 */

// auth-error.schema.ts
import { z } from 'zod';
import { BaseErrorSchema, ErrorTypeEnum } from './error.schema';

// Auth-specific error codes
export const AuthErrorCodeEnum = z.enum([
  'AUTH_TOKEN_EXPIRED',
  'AUTH_USER_NOT_FOUND',
  'AUTH_INVALID_TOKEN',
  'AUTH_NO_TOKEN',
  'AUTH_INVALID_CREDENTIALS',
  'AUTH_SESSION_EXPIRED',
  'AUTH_INSUFFICIENT_PERMISSIONS'
]);

export type AuthErrorCode = z.infer<typeof AuthErrorCodeEnum>;

// Auth-specific error schema
export const AuthErrorSchema = BaseErrorSchema.extend({
  type: z.literal(ErrorTypeEnum.enum.UNAUTHORIZED),
  source: z.literal('CLIENT'),
  code: AuthErrorCodeEnum
});

export type AuthError = z.infer<typeof AuthErrorSchema>;