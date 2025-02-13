import { z } from "zod";
import { ErrorStatusMap, ErrorType } from "../api-schemas/error.schema";

export type ErrorSource = "INTERNAL" | "CLIENT" | "NETWORK" | "UNKNOWN";

export class MechmateError extends Error {
  constructor(
    message: string,
    public readonly type: ErrorType,
    public readonly source: ErrorSource,
    public readonly details?: Record<string, any>,
    public readonly timestamp: string = new Date().toISOString(),
    public correlationId?: string,
    public readonly statusCode: number = ErrorStatusMap[type]
  ) {
    super(message);
    this.name = 'MechmateError';
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
      details
    );
  }

  static fromApiError(error: unknown): MechmateError {
    if (this.isMechmateErrorLike(error)) {
      return new MechmateError(
        error.message,
        error.type as ErrorType,
        error.source as ErrorSource,
        error.details,
        error.timestamp,
        error.correlationId,
        error.statusCode
      );
    }

    // Fallback for unknown errors
    return new MechmateError(
      error instanceof Error ? error.message : 'Unknown error',
      'INTERNAL',
      'UNKNOWN',
      { originalError: error }
    );
  } 

  private static isMechmateErrorLike(error: unknown): error is {
    message: string;
    type: string;
    source: string;
    details?: Record<string, unknown>;
    timestamp?: string;
    correlationId?: string;
    statusCode?: number;
  } {
    return (
      typeof error === 'object' &&
      error !== null &&
      'message' in error &&
      'type' in error &&
      'source' in error
    );
  }

  toJSON() {
    return {
      message: this.message,
      type: this.type,
      source: this.source,
      details: this.details,
      timestamp: this.timestamp,
      correlationId: this.correlationId,
      statusCode: this.statusCode
    };
  }

}
