/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export const VendorActive = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export type VendorActive = ClosedEnum<typeof VendorActive>;

export type Vendor = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: VendorActive | undefined;
  /**
   * Timestamp at which record was last modified
   */
  editDate?: any | undefined;
  /**
   * Company Name
   */
  name: string;
  abnNumber?: string | undefined;
  /**
   * Company Business Number
   */
  businessNumber?: string | undefined;
  /**
   * Company Website address
   */
  website?: string | undefined;
  email?: string | undefined;
  emailAccounts?: string | undefined;
  billingAddress?: string | undefined;
  acceptedPaymentMethods?: string | undefined;
  defaultRegion?: string | undefined;
  currency?: string | undefined;
  openingTimeMonday?: string | undefined;
  closingTimeMonday?: string | undefined;
  openingTimeTuesday?: string | undefined;
  closingTimeTuesday?: string | undefined;
  openingTimeWednesday?: string | undefined;
  closingTimeWednesday?: string | undefined;
  openingTimeThursday?: string | undefined;
  closingTimeThursday?: string | undefined;
  openingTimeFriday?: string | undefined;
  closingTimeFriday?: string | undefined;
  openingTimeSaturday?: string | undefined;
  closingTimeSaturday?: string | undefined;
  openingTimeSunday?: string | undefined;
  closingTimeSunday?: string | undefined;
  timezoneName?: string | undefined;
  invoiceTerms?: string | undefined;
  jobDefaultStatus?: string | undefined;
};

export type VendorInput = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: VendorActive | undefined;
  /**
   * Company Name
   */
  name: string;
  abnNumber?: string | undefined;
  /**
   * Company Business Number
   */
  businessNumber?: string | undefined;
  /**
   * Company Website address
   */
  website?: string | undefined;
  email?: string | undefined;
  emailAccounts?: string | undefined;
  billingAddress?: string | undefined;
  acceptedPaymentMethods?: string | undefined;
  defaultRegion?: string | undefined;
  currency?: string | undefined;
  openingTimeMonday?: string | undefined;
  closingTimeMonday?: string | undefined;
  openingTimeTuesday?: string | undefined;
  closingTimeTuesday?: string | undefined;
  openingTimeWednesday?: string | undefined;
  closingTimeWednesday?: string | undefined;
  openingTimeThursday?: string | undefined;
  closingTimeThursday?: string | undefined;
  openingTimeFriday?: string | undefined;
  closingTimeFriday?: string | undefined;
  openingTimeSaturday?: string | undefined;
  closingTimeSaturday?: string | undefined;
  openingTimeSunday?: string | undefined;
  closingTimeSunday?: string | undefined;
  timezoneName?: string | undefined;
  invoiceTerms?: string | undefined;
  jobDefaultStatus?: string | undefined;
};

/** @internal */
export const VendorActive$inboundSchema: z.ZodNativeEnum<typeof VendorActive> =
  z.nativeEnum(VendorActive);

/** @internal */
export const VendorActive$outboundSchema: z.ZodNativeEnum<typeof VendorActive> =
  VendorActive$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VendorActive$ {
  /** @deprecated use `VendorActive$inboundSchema` instead. */
  export const inboundSchema = VendorActive$inboundSchema;
  /** @deprecated use `VendorActive$outboundSchema` instead. */
  export const outboundSchema = VendorActive$outboundSchema;
}

