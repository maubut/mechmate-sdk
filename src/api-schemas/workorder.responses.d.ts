/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/workorder.responses.d.ts)
 * Last updated: 2025-04-30T02:52:08.093Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { QueryParams } from './common/query-params';
export declare const WorkorderFilterableFields: {
    readonly status: "string";
    readonly technician: "string";
};
export declare const WorkorderFilterSchema: z.ZodObject<z.objectUtil.extendShape<{
    field: z.ZodString;
    operator: z.ZodEnum<["IS", "IS_NOT", "CONTAINS", "NOT_CONTAINS", "GREATER_THAN", "LESS_THAN", "BETWEEN", "IN", "NOT_IN", "BEFORE"]>;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodDate, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, "many">]>;
}, {
    field: z.ZodEnum<[string, ...string[]]>;
}>, "strip", z.ZodTypeAny, {
    value: string | number | boolean | Date | (string | number | Date)[];
    field: string;
    operator: "IS" | "IS_NOT" | "CONTAINS" | "NOT_CONTAINS" | "GREATER_THAN" | "LESS_THAN" | "BETWEEN" | "IN" | "NOT_IN" | "BEFORE";
}, {
    value: string | number | boolean | Date | (string | number | Date)[];
    field: string;
    operator: "IS" | "IS_NOT" | "CONTAINS" | "NOT_CONTAINS" | "GREATER_THAN" | "LESS_THAN" | "BETWEEN" | "IN" | "NOT_IN" | "BEFORE";
}>;
export interface WorkorderQueryParams extends QueryParams {
    filters?: WorkorderFilter[];
}
export type WorkorderFilter = z.infer<typeof WorkorderFilterSchema>;
export declare const CreateWorkorderSchema: z.ZodObject<{
    statusId: z.ZodNumber;
    customer: z.ZodObject<z.objectUtil.extendShape<{
        email: z.ZodOptional<z.ZodString>;
        fullname: z.ZodOptional<z.ZodString>;
        mobile: z.ZodString;
    }, {
        uuid: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        mobile: string;
        fullname?: string | undefined;
        email?: string | undefined;
        uuid?: string | undefined;
    }, {
        mobile: string;
        fullname?: string | undefined;
        email?: string | undefined;
        uuid?: string | undefined;
    }>;
    technician: z.ZodOptional<z.ZodObject<{
        uuid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
    }, {
        uuid: string;
    }>>;
    mech: z.ZodObject<{
        uuid: z.ZodOptional<z.ZodString>;
        modelYear: z.ZodOptional<z.ZodNumber>;
        serialNumber: z.ZodOptional<z.ZodString>;
        metric: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            unit: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            mileage_in: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            mileage_out: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            engineHours: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }>>>;
        model: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            id: z.ZodNumber;
            make: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                id: number;
            }, {
                name: string;
                id: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }>>;
        fieldValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            equipmentFieldId: z.ZodNumber;
            value: z.ZodString;
            purpose: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }>, "many">>;
        type: z.ZodAny;
        customer: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }>;
    dueDate: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    customer: {
        mobile: string;
        fullname?: string | undefined;
        email?: string | undefined;
        uuid?: string | undefined;
    };
    statusId: number;
    mech: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    };
    technician?: {
        uuid: string;
    } | undefined;
    dueDate?: string | Date | undefined;
}, {
    customer: {
        mobile: string;
        fullname?: string | undefined;
        email?: string | undefined;
        uuid?: string | undefined;
    };
    statusId: number;
    mech: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    };
    technician?: {
        uuid: string;
    } | undefined;
    dueDate?: string | Date | undefined;
}>;
export declare const UpdateWorkorderSchema: z.ZodObject<{
    statusId: z.ZodOptional<z.ZodNumber>;
    customer: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        email: z.ZodOptional<z.ZodString>;
        fullname: z.ZodOptional<z.ZodString>;
        mobile: z.ZodString;
    }, {
        uuid: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        mobile: string;
        fullname?: string | undefined;
        email?: string | undefined;
        uuid?: string | undefined;
    }, {
        mobile: string;
        fullname?: string | undefined;
        email?: string | undefined;
        uuid?: string | undefined;
    }>>;
    technician: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        uuid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
    }, {
        uuid: string;
    }>>>;
    mech: z.ZodOptional<z.ZodObject<{
        uuid: z.ZodOptional<z.ZodString>;
        modelYear: z.ZodOptional<z.ZodNumber>;
        serialNumber: z.ZodOptional<z.ZodString>;
        metric: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            unit: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            mileage_in: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            mileage_out: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            engineHours: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }>>>;
        model: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            id: z.ZodNumber;
            make: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                id: number;
            }, {
                name: string;
                id: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }>>;
        fieldValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            equipmentFieldId: z.ZodNumber;
            value: z.ZodString;
            purpose: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }>, "many">>;
        type: z.ZodAny;
        customer: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }>>;
    dueDate: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>>;
}, "strip", z.ZodTypeAny, {
    customer?: {
        mobile: string;
        fullname?: string | undefined;
        email?: string | undefined;
        uuid?: string | undefined;
    } | undefined;
    technician?: {
        uuid: string;
    } | undefined;
    statusId?: number | undefined;
    mech?: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    } | undefined;
    dueDate?: string | Date | undefined;
}, {
    customer?: {
        mobile: string;
        fullname?: string | undefined;
        email?: string | undefined;
        uuid?: string | undefined;
    } | undefined;
    technician?: {
        uuid: string;
    } | undefined;
    statusId?: number | undefined;
    mech?: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    } | undefined;
    dueDate?: string | Date | undefined;
}>;
export declare const DeleteWorkorderSchema: z.ZodObject<{
    uuid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    uuid: string;
}, {
    uuid: string;
}>;
export declare const BatchDeleteWorkorderSchema: z.ZodObject<{
    uuids: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    uuids: string[];
}, {
    uuids: string[];
}>;
export type CreateWorkorderRequest = z.infer<typeof CreateWorkorderSchema>;
export type UpdateWorkorderRequest = z.infer<typeof UpdateWorkorderSchema>;
export type DeleteWorkorderRequest = z.infer<typeof DeleteWorkorderSchema>;
export type BatchDeleteWorkorderRequest = z.infer<typeof BatchDeleteWorkorderSchema>;
export declare const WorkorderBaseResponseSchema: z.ZodObject<{
    uuid: z.ZodString;
    worksheetId: z.ZodNumber;
    statusId: z.ZodNumber;
    technician: z.ZodOptional<z.ZodAny>;
    mech: z.ZodOptional<z.ZodObject<{
        uuid: z.ZodOptional<z.ZodString>;
        modelYear: z.ZodOptional<z.ZodNumber>;
        serialNumber: z.ZodOptional<z.ZodString>;
        metric: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            unit: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            mileage_in: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            mileage_out: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            engineHours: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }>>>;
        model: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            id: z.ZodNumber;
            make: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                id: number;
            }, {
                name: string;
                id: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }>>;
        fieldValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            equipmentFieldId: z.ZodNumber;
            value: z.ZodString;
            purpose: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }>, "many">>;
        type: z.ZodAny;
        customer: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }>>;
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
    updatedAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
    dueAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
    insights: z.ZodOptional<z.ZodObject<{
        DONE: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
        DONE: number;
    }, {
        total: number;
        DONE: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    uuid: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    statusId: number;
    worksheetId: number;
    technician?: any;
    mech?: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    } | undefined;
    dueAt?: string | Date | undefined;
    insights?: {
        total: number;
        DONE: number;
    } | undefined;
}, {
    uuid: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    statusId: number;
    worksheetId: number;
    technician?: any;
    mech?: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    } | undefined;
    dueAt?: string | Date | undefined;
    insights?: {
        total: number;
        DONE: number;
    } | undefined;
}>;
export declare const WorkorderResponseSchema: z.ZodObject<z.objectUtil.extendShape<Omit<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    worksheetId: z.ZodNumber;
    mechId: z.ZodNullable<z.ZodNumber>;
    accountId: z.ZodNumber;
    statusId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    dueAt: z.ZodNullable<z.ZodDate>;
    userId: z.ZodNullable<z.ZodNumber>;
}, "id" | "accountId" | "mechId" | "userId">, {
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
    updatedAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
    dueAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
}>, "strip", z.ZodTypeAny, {
    uuid: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    statusId: number;
    worksheetId: number;
    dueAt?: string | Date | undefined;
}, {
    uuid: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    statusId: number;
    worksheetId: number;
    dueAt?: string | Date | undefined;
}>;
export type WorkorderResponse = z.infer<typeof WorkorderResponseSchema>;
export declare const WorkorderDetailResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    uuid: z.ZodString;
    worksheetId: z.ZodNumber;
    statusId: z.ZodNumber;
    technician: z.ZodOptional<z.ZodAny>;
    mech: z.ZodOptional<z.ZodObject<{
        uuid: z.ZodOptional<z.ZodString>;
        modelYear: z.ZodOptional<z.ZodNumber>;
        serialNumber: z.ZodOptional<z.ZodString>;
        metric: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            unit: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            mileage_in: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            mileage_out: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            engineHours: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }>>>;
        model: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            id: z.ZodNumber;
            make: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                id: number;
            }, {
                name: string;
                id: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }>>;
        fieldValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            equipmentFieldId: z.ZodNumber;
            value: z.ZodString;
            purpose: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }>, "many">>;
        type: z.ZodAny;
        customer: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }>>;
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
    updatedAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
    dueAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
    insights: z.ZodOptional<z.ZodObject<{
        DONE: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
        DONE: number;
    }, {
        total: number;
        DONE: number;
    }>>;
}, {}>, "strip", z.ZodTypeAny, {
    uuid: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    statusId: number;
    worksheetId: number;
    technician?: any;
    mech?: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    } | undefined;
    dueAt?: string | Date | undefined;
    insights?: {
        total: number;
        DONE: number;
    } | undefined;
}, {
    uuid: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    statusId: number;
    worksheetId: number;
    technician?: any;
    mech?: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    } | undefined;
    dueAt?: string | Date | undefined;
    insights?: {
        total: number;
        DONE: number;
    } | undefined;
}>;
export declare const WorkorderListItemResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    uuid: z.ZodString;
    worksheetId: z.ZodNumber;
    statusId: z.ZodNumber;
    technician: z.ZodOptional<z.ZodAny>;
    mech: z.ZodOptional<z.ZodObject<{
        uuid: z.ZodOptional<z.ZodString>;
        modelYear: z.ZodOptional<z.ZodNumber>;
        serialNumber: z.ZodOptional<z.ZodString>;
        metric: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            unit: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            mileage_in: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            mileage_out: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            engineHours: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }, {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        }>>>;
        model: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            id: z.ZodNumber;
            make: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                id: number;
            }, {
                name: string;
                id: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }, {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        }>>;
        fieldValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            equipmentFieldId: z.ZodNumber;
            value: z.ZodString;
            purpose: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }, {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }>, "many">>;
        type: z.ZodAny;
        customer: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }, {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    }>>;
    createdAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
    updatedAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
    dueAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
    insights: z.ZodOptional<z.ZodObject<{
        DONE: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
        DONE: number;
    }, {
        total: number;
        DONE: number;
    }>>;
}, {
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        content: string;
    }, {
        name: string;
        content: string;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    uuid: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    statusId: number;
    worksheetId: number;
    entries?: {
        name: string;
        content: string;
    }[] | undefined;
    technician?: any;
    mech?: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    } | undefined;
    dueAt?: string | Date | undefined;
    insights?: {
        total: number;
        DONE: number;
    } | undefined;
}, {
    uuid: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    statusId: number;
    worksheetId: number;
    entries?: {
        name: string;
        content: string;
    }[] | undefined;
    technician?: any;
    mech?: {
        type?: any;
        uuid?: string | undefined;
        modelYear?: number | undefined;
        serialNumber?: string | undefined;
        metric?: {
            license?: string | null | undefined;
            unit?: string | null | undefined;
            mileage_in?: number | null | undefined;
            mileage_out?: number | null | undefined;
            engineHours?: number | null | undefined;
        } | null | undefined;
        model?: {
            name: string;
            id: number;
            make: {
                name: string;
                id: number;
            };
        } | undefined;
        fieldValues?: {
            value: string;
            equipmentFieldId: number;
            purpose: string;
            name?: string | undefined;
            id?: number | undefined;
        }[] | undefined;
        customer?: any;
    } | undefined;
    dueAt?: string | Date | undefined;
    insights?: {
        total: number;
        DONE: number;
    } | undefined;
}>;
export declare const WorkorderListResponseSchema: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        uuid: z.ZodString;
        worksheetId: z.ZodNumber;
        statusId: z.ZodNumber;
        technician: z.ZodOptional<z.ZodAny>;
        mech: z.ZodOptional<z.ZodObject<{
            uuid: z.ZodOptional<z.ZodString>;
            modelYear: z.ZodOptional<z.ZodNumber>;
            serialNumber: z.ZodOptional<z.ZodString>;
            metric: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                license: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                unit: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                mileage_in: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                mileage_out: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                engineHours: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                license?: string | null | undefined;
                unit?: string | null | undefined;
                mileage_in?: number | null | undefined;
                mileage_out?: number | null | undefined;
                engineHours?: number | null | undefined;
            }, {
                license?: string | null | undefined;
                unit?: string | null | undefined;
                mileage_in?: number | null | undefined;
                mileage_out?: number | null | undefined;
                engineHours?: number | null | undefined;
            }>>>;
            model: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
                id: z.ZodNumber;
                make: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    id: number;
                }, {
                    name: string;
                    id: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                id: number;
                make: {
                    name: string;
                    id: number;
                };
            }, {
                name: string;
                id: number;
                make: {
                    name: string;
                    id: number;
                };
            }>>;
            fieldValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                equipmentFieldId: z.ZodNumber;
                value: z.ZodString;
                purpose: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                equipmentFieldId: number;
                purpose: string;
                name?: string | undefined;
                id?: number | undefined;
            }, {
                value: string;
                equipmentFieldId: number;
                purpose: string;
                name?: string | undefined;
                id?: number | undefined;
            }>, "many">>;
            type: z.ZodAny;
            customer: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            type?: any;
            uuid?: string | undefined;
            modelYear?: number | undefined;
            serialNumber?: string | undefined;
            metric?: {
                license?: string | null | undefined;
                unit?: string | null | undefined;
                mileage_in?: number | null | undefined;
                mileage_out?: number | null | undefined;
                engineHours?: number | null | undefined;
            } | null | undefined;
            model?: {
                name: string;
                id: number;
                make: {
                    name: string;
                    id: number;
                };
            } | undefined;
            fieldValues?: {
                value: string;
                equipmentFieldId: number;
                purpose: string;
                name?: string | undefined;
                id?: number | undefined;
            }[] | undefined;
            customer?: any;
        }, {
            type?: any;
            uuid?: string | undefined;
            modelYear?: number | undefined;
            serialNumber?: string | undefined;
            metric?: {
                license?: string | null | undefined;
                unit?: string | null | undefined;
                mileage_in?: number | null | undefined;
                mileage_out?: number | null | undefined;
                engineHours?: number | null | undefined;
            } | null | undefined;
            model?: {
                name: string;
                id: number;
                make: {
                    name: string;
                    id: number;
                };
            } | undefined;
            fieldValues?: {
                value: string;
                equipmentFieldId: number;
                purpose: string;
                name?: string | undefined;
                id?: number | undefined;
            }[] | undefined;
            customer?: any;
        }>>;
        createdAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
        updatedAt: z.ZodUnion<[z.ZodDate, z.ZodString]>;
        dueAt: z.ZodOptional<z.ZodUnion<[z.ZodDate, z.ZodString]>>;
        insights: z.ZodOptional<z.ZodObject<{
            DONE: z.ZodNumber;
            total: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            total: number;
            DONE: number;
        }, {
            total: number;
            DONE: number;
        }>>;
    }, {
        entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            content: string;
        }, {
            name: string;
            content: string;
        }>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        uuid: string;
        createdAt: string | Date;
        updatedAt: string | Date;
        statusId: number;
        worksheetId: number;
        entries?: {
            name: string;
            content: string;
        }[] | undefined;
        technician?: any;
        mech?: {
            type?: any;
            uuid?: string | undefined;
            modelYear?: number | undefined;
            serialNumber?: string | undefined;
            metric?: {
                license?: string | null | undefined;
                unit?: string | null | undefined;
                mileage_in?: number | null | undefined;
                mileage_out?: number | null | undefined;
                engineHours?: number | null | undefined;
            } | null | undefined;
            model?: {
                name: string;
                id: number;
                make: {
                    name: string;
                    id: number;
                };
            } | undefined;
            fieldValues?: {
                value: string;
                equipmentFieldId: number;
                purpose: string;
                name?: string | undefined;
                id?: number | undefined;
            }[] | undefined;
            customer?: any;
        } | undefined;
        dueAt?: string | Date | undefined;
        insights?: {
            total: number;
            DONE: number;
        } | undefined;
    }, {
        uuid: string;
        createdAt: string | Date;
        updatedAt: string | Date;
        statusId: number;
        worksheetId: number;
        entries?: {
            name: string;
            content: string;
        }[] | undefined;
        technician?: any;
        mech?: {
            type?: any;
            uuid?: string | undefined;
            modelYear?: number | undefined;
            serialNumber?: string | undefined;
            metric?: {
                license?: string | null | undefined;
                unit?: string | null | undefined;
                mileage_in?: number | null | undefined;
                mileage_out?: number | null | undefined;
                engineHours?: number | null | undefined;
            } | null | undefined;
            model?: {
                name: string;
                id: number;
                make: {
                    name: string;
                    id: number;
                };
            } | undefined;
            fieldValues?: {
                value: string;
                equipmentFieldId: number;
                purpose: string;
                name?: string | undefined;
                id?: number | undefined;
            }[] | undefined;
            customer?: any;
        } | undefined;
        dueAt?: string | Date | undefined;
        insights?: {
            total: number;
            DONE: number;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        uuid: string;
        createdAt: string | Date;
        updatedAt: string | Date;
        statusId: number;
        worksheetId: number;
        entries?: {
            name: string;
            content: string;
        }[] | undefined;
        technician?: any;
        mech?: {
            type?: any;
            uuid?: string | undefined;
            modelYear?: number | undefined;
            serialNumber?: string | undefined;
            metric?: {
                license?: string | null | undefined;
                unit?: string | null | undefined;
                mileage_in?: number | null | undefined;
                mileage_out?: number | null | undefined;
                engineHours?: number | null | undefined;
            } | null | undefined;
            model?: {
                name: string;
                id: number;
                make: {
                    name: string;
                    id: number;
                };
            } | undefined;
            fieldValues?: {
                value: string;
                equipmentFieldId: number;
                purpose: string;
                name?: string | undefined;
                id?: number | undefined;
            }[] | undefined;
            customer?: any;
        } | undefined;
        dueAt?: string | Date | undefined;
        insights?: {
            total: number;
            DONE: number;
        } | undefined;
    }[];
}, {
    list: {
        uuid: string;
        createdAt: string | Date;
        updatedAt: string | Date;
        statusId: number;
        worksheetId: number;
        entries?: {
            name: string;
            content: string;
        }[] | undefined;
        technician?: any;
        mech?: {
            type?: any;
            uuid?: string | undefined;
            modelYear?: number | undefined;
            serialNumber?: string | undefined;
            metric?: {
                license?: string | null | undefined;
                unit?: string | null | undefined;
                mileage_in?: number | null | undefined;
                mileage_out?: number | null | undefined;
                engineHours?: number | null | undefined;
            } | null | undefined;
            model?: {
                name: string;
                id: number;
                make: {
                    name: string;
                    id: number;
                };
            } | undefined;
            fieldValues?: {
                value: string;
                equipmentFieldId: number;
                purpose: string;
                name?: string | undefined;
                id?: number | undefined;
            }[] | undefined;
            customer?: any;
        } | undefined;
        dueAt?: string | Date | undefined;
        insights?: {
            total: number;
            DONE: number;
        } | undefined;
    }[];
}>;
export type WorkorderDetailResponse = z.infer<typeof WorkorderDetailResponseSchema>;
export type WorkorderListItemResponse = z.infer<typeof WorkorderListItemResponseSchema>;
