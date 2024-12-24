import { z } from "zod";

export type ErrorSource = "INTERNAL" | "CLIENT" | "NETWORK" | "UNKNOWN";

export class MechmateError extends Error {
  constructor(
    message: string,
    public type: string,
    public source: ErrorSource,
    public details?: Record<string, any>,
    public timestamp?: string,
    public correlationId?: string
  ) {
    super(message);
  }

  static fromZodError(zodError: z.ZodError): MechmateError {
    console.log("fromZodError", zodError);

    const details = zodError.errors.reduce<Record<string, string>>(
      (acc, error) => {
        const path = error.path.join(".");
        acc[path] = error.message;
        return acc;
      },
      {}
    );

    return new MechmateError(
      "Validation failed",
      "VALIDATION",
      "CLIENT",
      details,
      new Date().toISOString()
    );
  }

  static fromApiError(error: any): MechmateError {
    console.log("fromAPIError", error);
    return new MechmateError(
      error.message || "API Error",
      error.type || "API_UNKNOWN",
      "INTERNAL",
      error.details,
      error.timestamp,
      error.correlationId
    );
  }
}
