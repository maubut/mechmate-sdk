import { z } from "zod";
import { SessionSchema } from "./session.schema";

const usernameRegex = /^[a-zA-Z0-9]+([_. -]?[a-zA-Z0-9])*$/;

export const SigninSchema = z.object({
  username: z
    .string()
    .min(1)
    .transform((str) => str.toLowerCase())
    .pipe(
      z.union([
        z.string().email(), // Allows email format
        z.string().regex(usernameRegex), // Allows simple username format
      ]),
    ),
  password: z.string().min(1),
});

export type SigninResponse = z.infer<typeof SessionSchema>;
export type SigninRequest = z.infer<typeof SigninSchema>;
