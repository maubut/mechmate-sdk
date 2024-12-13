import { z } from "zod";
import { SessionSchema } from "./session.schema";

export const LoginSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .transform((str) => str.toLowerCase())
    .pipe(
      z.union([
        z.string().email(), // Allows email format
        z.string().regex(/^[a-zA-Z0-9]+$/), // Allows simple username format
      ]),
    ),
  password: z.string(),
});

export type LoginResponse = z.infer<typeof SessionSchema>;
export type LoginRequest = z.infer<typeof LoginSchema>;