/** @internal */
export const Vendor$inboundSchema: z.ZodType<Vendor, z.ZodTypeDef, unknown> = z
  .object({
    uuid: z.string().optional(),
    active: VendorActive$inboundSchema.default(1),
    edit_date: z.any().optional(),
    name: z.string(),
    abn_number: z.string().optional(),
    business_number: z.string().optional(),
    website: z.string().optional(),
    email: z.string().optional(),
    email_accounts: z.string().optional(),
    billing_address: z.string().optional(),
    accepted_payment_methods: z.string().optional(),
    default_region: z.string().optional(),
    currency: z.string().optional(),
    opening_time_monday: z.string().optional(),
    closing_time_monday: z.string().optional(),
    opening_time_tuesday: z.string().optional(),
    closing_time_tuesday: z.string().optional(),
    opening_time_wednesday: z.string().optional(),
    closing_time_wednesday: z.string().optional(),
    opening_time_thursday: z.string().optional(),
    closing_time_thursday: z.string().optional(),
    opening_time_friday: z.string().optional(),
    closing_time_friday: z.string().optional(),
    opening_time_saturday: z.string().optional(),
    closing_time_saturday: z.string().optional(),
    opening_time_sunday: z.string().optional(),
    closing_time_sunday: z.string().optional(),
    timezone_name: z.string().optional(),
    invoice_terms: z.string().optional(),
    job_default_status: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "edit_date": "editDate",
      "abn_number": "abnNumber",
      "business_number": "businessNumber",
      "email_accounts": "emailAccounts",
      "billing_address": "billingAddress",
      "accepted_payment_methods": "acceptedPaymentMethods",
      "default_region": "defaultRegion",
      "opening_time_monday": "openingTimeMonday",
      "closing_time_monday": "closingTimeMonday",
      "opening_time_tuesday": "openingTimeTuesday",
      "closing_time_tuesday": "closingTimeTuesday",
      "opening_time_wednesday": "openingTimeWednesday",
      "closing_time_wednesday": "closingTimeWednesday",
      "opening_time_thursday": "openingTimeThursday",
      "closing_time_thursday": "closingTimeThursday",
      "opening_time_friday": "openingTimeFriday",
      "closing_time_friday": "closingTimeFriday",
      "opening_time_saturday": "openingTimeSaturday",
      "closing_time_saturday": "closingTimeSaturday",
      "opening_time_sunday": "openingTimeSunday",
      "closing_time_sunday": "closingTimeSunday",
      "timezone_name": "timezoneName",
      "invoice_terms": "invoiceTerms",
      "job_default_status": "jobDefaultStatus",
    });
  });

/** @internal */
export type Vendor$Outbound = {
  uuid?: string | undefined;
  active: number;
  edit_date?: any | undefined;
  name: string;
  abn_number?: string | undefined;
  business_number?: string | undefined;
  website?: string | undefined;
  email?: string | undefined;
  email_accounts?: string | undefined;
  billing_address?: string | undefined;
  accepted_payment_methods?: string | undefined;
  default_region?: string | undefined;
  currency?: string | undefined;
  opening_time_monday?: string | undefined;
  closing_time_monday?: string | undefined;
  opening_time_tuesday?: string | undefined;
  closing_time_tuesday?: string | undefined;
  opening_time_wednesday?: string | undefined;
  closing_time_wednesday?: string | undefined;
  opening_time_thursday?: string | undefined;
  closing_time_thursday?: string | undefined;
  opening_time_friday?: string | undefined;
  closing_time_friday?: string | undefined;
  opening_time_saturday?: string | undefined;
  closing_time_saturday?: string | undefined;
  opening_time_sunday?: string | undefined;
  closing_time_sunday?: string | undefined;
  timezone_name?: string | undefined;
  invoice_terms?: string | undefined;
  job_default_status?: string | undefined;
};

/** @internal */
export const Vendor$outboundSchema: z.ZodType<
  Vendor$Outbound,
  z.ZodTypeDef,
  Vendor
