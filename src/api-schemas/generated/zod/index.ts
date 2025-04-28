/**
 * Schema duplicated from API (/home/maubut/projects/mechmate/mechmate-api/src/api-schemas/generated/zod/index.ts)
 * Last updated: 2025-04-28T00:27:37.578Z
 * Update this file when API schema changes
 */

import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null | 'JsonNull' | 'DbNull' | Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull;

export const transformJsonNull = (v?: NullableJsonInput) => {
  if (!v || v === 'DbNull') return Prisma.DbNull;
  if (v === 'JsonNull') return Prisma.JsonNull;
  return v;
};

export const JsonValueSchema: z.ZodType<Prisma.JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.literal(null),
    z.record(z.lazy(() => JsonValueSchema.optional())),
    z.array(z.lazy(() => JsonValueSchema)),
  ])
);

export type JsonValueType = z.infer<typeof JsonValueSchema>;

export const NullableJsonValue = z
  .union([JsonValueSchema, z.literal('DbNull'), z.literal('JsonNull')])
  .nullable()
  .transform((v) => transformJsonNull(v));

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.object({ toJSON: z.function(z.tuple([]), z.any()) }),
    z.record(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
  ])
);

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;

// DECIMAL
//------------------------------------------------------

export const DecimalJsLikeSchema: z.ZodType<Prisma.DecimalJsLike> = z.object({
  d: z.array(z.number()),
  e: z.number(),
  s: z.number(),
  toFixed: z.function(z.tuple([]), z.string()),
})

export const DECIMAL_STRING_REGEX = /^(?:-?Infinity|NaN|-?(?:0[bB][01]+(?:\.[01]+)?(?:[pP][-+]?\d+)?|0[oO][0-7]+(?:\.[0-7]+)?(?:[pP][-+]?\d+)?|0[xX][\da-fA-F]+(?:\.[\da-fA-F]+)?(?:[pP][-+]?\d+)?|(?:\d+|\d*\.\d+)(?:[eE][-+]?\d+)?))$/;

export const isValidDecimalInput =
  (v?: null | string | number | Prisma.DecimalJsLike): v is string | number | Prisma.DecimalJsLike => {
    if (v === undefined || v === null) return false;
    return (
      (typeof v === 'object' && 'd' in v && 'e' in v && 's' in v && 'toFixed' in v) ||
      (typeof v === 'string' && DECIMAL_STRING_REGEX.test(v)) ||
      typeof v === 'number'
    )
  };

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ApiKeyScalarFieldEnumSchema = z.enum(['id','uuid','key','accountId','name','description','createdAt','updatedAt','expiresAt','isActive','lastUsedAt','allowedOrigins','allowedIps']);

export const ApiKeyUsageScalarFieldEnumSchema = z.enum(['id','apiKeyId','endpoint','statusCode','method','usedAt']);

export const ApiKeyScopeAssignmentScalarFieldEnumSchema = z.enum(['id','apiKeyId','scope']);

export const SequenceScalarFieldEnumSchema = z.enum(['id','name','currentValue','metadata','accountId','createdAt','updatedAt']);

export const TextFormattingScalarFieldEnumSchema = z.enum(['id','format','start','end','value','contentId']);

export const ContentScalarFieldEnumSchema = z.enum(['id','uuid','type','text','position','createdAt','updatedAt','accountId','entityType','entityId']);

export const UserScalarFieldEnumSchema = z.enum(['id','uuid','email','username','password','profileUrl','fullname','preferences','permissionFlags','createdAt','updatedAt','deletedAt','verified','accountId']);

export const CalendarEventScalarFieldEnumSchema = z.enum(['id','uuid','accountId','createdById','eventType','title','description','startDate','endDate','isAllDay','entityType','entityId','reminderDate','recurrence','metadata','createdAt','updatedAt']);

export const TokenScalarFieldEnumSchema = z.enum(['id','userId','token','type','deviceId','deviceInfo','lastUsed','expiresAt','createdAt']);

