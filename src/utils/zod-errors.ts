import { z } from "zod";

export const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  const pathArray = issue.path || [];
  const path = pathArray.join("_").toUpperCase() || "UNKNOWN";

  if (
    issue.code === z.ZodIssueCode.invalid_type &&
    issue.received === "undefined"
  ) {
    return { message: `ERR_${path}_REQUIRED` };
  }

  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      return {
        message: `ERR_${path}_INVALID_TYPE_${issue.expected.toUpperCase()}`,
      };

    case z.ZodIssueCode.invalid_string:
      if (issue.validation === "email") {
        return { message: `ERR_${path}_INVALID_EMAIL` };
      }
      if (issue.validation === "uuid") {
        return { message: `ERR_${path}_INVALID_UUID` };
      }
      return { message: `ERR_${path}_INVALID_STRING` };

    case z.ZodIssueCode.too_small:
      if (issue.type === "array") {
        return { message: `ERR_${path}_MIN_ITEMS` };
      }
      if (issue.type === "string") {
        return { message: `ERR_${path}_MIN_LENGTH` };
      }
      if (issue.type === "number") {
        return { message: `ERR_${path}_MIN_VALUE` };
      }
      return { message: `ERR_${path}_MIN` };

    default:
      return { message: `ERR_${path}_INVALID` };
  }
};
