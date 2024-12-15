export const ErrorCodes = {
  UNKNOWN: "ERR_UNKNOWN",

  // Generic validation errors
  INVALID_TYPE: "ERR_INVALID_TYPE",
  INVALID_TYPE_NUMBER: "ERR_INVALID_TYPE_NUMBER",
  INVALID_TYPE_STRING: "ERR_INVALID_TYPE_STRING",
  REQUIRED_FIELD: "ERR_REQUIRED_FIELD",

  // Specific field validations
  INVALID_STRING: "ERR_INVALID_STRING",
  INVALID_EMAIL: "ERR_INVALID_EMAIL",
  INVALID_UUID: "ERR_INVALID_UUID",
  INVALID_PHONE: "ERR_INVALID_PHONE",

  // Custom validations
  MIN_ITEMS: "ERR_MIN_ITEMS",
} as const;