export const CustomerScalarFieldEnumSchema = z.enum(['id','uuid','accountId','email','mobile','createdAt','updatedAt','fullname']);

export const AddressScalarFieldEnumSchema = z.enum(['id','street_number','address_line_1','address_line_2','city','region','postcode','country','createdAt','updatedAt','name','type']);

export const MakeScalarFieldEnumSchema = z.enum(['id','name','makeId','source','accountId']);

export const ModelScalarFieldEnumSchema = z.enum(['id','name','makeId','modelId','source']);

export const MakeExclusionScalarFieldEnumSchema = z.enum(['id','makeId','accountId','createAt']);

export const MechScalarFieldEnumSchema = z.enum(['id','uuid','equipmentTypeId','serialNumber','modelYear','customerId','accountId','modelId','createdAt','updatedAt','deletedAt','metricId']);

export const AccountsOnPackagesScalarFieldEnumSchema = z.enum(['accountId','packageId','startedAt','expireAt','createdAt','updatedAt']);

export const UsersOnPackagesScalarFieldEnumSchema = z.enum(['userId','packageId','startedAt','expireAt','createdAt','updatedAt']);

export const PackageScalarFieldEnumSchema = z.enum(['id','name','stripeProductId','createdAt','updatedAt']);

export const SubscriptionScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const MechMetricScalarFieldEnumSchema = z.enum(['id','license','unit','mileage_in','mileage_out','engineHours','createdAt','updatedAt']);

export const MetricsOnInvoicesScalarFieldEnumSchema = z.enum(['mechId','metricId','invoiceId']);

export const WorksheetScalarFieldEnumSchema = z.enum(['id','uuid','worksheetId','mechId','accountId','statusId','createdAt','updatedAt','dueAt','userId']);

export const AccountScalarFieldEnumSchema = z.enum(['id','stripeCustomerId','createdAt','updatedAt','preferences']);

export const BrandScalarFieldEnumSchema = z.enum(['id','email','mobile','logoUrl','accountId','createdAt','updatedAt','addressId','uuid']);

export const ServiceScalarFieldEnumSchema = z.enum(['id','name','description','isPreset','parentId','createdAt','updatedAt','accountId']);

export const ProductScalarFieldEnumSchema = z.enum(['id','name','description','code','quantity','accountId','createdAt','updatedAt']);

export const EntryScalarFieldEnumSchema = z.enum(['id','content','description','statusId','value_measured','createdAt','updatedAt','priceId','invoiceId','type','name']);

export const EntryProductServiceScalarFieldEnumSchema = z.enum(['id','entryId','productId','serviceId']);

export const EntryStatusScalarFieldEnumSchema = z.enum(['id','name','group','order','accountId']);

export const WorksheetStatusScalarFieldEnumSchema = z.enum(['id','name','group','order','accountId']);

export const InvoiceScalarFieldEnumSchema = z.enum(['id','uuid','invoiceId','addressId','customerId','createdAt','updatedAt','accountId','dueAt','issuedAt','status','taxGroupId']);

export const PriceScalarFieldEnumSchema = z.enum(['id','valuePerUnit','rateType','createdAt','updatedAt']);

export const TransactionScalarFieldEnumSchema = z.enum(['id','name','description','invoiceId','createdAt','updatedAt']);

export const PricesOnServicesScalarFieldEnumSchema = z.enum(['priceId','serviceId']);

export const EntriesOnWorksheetScalarFieldEnumSchema = z.enum(['entryId','worksheetId']);

export const PricesOnProductsScalarFieldEnumSchema = z.enum(['priceId','productId']);

export const AddressesOnCustomersScalarFieldEnumSchema = z.enum(['customerId','addressId']);

export const TimeLogScalarFieldEnumSchema = z.enum(['id','startTime','endTime','duration','notes','userId','entryId','createdAt','updatedAt','accountId']);

export const TaxScalarFieldEnumSchema = z.enum(['id','name','rate','description','createdAt','updatedAt','groupId']);

export const TaxGroupScalarFieldEnumSchema = z.enum(['id','name','accountId']);

