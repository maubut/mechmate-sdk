/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/backend/mechmate-api/src/api-schemas/session.ts)
 * Last updated: 2025-05-06T20:21:36.438Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import {
  emailSchema,
  passwordSchema,
  usernameSchema,
  UserResponseSchema
} from './user';
import { AccountResponseSchema } from './account.responses';

// Core schema
export const SessionResponseSchema = z.object({
  user: UserResponseSchema,
  account: AccountResponseSchema,
  accessToken: z.string(),
  refreshToken: z.string()
});

export const CreateSessionSchema = z
  .object({
    password: passwordSchema,
    username: usernameSchema.optional(),
    email: emailSchema.optional()
  })
  .refine(
    (data) => {
      // Ensure either username or email is provided, but not both
      return (data.username !== undefined) !== (data.email !== undefined);
    },
    {
      message: 'Either username or email must be provided, but not both'
    }
  );

export type CreateSessionRequest = z.infer<typeof CreateSessionSchema>;
export type SessionResponse = z.infer<typeof SessionResponseSchema>;
