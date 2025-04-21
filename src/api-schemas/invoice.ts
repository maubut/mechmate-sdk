/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/invoice.ts)
 * Last updated: 2025-04-21T15:23:13.098Z
 * Update this file when API schema changes
 */

import { z } from "zod";
import { QueryParams } from "./common/query-params";
import { BaseFilterSchema } from "./filters";
import { CustomerBaseSchema } from "./customer.responses";
import { AddressBaseSchema } from "./address";

export const InvoiceFilterScehma = BaseFilterSchema.extend({

})

export interface InvoiceQueryParams extends QueryParams {
    filters?: InvoiceFilter[];
}

export type InvoiceFilter = z.infer<typeof InvoiceFilterScehma>;

const InvoiceCustomerSchema = CustomerBaseSchema.extend({
    uuid: z.string().uuid().optional()
})

const InvoiceAddressSchema = AddressBaseSchema;

export const InvoiceResponseSchema = z.object({
   uuid: z.string().uuid(),
   invoiceId: z.number(),
   customer: InvoiceCustomerSchema, 

   address: InvoiceAddressSchema,

   status: z.enum(['DRAFT', 'READY', 'SENT', 'PAID', 'CANCELED', 'OVERDUE', 'VOID']),

   createdAt: z.date().or(z.string()),
   updatedAt: z.date().or(z.string()),
   dueAt: z.date().or(z.string()).optional().nullable(),
   issuedAt: z.date().or(z.string()).optional().nullable()
})


export type InvoiceResponse = z.infer<typeof InvoiceResponseSchema>;