export const FeatureScalarFieldEnumSchema = z.enum(['id','type','attributes','userId','completedAt','createdAt','updatedAt']);

export const EquipmentTypeScalarFieldEnumSchema = z.enum(['id','name','accountId']);

export const EquipmentFieldScalarFieldEnumSchema = z.enum(['id','name','purpose','required','source','defaultValue','options','config','equipmentTypeId']);

export const FieldValueScalarFieldEnumSchema = z.enum(['id','value','equipmentFieldId','mechId','timestamp']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value);

export const NullsOrderSchema = z.enum(['first','last']);

export const ApiKeyOrderByRelevanceFieldEnumSchema = z.enum(['uuid','key','name','description','allowedOrigins','allowedIps']);

export const ApiKeyUsageOrderByRelevanceFieldEnumSchema = z.enum(['endpoint','method']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.JsonNull : value === 'AnyNull' ? Prisma.AnyNull : value);

export const TextFormattingOrderByRelevanceFieldEnumSchema = z.enum(['value']);

export const ContentOrderByRelevanceFieldEnumSchema = z.enum(['uuid','text']);

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['uuid','email','username','profileUrl','fullname']);

export const CalendarEventOrderByRelevanceFieldEnumSchema = z.enum(['uuid','title','description']);

export const TokenOrderByRelevanceFieldEnumSchema = z.enum(['token','deviceId']);

export const CustomerOrderByRelevanceFieldEnumSchema = z.enum(['uuid','email','mobile','fullname']);

export const AddressOrderByRelevanceFieldEnumSchema = z.enum(['street_number','address_line_1','address_line_2','city','region','postcode','country','name']);

export const MakeOrderByRelevanceFieldEnumSchema = z.enum(['name']);

export const ModelOrderByRelevanceFieldEnumSchema = z.enum(['name']);

export const MechOrderByRelevanceFieldEnumSchema = z.enum(['uuid','serialNumber']);

export const PackageOrderByRelevanceFieldEnumSchema = z.enum(['name','stripeProductId']);

export const SubscriptionOrderByRelevanceFieldEnumSchema = z.enum(['name']);

export const MechMetricOrderByRelevanceFieldEnumSchema = z.enum(['license','unit']);

export const WorksheetOrderByRelevanceFieldEnumSchema = z.enum(['uuid']);

export const AccountOrderByRelevanceFieldEnumSchema = z.enum(['stripeCustomerId']);

export const BrandOrderByRelevanceFieldEnumSchema = z.enum(['email','mobile','logoUrl','uuid']);

export const ServiceOrderByRelevanceFieldEnumSchema = z.enum(['name','description']);

export const ProductOrderByRelevanceFieldEnumSchema = z.enum(['name','description','code']);

export const EntryOrderByRelevanceFieldEnumSchema = z.enum(['content','description','name']);

export const EntryStatusOrderByRelevanceFieldEnumSchema = z.enum(['name']);

export const WorksheetStatusOrderByRelevanceFieldEnumSchema = z.enum(['name']);

export const InvoiceOrderByRelevanceFieldEnumSchema = z.enum(['uuid']);

export const TransactionOrderByRelevanceFieldEnumSchema = z.enum(['name','description']);

export const TimeLogOrderByRelevanceFieldEnumSchema = z.enum(['notes']);

export const TaxOrderByRelevanceFieldEnumSchema = z.enum(['name','description']);

export const TaxGroupOrderByRelevanceFieldEnumSchema = z.enum(['name']);

export const EquipmentTypeOrderByRelevanceFieldEnumSchema = z.enum(['name']);

export const EquipmentFieldOrderByRelevanceFieldEnumSchema = z.enum(['name','defaultValue']);

export const FieldValueOrderByRelevanceFieldEnumSchema = z.enum(['value']);

export const ApiKeyScopeSchema = z.enum(['APPOINTMENT_CREATE','APPOINTMENT_READ','APPOINTMENT_UPDATE','APPOINTMENT_DELETE','CUSTOMER_CREATE','CUSTOMER_READ','WORKSHEET_READ','WORKSHEET_CREATE','INVOICE_READ','SDK_BASIC','SDK_FULL','WEBHOOK_RECEIVE']);

