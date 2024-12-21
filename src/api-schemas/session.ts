/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/session.ts)
 * Last updated: 2024-12-21T13:23:14.081Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { UserResponseSchema } from './user';
import { AccountResponseSchema } from './account.responses';
const usernameRegex = /^[a-zA-Z0-9]+([_. -]?[a-zA-Z0-9])*$/;

export const SessionResponseSchema = z.object({
  user: UserResponseSchema,
  account: AccountResponseSchema,
  accessToken: z.string(),
  refreshToken: z.string()
});

export type SessionResponse = z.infer<typeof SessionResponseSchema>;

export const CreateSessionSchema = z
  .object({
    password: z
      .string()
      .min(6)
      .regex(/.*[!@#$%^&*]/, 'Password must contain a special character')
      .regex(/.*\d/, 'Password must contain a number'),

    username: z
      .string()
      .min(1)
      .transform((str) => str.toLowerCase())
      .pipe(
        z.union([
          z.string().email('ERR_USERNAME_INVALID_FORMAT'),
          z.string().regex(usernameRegex, 'ERR_USERNAME_INVALID_FORMAT')
        ])
      )
      .optional(),

    email: z
      .string()
      .email()
      .transform((v) => v.toLowerCase())
      .optional()
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
