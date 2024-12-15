import { z } from "zod";

export class MechmateError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: Record<string, any>,
    public correlationId?: string,
  ) {
    super(message);
  }

  static fromZodError(zodError: z.ZodError): MechmateError {
    const details = zodError.errors.reduce<Record<string, string>>(
      (acc, error) => {
        const path = error.path.join(".");
        acc[path] = error.message;
        return acc;
      },
      {},
    );

    return new MechmateError("Validation failed", "ERR_VALIDATION", details);
  }

  static fromApiError(error: any): MechmateError {
    return new MechmateError(
      error.message || "API Error",
      error.code || "ERR_API_UNKNOWN",
      error.details,
      error.correlationId,
    );
  }
}
