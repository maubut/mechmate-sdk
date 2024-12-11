import { z } from "zod";

/**
 * Validates data against a Zod schema and throws if validation fails
 * Use this when you want to handle validation errors with try/catch
 *
 * @param schema - The Zod schema to validate against
 * @param data - The unknown data to validate
 * @returns The validated and typed data
 * @throws {z.ZodError} If validation fails
 *
 * @example
 * try {
 *   const validData = validateRequest(CreateUserSchema, formData);
 *   // validData is now typed and validated
 *   await api.users.create(validData);
 * } catch (error) {
 *   if (error instanceof z.ZodError) {
 *     // Handle validation errors
 *     showFormErrors(error.errors);
 *   }
 * }
 */
export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}

/**
 * Safely validates data against a Zod schema and returns a result object
 * Use this when you prefer handling validation with if/else logic
 *
 * @param schema - The Zod schema to validate against
 * @param data - The unknown data to validate
 * @returns An object indicating success or failure
 *          success: true -> includes validated data
 *          success: false -> includes validation errors
 *
 * @example
 * const result = validateRequestSafe(CreateUserSchema, formData);
 * if (result.success) {
 *   // TypeScript knows result.data is valid here
 *   await api.users.create(result.data);
 * } else {
 *   // TypeScript knows result.errors exists here
 *   showFormErrors(result.errors);
 * }
 */
export function validateRequestSafe<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): { success: true; data: T } | { success: false; errors: z.ZodError } {
  try {
    return { success: true, data: schema.parse(data) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error };
    }
    throw error;
  }
}
