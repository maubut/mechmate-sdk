/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/customer.responses.d.ts)
 * Last updated: 2025-04-30T02:52:08.074Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
export declare const CustomerBaseSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    fullname: z.ZodOptional<z.ZodString>;
    mobile: z.ZodString;
}, "strip", z.ZodTypeAny, {
    mobile: string;
    fullname?: string | undefined;
    email?: string | undefined;
}, {
    mobile: string;
    fullname?: string | undefined;
    email?: string | undefined;
}>;
export declare const CustomerVehiclesSchema: z.ZodArray<z.ZodObject<{
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
}>, "many">;
export declare const CreateCustomerSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    fullname: z.ZodOptional<z.ZodString>;
    mobile: z.ZodString;
}, "strip", z.ZodTypeAny, {
    mobile: string;
    fullname?: string | undefined;
    email?: string | undefined;
}, {
    mobile: string;
    fullname?: string | undefined;
    email?: string | undefined;
}>;
export declare const UpdateCustomerSchema: z.ZodObject<z.objectUtil.extendShape<{
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    fullname: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    mobile: z.ZodOptional<z.ZodString>;
}, {
    uuid: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    uuid: string;
    fullname?: string | undefined;
    email?: string | undefined;
    mobile?: string | undefined;
}, {
    uuid: string;
    fullname?: string | undefined;
    email?: string | undefined;
    mobile?: string | undefined;
}>;
export type CreateCustomerRequest = z.infer<typeof CreateCustomerSchema>;
export type UpdateCustomerRequest = z.infer<typeof UpdateCustomerSchema>;