> = z.object({
  uuid: z.string().optional(),
  active: VendorActive$outboundSchema.default(1),
  editDate: z.any().optional(),
  name: z.string(),
  abnNumber: z.string().optional(),
  businessNumber: z.string().optional(),
  website: z.string().optional(),
  email: z.string().optional(),
  emailAccounts: z.string().optional(),
  billingAddress: z.string().optional(),
  acceptedPaymentMethods: z.string().optional(),
  defaultRegion: z.string().optional(),
  currency: z.string().optional(),
  openingTimeMonday: z.string().optional(),
  closingTimeMonday: z.string().optional(),
  openingTimeTuesday: z.string().optional(),
  closingTimeTuesday: z.string().optional(),
  openingTimeWednesday: z.string().optional(),
  closingTimeWednesday: z.string().optional(),
  openingTimeThursday: z.string().optional(),
  closingTimeThursday: z.string().optional(),
  openingTimeFriday: z.string().optional(),
  closingTimeFriday: z.string().optional(),
  openingTimeSaturday: z.string().optional(),
  closingTimeSaturday: z.string().optional(),
  openingTimeSunday: z.string().optional(),
  closingTimeSunday: z.string().optional(),
  timezoneName: z.string().optional(),
  invoiceTerms: z.string().optional(),
  jobDefaultStatus: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    editDate: "edit_date",
    abnNumber: "abn_number",
    businessNumber: "business_number",
    emailAccounts: "email_accounts",
    billingAddress: "billing_address",
    acceptedPaymentMethods: "accepted_payment_methods",
    defaultRegion: "default_region",
    openingTimeMonday: "opening_time_monday",
    closingTimeMonday: "closing_time_monday",
    openingTimeTuesday: "opening_time_tuesday",
    closingTimeTuesday: "closing_time_tuesday",
    openingTimeWednesday: "opening_time_wednesday",
    closingTimeWednesday: "closing_time_wednesday",
    openingTimeThursday: "opening_time_thursday",
    closingTimeThursday: "closing_time_thursday",
    openingTimeFriday: "opening_time_friday",
    closingTimeFriday: "closing_time_friday",
    openingTimeSaturday: "opening_time_saturday",
    closingTimeSaturday: "closing_time_saturday",
    openingTimeSunday: "opening_time_sunday",
    closingTimeSunday: "closing_time_sunday",
    timezoneName: "timezone_name",
    invoiceTerms: "invoice_terms",
    jobDefaultStatus: "job_default_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Vendor$ {
  /** @deprecated use `Vendor$inboundSchema` instead. */
  export const inboundSchema = Vendor$inboundSchema;
  /** @deprecated use `Vendor$outboundSchema` instead. */
  export const outboundSchema = Vendor$outboundSchema;
  /** @deprecated use `Vendor$Outbound` instead. */
  export type Outbound = Vendor$Outbound;
}

export function vendorToJSON(vendor: Vendor): string {
  return JSON.stringify(Vendor$outboundSchema.parse(vendor));
}

export function vendorFromJSON(
  jsonString: string,
): SafeParseResult<Vendor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Vendor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Vendor' from JSON`,
  );
}

/** @internal */
export const VendorInput$inboundSchema: z.ZodType<
  VendorInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: VendorActive$inboundSchema.default(1),
  name: z.string(),
  abn_number: z.string().optional(),
  business_number: z.string().optional(),
  website: z.string().optional(),
  email: z.string().optional(),
  email_accounts: z.string().optional(),
  billing_address: z.string().optional(),
  accepted_payment_methods: z.string().optional(),
  default_region: z.string().optional(),
  currency: z.string().optional(),
  opening_time_monday: z.string().optional(),
  closing_time_monday: z.string().optional(),
  opening_time_tuesday: z.string().optional(),
  closing_time_tuesday: z.string().optional(),
  opening_time_wednesday: z.string().optional(),
  closing_time_wednesday: z.string().optional(),
  opening_time_thursday: z.string().optional(),
  closing_time_thursday: z.string().optional(),
  opening_time_friday: z.string().optional(),
  closing_time_friday: z.string().optional(),
  opening_time_saturday: z.string().optional(),
  closing_time_saturday: z.string().optional(),
  opening_time_sunday: z.string().optional(),
  closing_time_sunday: z.string().optional(),
  timezone_name: z.string().optional(),
  invoice_terms: z.string().optional(),
  job_default_status: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "abn_number": "abnNumber",
    "business_number": "businessNumber",
    "email_accounts": "emailAccounts",
    "billing_address": "billingAddress",
    "accepted_payment_methods": "acceptedPaymentMethods",
    "default_region": "defaultRegion",
    "opening_time_monday": "openingTimeMonday",
    "closing_time_monday": "closingTimeMonday",
    "opening_time_tuesday": "openingTimeTuesday",
    "closing_time_tuesday": "closingTimeTuesday",
    "opening_time_wednesday": "openingTimeWednesday",
    "closing_time_wednesday": "closingTimeWednesday",
    "opening_time_thursday": "openingTimeThursday",
    "closing_time_thursday": "closingTimeThursday",
    "opening_time_friday": "openingTimeFriday",
    "closing_time_friday": "closingTimeFriday",
    "opening_time_saturday": "openingTimeSaturday",
    "closing_time_saturday": "closingTimeSaturday",
    "opening_time_sunday": "openingTimeSunday",
    "closing_time_sunday": "closingTimeSunday",
    "timezone_name": "timezoneName",
    "invoice_terms": "invoiceTerms",
    "job_default_status": "jobDefaultStatus",
  });
});