export type ApiKeyScopeType = `${z.infer<typeof ApiKeyScopeSchema>}`

export const BlockTypeSchema = z.enum(['PAGE','PARAGRAPH','HEADING_1','HEADING_2','HEADING_3','TODO','BULLETED_LIST','NUMBERED_LIST','TOGGLE','TABLE','QUOTE','DIVIDER','CALLOUT','CODE','IMAGE','FILE']);

export type BlockTypeType = `${z.infer<typeof BlockTypeSchema>}`

export const TextFormatSchema = z.enum(['BOLD','ITALIC','UNDERLINE','STRIKETHROUGH','CODE','COLOR','LINK']);

export type TextFormatType = `${z.infer<typeof TextFormatSchema>}`

export const SequenceTypeSchema = z.enum(['INVOICE','WORKORDER']);

export type SequenceTypeType = `${z.infer<typeof SequenceTypeSchema>}`

export const PermissionFlagsSchema = z.enum(['GUEST','EMPLOYEE','ADMINISTRATOR','FULL_ADMIN','CLIENT','USER']);

export type PermissionFlagsType = `${z.infer<typeof PermissionFlagsSchema>}`

export const ContentTypeSchema = z.enum(['DESCRIPTION','NOTE','COMMENT']);

export type ContentTypeType = `${z.infer<typeof ContentTypeSchema>}`

export const ContentFormatSchema = z.enum(['PLAIN','MARKDOWN','HTML']);

export type ContentFormatType = `${z.infer<typeof ContentFormatSchema>}`

export const MediaTypeSchema = z.enum(['IMAGE','VIDEO','AUDIO','DOCUMENT']);

export type MediaTypeType = `${z.infer<typeof MediaTypeSchema>}`

export const EntityTypeSchema = z.enum(['ENTRY','WORKORDER','MECH','USER','CUSTOMER','INVOICE']);

export type EntityTypeType = `${z.infer<typeof EntityTypeSchema>}`

export const EventTypeSchema = z.enum(['APPOINTMENT','TODO','REMINDER','DEADLINE','HOLIDAY','MILESTONE']);

export type EventTypeType = `${z.infer<typeof EventTypeSchema>}`

export const DataSourceSchema = z.enum(['SYSTEM','USER']);

export type DataSourceType = `${z.infer<typeof DataSourceSchema>}`

export const FieldPurposeSchema = z.enum(['GENERAL','MILEAGE','ENGINE_HOURS','RUNTIME','REGISTRATION','SERIAL_NUMBER','MAKE_MODEL_YEAR']);

export type FieldPurposeType = `${z.infer<typeof FieldPurposeSchema>}`

export const FeatureTypeSchema = z.enum(['SETUP','ONBOARDING','HIGHLIGHT']);

export type FeatureTypeType = `${z.infer<typeof FeatureTypeSchema>}`

export const AddressTypeSchema = z.enum(['BILLING','SHIPPING']);

export type AddressTypeType = `${z.infer<typeof AddressTypeSchema>}`

export const RateSchema = z.enum(['FLAT','STANDARD']);

export type RateType = `${z.infer<typeof RateSchema>}`

export const STATUS_GROUPSchema = z.enum(['TODO','IN_PROGRESS','DONE']);

export type STATUS_GROUPType = `${z.infer<typeof STATUS_GROUPSchema>}`

export const EntryTypeSchema = z.enum(['PRODUCT','SERVICE','UNCLASSIFIED']);

export type EntryTypeType = `${z.infer<typeof EntryTypeSchema>}`

export const TokenTypeSchema = z.enum(['VERIFICATION','PASSWORD_RESET','INVITATION','REFRESH_TOKEN','BLACKLISTED']);

export type TokenTypeType = `${z.infer<typeof TokenTypeSchema>}`

export const InvoiceStatusSchema = z.enum(['DRAFT','READY','SENT','PAID','CANCELED','OVERDUE','VOID']);

