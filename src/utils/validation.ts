import { z } from "zod";
import { MechmateError } from "../errors";

/**
 * Validates data against a Zod schema and throws if validation fails
 * Use this when you want to handle validation errors with try/catch
 *
 * @param schema - The Zod schema to validate against
 * @param data - The unknown data to validate
 * @returns The validated and typed data
 * @throws {MechmateError} If validation fails
 *
 * @example
 * try {
 *   const validData = validateRequest(CreateUserSchema, formData);
 *   // validData is now typed and validated
 *   await api.users.create(validData);
 * } catch (error) {
 *   if (error instanceof MechmateError) {
 *     // Handle validation errors
 *     showFormErrors(error.details);
 *   }
 * }
 */
export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw MechmateError.fromZodError(error);
    }
    throw error;
  }
}

/**
 * Safely validates data against a Zod schema and returns a result object
 * Use this when you prefer handling validation with if/else logic
 *
 * @param schema - The Zod schema to validate against
 * @param data - The unknown data to validate
 * @returns An object indicating success or failure
 *          success: true -> includes validated data
 *          success: false -> includes MechmateError with validation details
 *
 * @example
 * const result = validateRequestSafe(CreateUserSchema, formData);
 * if (result.success) {
 *   // TypeScript knows result.data is valid here
 *   await api.users.create(result.data);
 * } else {
 *   // TypeScript knows result.error is MechmateError here
 *   showFormErrors(result.error.details);
 * }
 */
export function validateRequestSafe<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): { success: true; data: T } | { success: false; error: MechmateError } {
  try {
    return { success: true, data: schema.parse(data) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: MechmateError.fromZodError(error) };
    }
    throw error;
  }
}