/** @internal */
export type VendorInput$Outbound = {
  uuid?: string | undefined;
  active: number;
  name: string;
  abn_number?: string | undefined;
  business_number?: string | undefined;
  website?: string | undefined;
  email?: string | undefined;
  email_accounts?: string | undefined;
  billing_address?: string | undefined;
  accepted_payment_methods?: string | undefined;
  default_region?: string | undefined;
  currency?: string | undefined;
  opening_time_monday?: string | undefined;
  closing_time_monday?: string | undefined;
  opening_time_tuesday?: string | undefined;
  closing_time_tuesday?: string | undefined;
  opening_time_wednesday?: string | undefined;
  closing_time_wednesday?: string | undefined;
  opening_time_thursday?: string | undefined;
  closing_time_thursday?: string | undefined;
  opening_time_friday?: string | undefined;
  closing_time_friday?: string | undefined;
  opening_time_saturday?: string | undefined;
  closing_time_saturday?: string | undefined;
  opening_time_sunday?: string | undefined;
  closing_time_sunday?: string | undefined;
  timezone_name?: string | undefined;
  invoice_terms?: string | undefined;
  job_default_status?: string | undefined;
};

/** @internal */
export const VendorInput$outboundSchema: z.ZodType<
  VendorInput$Outbound,
  z.ZodTypeDef,
  VendorInput
> = z.object({
  uuid: z.string().optional(),
  active: VendorActive$outboundSchema.default(1),
  name: z.string(),
  abnNumber: z.string().optional(),
  businessNumber: z.string().optional(),
  website: z.string().optional(),
  email: z.string().optional(),
  emailAccounts: z.string().optional(),
  billingAddress: z.string().optional(),
  acceptedPaymentMethods: z.string().optional(),
  defaultRegion: z.string().optional(),
  currency: z.string().optional(),
  openingTimeMonday: z.string().optional(),
  closingTimeMonday: z.string().optional(),
  openingTimeTuesday: z.string().optional(),
  closingTimeTuesday: z.string().optional(),
  openingTimeWednesday: z.string().optional(),
  closingTimeWednesday: z.string().optional(),
  openingTimeThursday: z.string().optional(),
  closingTimeThursday: z.string().optional(),
  openingTimeFriday: z.string().optional(),
  closingTimeFriday: z.string().optional(),
  openingTimeSaturday: z.string().optional(),
  closingTimeSaturday: z.string().optional(),
  openingTimeSunday: z.string().optional(),
  closingTimeSunday: z.string().optional(),
  timezoneName: z.string().optional(),
  invoiceTerms: z.string().optional(),
  jobDefaultStatus: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    abnNumber: "abn_number",
    businessNumber: "business_number",
    emailAccounts: "email_accounts",
    billingAddress: "billing_address",
    acceptedPaymentMethods: "accepted_payment_methods",
    defaultRegion: "default_region",
    openingTimeMonday: "opening_time_monday",
    closingTimeMonday: "closing_time_monday",
    openingTimeTuesday: "opening_time_tuesday",
    closingTimeTuesday: "closing_time_tuesday",
    openingTimeWednesday: "opening_time_wednesday",
    closingTimeWednesday: "closing_time_wednesday",
    openingTimeThursday: "opening_time_thursday",
    closingTimeThursday: "closing_time_thursday",
    openingTimeFriday: "opening_time_friday",
    closingTimeFriday: "closing_time_friday",
    openingTimeSaturday: "opening_time_saturday",
    closingTimeSaturday: "closing_time_saturday",
    openingTimeSunday: "opening_time_sunday",
    closingTimeSunday: "closing_time_sunday",
    timezoneName: "timezone_name",
    invoiceTerms: "invoice_terms",
    jobDefaultStatus: "job_default_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VendorInput$ {
  /** @deprecated use `VendorInput$inboundSchema` instead. */
  export const inboundSchema = VendorInput$inboundSchema;
  /** @deprecated use `VendorInput$outboundSchema` instead. */
  export const outboundSchema = VendorInput$outboundSchema;
  /** @deprecated use `VendorInput$Outbound` instead. */
  export type Outbound = VendorInput$Outbound;
}

export function vendorInputToJSON(vendorInput: VendorInput): string {
  return JSON.stringify(VendorInput$outboundSchema.parse(vendorInput));
}

export function vendorInputFromJSON(
  jsonString: string,
): SafeParseResult<VendorInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VendorInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VendorInput' from JSON`,
  );
}
