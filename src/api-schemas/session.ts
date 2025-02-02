/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/session.ts)
 * Last updated: 2025-02-02T13:24:32.992Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { emailSchema, passwordSchema, usernameSchema, UserResponseSchema } from './user';
import { AccountResponseSchema } from './account.responses';

export const SessionResponseSchema = z.object({
  user: UserResponseSchema,
  account: AccountResponseSchema,
  accessToken: z.string(),
  refreshToken: z.string()
});

export type SessionResponse = z.infer<typeof SessionResponseSchema>;

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
