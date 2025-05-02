/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/account.responses.d.ts)
 * Last updated: 2025-04-30T02:52:08.061Z
 * Update this file when API schema changes
 */

import { z } from "zod";
export declare const AccountPreferencesBaseSchema: z.ZodObject<{
    invoiceStartNumber: z.ZodNumber;
    worksheetStartNumber: z.ZodNumber;
    language: z.ZodString;
    hourlyRates: z.ZodOptional<z.ZodObject<{
        rateType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["STANDARD"]>>>;
        valuePerUnit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        rateType: "STANDARD";
        valuePerUnit: number;
    }, {
        valuePerUnit: number;
        rateType?: "STANDARD" | undefined;
    }>>;
    currency: z.ZodString;
    dateTime: z.ZodObject<{
        dateFormat: z.ZodString;
        timeFormat: z.ZodString;
        timezone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    }, {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    }>;
}, "strip", z.ZodTypeAny, {
    invoiceStartNumber: number;
    worksheetStartNumber: number;
    language: string;
    currency: string;
    dateTime: {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    };
    hourlyRates?: {
        rateType: "STANDARD";
        valuePerUnit: number;
    } | undefined;
}, {
    invoiceStartNumber: number;
    worksheetStartNumber: number;
    language: string;
    currency: string;
    dateTime: {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    };
    hourlyRates?: {
        valuePerUnit: number;
        rateType?: "STANDARD" | undefined;
    } | undefined;
}>;
export declare const PackageBaseSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    startedAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
    expireAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
    isTrial: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    startedAt?: string | Date | undefined;
    expireAt?: string | Date | undefined;
    isTrial?: boolean | null | undefined;
}, {
    name: string;
    startedAt?: string | Date | undefined;
    expireAt?: string | Date | undefined;
    isTrial?: boolean | null | undefined;
}>, {
    name: string;
    startedAt?: string | Date | undefined;
    expireAt?: string | Date | undefined;
    isTrial?: boolean | null | undefined;
}, {
    name: string;
    startedAt?: string | Date | undefined;
    expireAt?: string | Date | undefined;
    isTrial?: boolean | null | undefined;
}>;
export declare const AccountBaseSchema: z.ZodObject<{
    preferences: z.ZodObject<{
        invoiceStartNumber: z.ZodNumber;
        worksheetStartNumber: z.ZodNumber;
        language: z.ZodString;
        hourlyRates: z.ZodOptional<z.ZodObject<{
            rateType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["STANDARD"]>>>;
            valuePerUnit: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            rateType: "STANDARD";
            valuePerUnit: number;
        }, {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        }>>;
        currency: z.ZodString;
        dateTime: z.ZodObject<{
            dateFormat: z.ZodString;
            timeFormat: z.ZodString;
            timezone: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        }, {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            rateType: "STANDARD";
            valuePerUnit: number;
        } | undefined;
    }, {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        } | undefined;
    }>;
    package: z.ZodEffects<z.ZodObject<{
        name: z.ZodString;
        startedAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
        expireAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
        isTrial: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }>, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    preferences: {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            rateType: "STANDARD";
            valuePerUnit: number;
        } | undefined;
    };
    package: {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    };
}, {
    preferences: {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        } | undefined;
    };
    package: {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    };
}>;
export declare const AccountResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    preferences: z.ZodObject<{
        invoiceStartNumber: z.ZodNumber;
        worksheetStartNumber: z.ZodNumber;
        language: z.ZodString;
        hourlyRates: z.ZodOptional<z.ZodObject<{
            rateType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["STANDARD"]>>>;
            valuePerUnit: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            rateType: "STANDARD";
            valuePerUnit: number;
        }, {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        }>>;
        currency: z.ZodString;
        dateTime: z.ZodObject<{
            dateFormat: z.ZodString;
            timeFormat: z.ZodString;
            timezone: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        }, {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            rateType: "STANDARD";
            valuePerUnit: number;
        } | undefined;
    }, {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        } | undefined;
    }>;
    package: z.ZodEffects<z.ZodObject<{
        name: z.ZodString;
        startedAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
        expireAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
        isTrial: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }>, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }>;
}, {}>, "strip", z.ZodTypeAny, {
    preferences: {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            rateType: "STANDARD";
            valuePerUnit: number;
        } | undefined;
    };
    package: {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    };
}, {
    preferences: {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        } | undefined;
    };
    package: {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    };
}>;
export declare const CreateAccountPreferencesSchema: z.ZodObject<{
    invoiceStartNumber: z.ZodNumber;
    worksheetStartNumber: z.ZodNumber;
    language: z.ZodString;
    hourlyRates: z.ZodOptional<z.ZodObject<{
        rateType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["STANDARD"]>>>;
        valuePerUnit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        rateType: "STANDARD";
        valuePerUnit: number;
    }, {
        valuePerUnit: number;
        rateType?: "STANDARD" | undefined;
    }>>;
    currency: z.ZodString;
    dateTime: z.ZodObject<{
        dateFormat: z.ZodString;
        timeFormat: z.ZodString;
        timezone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    }, {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    }>;
}, "strip", z.ZodTypeAny, {
    invoiceStartNumber: number;
    worksheetStartNumber: number;
    language: string;
    currency: string;
    dateTime: {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    };
    hourlyRates?: {
        rateType: "STANDARD";
        valuePerUnit: number;
    } | undefined;
}, {
    invoiceStartNumber: number;
    worksheetStartNumber: number;
    language: string;
    currency: string;
    dateTime: {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    };
    hourlyRates?: {
        valuePerUnit: number;
        rateType?: "STANDARD" | undefined;
    } | undefined;
}>;
export declare const UpdateAccountPreferencesSchema: z.ZodObject<{
    invoiceStartNumber: z.ZodOptional<z.ZodNumber>;
    worksheetStartNumber: z.ZodOptional<z.ZodNumber>;
    language: z.ZodOptional<z.ZodString>;
    hourlyRates: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        rateType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["STANDARD"]>>>;
        valuePerUnit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        rateType: "STANDARD";
        valuePerUnit: number;
    }, {
        valuePerUnit: number;
        rateType?: "STANDARD" | undefined;
    }>>>;
    currency: z.ZodOptional<z.ZodString>;
    dateTime: z.ZodOptional<z.ZodObject<{
        dateFormat: z.ZodString;
        timeFormat: z.ZodString;
        timezone: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    }, {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    invoiceStartNumber?: number | undefined;
    worksheetStartNumber?: number | undefined;
    language?: string | undefined;
    hourlyRates?: {
        rateType: "STANDARD";
        valuePerUnit: number;
    } | undefined;
    currency?: string | undefined;
    dateTime?: {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    } | undefined;
}, {
    invoiceStartNumber?: number | undefined;
    worksheetStartNumber?: number | undefined;
    language?: string | undefined;
    hourlyRates?: {
        valuePerUnit: number;
        rateType?: "STANDARD" | undefined;
    } | undefined;
    currency?: string | undefined;
    dateTime?: {
        dateFormat: string;
        timeFormat: string;
        timezone: string;
    } | undefined;
}>;
export declare const DeleteAccountPreferencesSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const AccountPreferencesResponseSchema: z.ZodObject<{
    preferences: z.ZodObject<{
        invoiceStartNumber: z.ZodNumber;
        worksheetStartNumber: z.ZodNumber;
        language: z.ZodString;
        hourlyRates: z.ZodOptional<z.ZodObject<{
            rateType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["STANDARD"]>>>;
            valuePerUnit: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            rateType: "STANDARD";
            valuePerUnit: number;
        }, {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        }>>;
        currency: z.ZodString;
        dateTime: z.ZodObject<{
            dateFormat: z.ZodString;
            timeFormat: z.ZodString;
            timezone: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        }, {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            rateType: "STANDARD";
            valuePerUnit: number;
        } | undefined;
    }, {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        } | undefined;
    }>;
    packages: z.ZodArray<z.ZodEffects<z.ZodObject<{
        name: z.ZodString;
        startedAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
        expireAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
        isTrial: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }>, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }, {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    preferences: {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            rateType: "STANDARD";
            valuePerUnit: number;
        } | undefined;
    };
    packages: {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }[];
}, {
    preferences: {
        invoiceStartNumber: number;
        worksheetStartNumber: number;
        language: string;
        currency: string;
        dateTime: {
            dateFormat: string;
            timeFormat: string;
            timezone: string;
        };
        hourlyRates?: {
            valuePerUnit: number;
            rateType?: "STANDARD" | undefined;
        } | undefined;
    };
    packages: {
        name: string;
        startedAt?: string | Date | undefined;
        expireAt?: string | Date | undefined;
        isTrial?: boolean | null | undefined;
    }[];
}>;
export type CreateAccountPreferencesRequest = z.infer<typeof CreateAccountPreferencesSchema>;
export type UpdateAccountPreferencesRequest = z.infer<typeof UpdateAccountPreferencesSchema>;
export type DeleteAccountPreferencesRequest = z.infer<typeof DeleteAccountPreferencesSchema>;
export type AccountPreferencesResponse = z.infer<typeof AccountPreferencesResponseSchema>;
export type AccountPreferences = z.infer<typeof AccountPreferencesBaseSchema>;
