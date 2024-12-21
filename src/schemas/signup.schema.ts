import { z } from "zod";
import { UserResponseSchema } from "./user.schema";

export const SignupSchema = z.object({
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
    .transform((email) => email.toLowerCase()),
});

export type SignupRequest = z.infer<typeof SignupSchema>;
export type SignupResponse = z.infer<typeof UserResponseSchema>;
