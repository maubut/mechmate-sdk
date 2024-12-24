import { z } from "zod";

export const customErrorMap: z.ZodErrorMap = (issue, _ctx) => {
  const pathArray = issue.path || [];
  const path = pathArray.join("_").toUpperCase() || "UNKNOWN";

  if (
    (issue.code === z.ZodIssueCode.invalid_type &&
      "received" in issue &&
      issue.received === "undefined") ||
    (issue.code === z.ZodIssueCode.too_small &&
      "minimum" in issue &&
      issue.minimum === 1 &&
      issue.type === "string")
  ) {
    return { message: `ERR_${path}_REQUIRED` };
  }

  switch ((issue as z.ZodIssue).code) {
    case z.ZodIssueCode.invalid_type:
      return {
        message: `ERR_${path}_INVALID_TYPE_${(
          issue as z.ZodInvalidTypeIssue
        ).expected.toUpperCase()}`,
      };

    case z.ZodIssueCode.too_small: {
      if ("type" in issue && "minimum" in issue) {
        if (issue.type === "array") {
          return { message: `ERR_${path}_MIN_ITEMS` };
        }
        if (issue.type === "string") {
          // Special handling for password minimum length
          if (path === "PASSWORD") {
            return { message: `ERR_${path}_MIN` };
          }
          return { message: `ERR_${path}_MIN_LENGTH` };
        }
        if (issue.type === "number") {
          return { message: `ERR_${path}_MIN_VALUE` };
        }
      }
      return { message: `ERR_${path}_MIN` };
    }

    case z.ZodIssueCode.invalid_string: {
      if ((issue as z.ZodInvalidStringIssue).validation === "email") {
        return { message: `ERR_INVALID_${path}` };
      }
      if ((issue as z.ZodInvalidStringIssue).validation === "uuid") {
        return { message: `ERR_INVALID_${path}` };
      }
      // Special handling for password regex validation
      if (path === "PASSWORD") {
        return { message: "ERR_WEAK_PASSWORD" };
      }
      return { message: `ERR_${path}_INVALID_STRING` };
    }

    default:
      return { message: `ERR_${path}_INVALID` };
  }
};
