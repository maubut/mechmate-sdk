import { z } from "zod";

const usernameRegex = /^[a-zA-Z0-9]+([_. -]?[a-zA-Z0-9])*$/;
export const SignInUserSchema = z.object({
  username: z
    .string()
    .min(1)
    .transform((str) => str.toLowerCase())
    .pipe(
      z.union([
        z.string().email("ERR_USERNAME_INVALID_FORMAT"), // Allows email format
        z.string().regex(usernameRegex, "ERR_USERNAME_INVALID_FORMAT"), // Allows simple username format
      ]),
    ),
  password: z.string().min(1),
});

export const UserResponseSchema = z.object({});

export type SignInUserRequest = z.infer<typeof SignInUserSchema>;

export const SignInResponseSchema = z.object({});

export type UserResponse = z.infer<typeof UserResponseSchema>;
