/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/user.ts)
 * Last updated: 2024-12-27T22:27:51.307Z
 * Update this file when API schema changes
 */

import { z } from 'zod';

const UserBaseSchema = z.object({
  fullname: z.string().nullable(),
  email: z.string().email(),
  username: z.string(),
  permissionFlags: z.string(),
  preferences: z.record(z.any()).nullable(),
  picture: z.string().optional(),

  verified: z.boolean().optional()
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
export const UserListResponseSchema = z.object({
  list: z.array(UserResponseSchema)
});

export type UserResponse = z.infer<typeof UserResponseSchema>;