export type InvoiceStatusType = `${z.infer<typeof InvoiceStatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// API KEY SCHEMA
/////////////////////////////////////////

export const ApiKeySchema = z.object({
  id: z.number(),
  uuid: z.string(),
  key: z.string(),
  accountId: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  expiresAt: z.date().nullable(),
  isActive: z.boolean(),
  lastUsedAt: z.date().nullable(),
  allowedOrigins: z.string().nullable(),
  allowedIps: z.string().nullable(),
})

export type ApiKey = z.infer<typeof ApiKeySchema>

/////////////////////////////////////////
// API KEY USAGE SCHEMA
/////////////////////////////////////////

export const ApiKeyUsageSchema = z.object({
  id: z.number(),
  apiKeyId: z.number(),
  endpoint: z.string(),
  statusCode: z.number(),
  method: z.string(),
  usedAt: z.date(),
})

export type ApiKeyUsage = z.infer<typeof ApiKeyUsageSchema>

/////////////////////////////////////////
// API KEY SCOPE ASSIGNMENT SCHEMA
/////////////////////////////////////////

export const ApiKeyScopeAssignmentSchema = z.object({
  scope: ApiKeyScopeSchema,
  id: z.number(),
  apiKeyId: z.number(),
})

export type ApiKeyScopeAssignment = z.infer<typeof ApiKeyScopeAssignmentSchema>

/////////////////////////////////////////
// SEQUENCE SCHEMA
/////////////////////////////////////////

export const SequenceSchema = z.object({
  name: SequenceTypeSchema,
  id: z.number(),
  currentValue: z.number(),
  metadata: JsonValueSchema.nullable(),
  accountId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Sequence = z.infer<typeof SequenceSchema>

/////////////////////////////////////////
// TEXT FORMATTING SCHEMA
/////////////////////////////////////////

export const TextFormattingSchema = z.object({
  format: TextFormatSchema,
  id: z.number(),
  start: z.number(),
  end: z.number(),
  value: z.string().nullable(),
  contentId: z.number(),
})

export type TextFormatting = z.infer<typeof TextFormattingSchema>

/////////////////////////////////////////
// CONTENT SCHEMA
/////////////////////////////////////////

export const ContentSchema = z.object({
  type: BlockTypeSchema,
  entityType: EntityTypeSchema,
  id: z.number(),
  uuid: z.string(),
  text: z.string().nullable(),
  position: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  accountId: z.number(),
  entityId: z.number(),
})

export type Content = z.infer<typeof ContentSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  permissionFlags: PermissionFlagsSchema,
  id: z.number(),
  uuid: z.string(),
  email: z.string().nullable(),
  username: z.string(),
  password: z.instanceof(Buffer).nullable(),
  profileUrl: z.string().nullable(),
  fullname: z.string().nullable(),
  preferences: JsonValueSchema.nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  verified: z.boolean(),
  accountId: z.number(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// CALENDAR EVENT SCHEMA
/////////////////////////////////////////

export const CalendarEventSchema = z.object({
  eventType: EventTypeSchema,
  entityType: EntityTypeSchema.nullable(),
  id: z.number(),
  uuid: z.string(),
  accountId: z.number(),
  createdById: z.number().nullable(),
  title: z.string().nullable(),
  description: z.string().nullable(),
  startDate: z.date(),
  endDate: z.date().nullable(),
  isAllDay: z.boolean(),
  entityId: z.number().nullable(),
  reminderDate: z.date().nullable(),
  recurrence: JsonValueSchema.nullable(),
  metadata: JsonValueSchema.nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type CalendarEvent = z.infer<typeof CalendarEventSchema>

/////////////////////////////////////////
// TOKEN SCHEMA
/////////////////////////////////////////

export const TokenSchema = z.object({
  type: TokenTypeSchema,
  id: z.number(),
  userId: z.number(),
  token: z.string(),
  deviceId: z.string().nullable(),
  deviceInfo: JsonValueSchema.nullable(),
  lastUsed: z.date(),
  expiresAt: z.date(),
  createdAt: z.date(),
})

export type Token = z.infer<typeof TokenSchema>

/////////////////////////////////////////
// CUSTOMER SCHEMA
/////////////////////////////////////////

export const CustomerSchema = z.object({
  id: z.number(),
  uuid: z.string(),
  accountId: z.number(),
  email: z.string().nullable(),
  mobile: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  fullname: z.string(),
})

export type Customer = z.infer<typeof CustomerSchema>

/////////////////////////////////////////
// ADDRESS SCHEMA
/////////////////////////////////////////

export const AddressSchema = z.object({
  type: AddressTypeSchema,
  id: z.number(),
  street_number: z.string().nullable(),
  address_line_1: z.string().nullable(),
  address_line_2: z.string().nullable(),
  city: z.string().nullable(),
  region: z.string().nullable(),
  postcode: z.string().nullable(),
  country: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string().nullable(),
})

export type Address = z.infer<typeof AddressSchema>

/////////////////////////////////////////
// MAKE SCHEMA
/////////////////////////////////////////

export const MakeSchema = z.object({
  source: DataSourceSchema,
  id: z.number(),
  name: z.string(),
  makeId: z.number().nullable(),
  accountId: z.number().nullable(),
})

export type Make = z.infer<typeof MakeSchema>

/////////////////////////////////////////
// MODEL SCHEMA
/////////////////////////////////////////

export const ModelSchema = z.object({
  source: DataSourceSchema,
  id: z.number(),
  name: z.string(),
  makeId: z.number(),
  modelId: z.number().nullable(),
})

export type Model = z.infer<typeof ModelSchema>

/////////////////////////////////////////
// MAKE EXCLUSION SCHEMA
/////////////////////////////////////////

export const MakeExclusionSchema = z.object({
  id: z.number(),
  makeId: z.number(),
  accountId: z.number(),
  createAt: z.date(),
})

export type MakeExclusion = z.infer<typeof MakeExclusionSchema>

/////////////////////////////////////////
// MECH SCHEMA
/////////////////////////////////////////

export const MechSchema = z.object({
  id: z.number(),
  uuid: z.string(),
  equipmentTypeId: z.number(),
  serialNumber: z.string().nullable(),
  modelYear: z.number().nullable(),
  customerId: z.number(),
  accountId: z.number(),
  modelId: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
  metricId: z.number().nullable(),
})

export type Mech = z.infer<typeof MechSchema>

/////////////////////////////////////////
// ACCOUNTS ON PACKAGES SCHEMA
/////////////////////////////////////////

export const AccountsOnPackagesSchema = z.object({
  accountId: z.number(),
  packageId: z.number(),
  startedAt: z.date(),
  expireAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type AccountsOnPackages = z.infer<typeof AccountsOnPackagesSchema>

/////////////////////////////////////////
// USERS ON PACKAGES SCHEMA
/////////////////////////////////////////

export const UsersOnPackagesSchema = z.object({
  userId: z.number(),
  packageId: z.number(),
  startedAt: z.date(),
  expireAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type UsersOnPackages = z.infer<typeof UsersOnPackagesSchema>

/////////////////////////////////////////
// PACKAGE SCHEMA
/////////////////////////////////////////

export const PackageSchema = z.object({
  id: z.number(),
  name: z.string(),
  stripeProductId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Package = z.infer<typeof PackageSchema>

/////////////////////////////////////////
// SUBSCRIPTION SCHEMA
/////////////////////////////////////////

export const SubscriptionSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Subscription = z.infer<typeof SubscriptionSchema>

/////////////////////////////////////////
// MECH METRIC SCHEMA
/////////////////////////////////////////

export const MechMetricSchema = z.object({
  id: z.number(),
  license: z.string().nullable(),
  unit: z.string().nullable(),
  mileage_in: z.number().nullable(),
  mileage_out: z.number().nullable(),
  engineHours: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type MechMetric = z.infer<typeof MechMetricSchema>

/////////////////////////////////////////
// METRICS ON INVOICES SCHEMA
/////////////////////////////////////////

export const MetricsOnInvoicesSchema = z.object({
  mechId: z.number(),
  metricId: z.number(),
  invoiceId: z.number(),
})

export type MetricsOnInvoices = z.infer<typeof MetricsOnInvoicesSchema>

/////////////////////////////////////////
// WORKSHEET SCHEMA
/////////////////////////////////////////

export const WorksheetSchema = z.object({
  id: z.number(),
  uuid: z.string(),
  worksheetId: z.number(),
  mechId: z.number().nullable(),
  accountId: z.number(),
  statusId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  dueAt: z.date().nullable(),
  userId: z.number().nullable(),
})

export type Worksheet = z.infer<typeof WorksheetSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.number(),
  stripeCustomerId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  preferences: JsonValueSchema.nullable(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// BRAND SCHEMA
/////////////////////////////////////////

export const BrandSchema = z.object({
  id: z.number(),
  email: z.string().nullable(),
  mobile: z.string().nullable(),
  logoUrl: z.string().nullable(),
  accountId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  addressId: z.number().nullable(),
  uuid: z.string(),
})

export type Brand = z.infer<typeof BrandSchema>

/////////////////////////////////////////
// SERVICE SCHEMA
/////////////////////////////////////////

export const ServiceSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  isPreset: z.boolean(),
  parentId: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  accountId: z.number(),
})

export type Service = z.infer<typeof ServiceSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  code: z.string().nullable(),
  quantity: z.number().nullable(),
  accountId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// ENTRY SCHEMA
/////////////////////////////////////////

export const EntrySchema = z.object({
  type: EntryTypeSchema,
  id: z.number(),
  content: z.string().nullable(),
  description: z.string().nullable(),
  statusId: z.number().nullable(),
  value_measured: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  priceId: z.number().nullable(),
  invoiceId: z.number().nullable(),
  name: z.string().nullable(),
})

export type Entry = z.infer<typeof EntrySchema>

/////////////////////////////////////////
// ENTRY PRODUCT SERVICE SCHEMA
/////////////////////////////////////////

export const EntryProductServiceSchema = z.object({
  id: z.number(),
  entryId: z.number(),
  productId: z.number().nullable(),
  serviceId: z.number().nullable(),
})

export type EntryProductService = z.infer<typeof EntryProductServiceSchema>

/////////////////////////////////////////
// ENTRY STATUS SCHEMA
/////////////////////////////////////////

export const EntryStatusSchema = z.object({
  group: STATUS_GROUPSchema,
  id: z.number(),
  name: z.string(),
  order: z.number(),
  accountId: z.number(),
})

export type EntryStatus = z.infer<typeof EntryStatusSchema>

/////////////////////////////////////////
// WORKSHEET STATUS SCHEMA
/////////////////////////////////////////

export const WorksheetStatusSchema = z.object({
  group: STATUS_GROUPSchema,
  id: z.number(),
  name: z.string(),
  order: z.number(),
  accountId: z.number(),
})

export type WorksheetStatus = z.infer<typeof WorksheetStatusSchema>

/////////////////////////////////////////
// INVOICE SCHEMA
/////////////////////////////////////////

export const InvoiceSchema = z.object({
  status: InvoiceStatusSchema,
  id: z.number(),
  uuid: z.string(),
  invoiceId: z.number(),
  addressId: z.number().nullable(),
  customerId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  accountId: z.number(),
  dueAt: z.date().nullable(),
  issuedAt: z.date().nullable(),
  taxGroupId: z.number().nullable(),
})

export type Invoice = z.infer<typeof InvoiceSchema>

/////////////////////////////////////////
// PRICE SCHEMA
/////////////////////////////////////////

export const PriceSchema = z.object({
  rateType: RateSchema,
  id: z.number(),
  valuePerUnit: z.instanceof(Prisma.Decimal, { message: "Field 'valuePerUnit' must be a Decimal. Location: ['Models', 'Price']"}),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Price = z.infer<typeof PriceSchema>

/////////////////////////////////////////
// TRANSACTION SCHEMA
/////////////////////////////////////////

export const TransactionSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  invoiceId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Transaction = z.infer<typeof TransactionSchema>

/////////////////////////////////////////
// PRICES ON SERVICES SCHEMA
/////////////////////////////////////////

export const PricesOnServicesSchema = z.object({
  priceId: z.number(),
  serviceId: z.number(),
})

export type PricesOnServices = z.infer<typeof PricesOnServicesSchema>

/////////////////////////////////////////
// ENTRIES ON WORKSHEET SCHEMA
/////////////////////////////////////////

export const EntriesOnWorksheetSchema = z.object({
  entryId: z.number(),
  worksheetId: z.number(),
})

export type EntriesOnWorksheet = z.infer<typeof EntriesOnWorksheetSchema>

/////////////////////////////////////////
// PRICES ON PRODUCTS SCHEMA
/////////////////////////////////////////

export const PricesOnProductsSchema = z.object({
  priceId: z.number(),
  productId: z.number(),
})

export type PricesOnProducts = z.infer<typeof PricesOnProductsSchema>

/////////////////////////////////////////
// ADDRESSES ON CUSTOMERS SCHEMA
/////////////////////////////////////////

export const AddressesOnCustomersSchema = z.object({
  customerId: z.number(),
  addressId: z.number(),
})

export type AddressesOnCustomers = z.infer<typeof AddressesOnCustomersSchema>

/////////////////////////////////////////
// TIME LOG SCHEMA
/////////////////////////////////////////

export const TimeLogSchema = z.object({
  id: z.number(),
  startTime: z.date().nullable(),
  endTime: z.date().nullable(),
  duration: z.number().nullable(),
  notes: z.string().nullable(),
  userId: z.number(),
  entryId: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  accountId: z.number(),
})

export type TimeLog = z.infer<typeof TimeLogSchema>

/////////////////////////////////////////
// TAX SCHEMA
/////////////////////////////////////////

export const TaxSchema = z.object({
  id: z.number(),
  name: z.string(),
  rate: z.instanceof(Prisma.Decimal, { message: "Field 'rate' must be a Decimal. Location: ['Models', 'Tax']"}),
  description: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  groupId: z.number(),
})

export type Tax = z.infer<typeof TaxSchema>

/////////////////////////////////////////
// TAX GROUP SCHEMA
/////////////////////////////////////////

export const TaxGroupSchema = z.object({
  id: z.number(),
  name: z.string(),
  accountId: z.number(),
})

export type TaxGroup = z.infer<typeof TaxGroupSchema>

/////////////////////////////////////////
// FEATURE SCHEMA
/////////////////////////////////////////

export const FeatureSchema = z.object({
  type: FeatureTypeSchema,
  id: z.number(),
  attributes: JsonValueSchema.nullable(),
  userId: z.number(),
  completedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Feature = z.infer<typeof FeatureSchema>

/////////////////////////////////////////
// EQUIPMENT TYPE SCHEMA
/////////////////////////////////////////

export const EquipmentTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  accountId: z.number(),
})

export type EquipmentType = z.infer<typeof EquipmentTypeSchema>

/////////////////////////////////////////
// EQUIPMENT FIELD SCHEMA
/////////////////////////////////////////

export const EquipmentFieldSchema = z.object({
  purpose: FieldPurposeSchema,
  source: DataSourceSchema,
  id: z.number(),
  name: z.string(),
  required: z.boolean(),
  defaultValue: z.string().nullable(),
  options: JsonValueSchema.nullable(),
  config: JsonValueSchema.nullable(),
  equipmentTypeId: z.number(),
})

export type EquipmentField = z.infer<typeof EquipmentFieldSchema>

/////////////////////////////////////////
// FIELD VALUE SCHEMA
/////////////////////////////////////////

export const FieldValueSchema = z.object({
  id: z.number(),
  value: z.string(),
  equipmentFieldId: z.number(),
  mechId: z.number(),
  timestamp: z.date(),
})

export type FieldValue = z.infer<typeof FieldValueSchema>
