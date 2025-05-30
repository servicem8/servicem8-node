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
export const JobContactActive = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export type JobContactActive = ClosedEnum<typeof JobContactActive>;

export type JobContact = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: JobContactActive | undefined;
  /**
   * Timestamp at which record was last modified
   */
  editDate?: any | undefined;
  jobUuid?: string | undefined;
  first?: string | undefined;
  last?: string | undefined;
  phone?: string | undefined;
  mobile?: string | undefined;
  email?: string | undefined;
  type?: string | undefined;
  isPrimaryContact?: string | undefined;
};

export type JobContactInput = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: JobContactActive | undefined;
  jobUuid?: string | undefined;
  first?: string | undefined;
  last?: string | undefined;
  phone?: string | undefined;
  mobile?: string | undefined;
  email?: string | undefined;
  type?: string | undefined;
  isPrimaryContact?: string | undefined;
};

/** @internal */
export const JobContactActive$inboundSchema: z.ZodNativeEnum<
  typeof JobContactActive
> = z.nativeEnum(JobContactActive);

/** @internal */
export const JobContactActive$outboundSchema: z.ZodNativeEnum<
  typeof JobContactActive
> = JobContactActive$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobContactActive$ {
  /** @deprecated use `JobContactActive$inboundSchema` instead. */
  export const inboundSchema = JobContactActive$inboundSchema;
  /** @deprecated use `JobContactActive$outboundSchema` instead. */
  export const outboundSchema = JobContactActive$outboundSchema;
}

/** @internal */
export const JobContact$inboundSchema: z.ZodType<
  JobContact,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: JobContactActive$inboundSchema.default(1),
  edit_date: z.any().optional(),
  job_uuid: z.string().optional(),
  first: z.string().optional(),
  last: z.string().optional(),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  email: z.string().optional(),
  type: z.string().optional(),
  is_primary_contact: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "edit_date": "editDate",
    "job_uuid": "jobUuid",
    "is_primary_contact": "isPrimaryContact",
  });
});

/** @internal */
export type JobContact$Outbound = {
  uuid?: string | undefined;
  active: number;
  edit_date?: any | undefined;
  job_uuid?: string | undefined;
  first?: string | undefined;
  last?: string | undefined;
  phone?: string | undefined;
  mobile?: string | undefined;
  email?: string | undefined;
  type?: string | undefined;
  is_primary_contact?: string | undefined;
};

/** @internal */
export const JobContact$outboundSchema: z.ZodType<
  JobContact$Outbound,
  z.ZodTypeDef,
  JobContact
> = z.object({
  uuid: z.string().optional(),
  active: JobContactActive$outboundSchema.default(1),
  editDate: z.any().optional(),
  jobUuid: z.string().optional(),
  first: z.string().optional(),
  last: z.string().optional(),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  email: z.string().optional(),
  type: z.string().optional(),
  isPrimaryContact: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    editDate: "edit_date",
    jobUuid: "job_uuid",
    isPrimaryContact: "is_primary_contact",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobContact$ {
  /** @deprecated use `JobContact$inboundSchema` instead. */
  export const inboundSchema = JobContact$inboundSchema;
  /** @deprecated use `JobContact$outboundSchema` instead. */
  export const outboundSchema = JobContact$outboundSchema;
  /** @deprecated use `JobContact$Outbound` instead. */
  export type Outbound = JobContact$Outbound;
}

export function jobContactToJSON(jobContact: JobContact): string {
  return JSON.stringify(JobContact$outboundSchema.parse(jobContact));
}

export function jobContactFromJSON(
  jsonString: string,
): SafeParseResult<JobContact, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => JobContact$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'JobContact' from JSON`,
  );
}

/** @internal */
export const JobContactInput$inboundSchema: z.ZodType<
  JobContactInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: JobContactActive$inboundSchema.default(1),
  job_uuid: z.string().optional(),
  first: z.string().optional(),
  last: z.string().optional(),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  email: z.string().optional(),
  type: z.string().optional(),
  is_primary_contact: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "job_uuid": "jobUuid",
    "is_primary_contact": "isPrimaryContact",
  });
});

/** @internal */
export type JobContactInput$Outbound = {
  uuid?: string | undefined;
  active: number;
  job_uuid?: string | undefined;
  first?: string | undefined;
  last?: string | undefined;
  phone?: string | undefined;
  mobile?: string | undefined;
  email?: string | undefined;
  type?: string | undefined;
  is_primary_contact?: string | undefined;
};

/** @internal */
export const JobContactInput$outboundSchema: z.ZodType<
  JobContactInput$Outbound,
  z.ZodTypeDef,
  JobContactInput
> = z.object({
  uuid: z.string().optional(),
  active: JobContactActive$outboundSchema.default(1),
  jobUuid: z.string().optional(),
  first: z.string().optional(),
  last: z.string().optional(),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  email: z.string().optional(),
  type: z.string().optional(),
  isPrimaryContact: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    jobUuid: "job_uuid",
    isPrimaryContact: "is_primary_contact",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobContactInput$ {
  /** @deprecated use `JobContactInput$inboundSchema` instead. */
  export const inboundSchema = JobContactInput$inboundSchema;
  /** @deprecated use `JobContactInput$outboundSchema` instead. */
  export const outboundSchema = JobContactInput$outboundSchema;
  /** @deprecated use `JobContactInput$Outbound` instead. */
  export type Outbound = JobContactInput$Outbound;
}

export function jobContactInputToJSON(
  jobContactInput: JobContactInput,
): string {
  return JSON.stringify(JobContactInput$outboundSchema.parse(jobContactInput));
}

export function jobContactInputFromJSON(
  jsonString: string,
): SafeParseResult<JobContactInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => JobContactInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'JobContactInput' from JSON`,
  );
}
