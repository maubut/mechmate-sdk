/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/user.ts)
 * Last updated: 2024-12-21T13:23:14.082Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

const UserBaseSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  username: z.string(),
  permissionFlags: z.string(),
  preferences: z.record(z.any()).nullable(),
  picture: z.string().optional()
});

export const UserResponseSchema = UserBaseSchema.extend({
  uuid: z.string().uuid()
});

export const CreateUserSchema = z.object({
  fullname: z.string().min(1),
  password: z
    .string()
    .min(6)
    .pipe(
      z
        .string()
        .regex(/.*[!@#$%^&*]/)
        .regex(/.*\d/)
    ),
  email: z
    .string()
    .email()
    .transform((v) => v.toLowerCase())
});

export type UserResponse = z.infer<typeof UserResponseSchema>;
