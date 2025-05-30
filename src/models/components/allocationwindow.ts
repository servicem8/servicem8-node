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
export const AllocationWindowActive = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export type AllocationWindowActive = ClosedEnum<typeof AllocationWindowActive>;

export type AllocationWindow = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: AllocationWindowActive | undefined;
  /**
   * Timestamp at which record was last modified
   */
  editDate?: any | undefined;
  name?: string | undefined;
  startTime?: number | undefined;
  endTime?: number | undefined;
  sortPriority?: number | undefined;
};

export type AllocationWindowInput = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: AllocationWindowActive | undefined;
  name?: string | undefined;
  startTime?: number | undefined;
  endTime?: number | undefined;
  sortPriority?: number | undefined;
};

/** @internal */
export const AllocationWindowActive$inboundSchema: z.ZodNativeEnum<
  typeof AllocationWindowActive
> = z.nativeEnum(AllocationWindowActive);

/** @internal */
export const AllocationWindowActive$outboundSchema: z.ZodNativeEnum<
  typeof AllocationWindowActive
> = AllocationWindowActive$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AllocationWindowActive$ {
  /** @deprecated use `AllocationWindowActive$inboundSchema` instead. */
  export const inboundSchema = AllocationWindowActive$inboundSchema;
  /** @deprecated use `AllocationWindowActive$outboundSchema` instead. */
  export const outboundSchema = AllocationWindowActive$outboundSchema;
}

/** @internal */
export const AllocationWindow$inboundSchema: z.ZodType<
  AllocationWindow,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: AllocationWindowActive$inboundSchema.default(1),
  edit_date: z.any().optional(),
  name: z.string().optional(),
  start_time: z.number().int().optional(),
  end_time: z.number().int().optional(),
  sort_priority: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "edit_date": "editDate",
    "start_time": "startTime",
    "end_time": "endTime",
    "sort_priority": "sortPriority",
  });
});

/** @internal */
export type AllocationWindow$Outbound = {
  uuid?: string | undefined;
  active: number;
  edit_date?: any | undefined;
  name?: string | undefined;
  start_time?: number | undefined;
  end_time?: number | undefined;
  sort_priority?: number | undefined;
};

/** @internal */
export const AllocationWindow$outboundSchema: z.ZodType<
  AllocationWindow$Outbound,
  z.ZodTypeDef,
  AllocationWindow
> = z.object({
  uuid: z.string().optional(),
  active: AllocationWindowActive$outboundSchema.default(1),
  editDate: z.any().optional(),
  name: z.string().optional(),
  startTime: z.number().int().optional(),
  endTime: z.number().int().optional(),
  sortPriority: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    editDate: "edit_date",
    startTime: "start_time",
    endTime: "end_time",
    sortPriority: "sort_priority",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AllocationWindow$ {
  /** @deprecated use `AllocationWindow$inboundSchema` instead. */
  export const inboundSchema = AllocationWindow$inboundSchema;
  /** @deprecated use `AllocationWindow$outboundSchema` instead. */
  export const outboundSchema = AllocationWindow$outboundSchema;
  /** @deprecated use `AllocationWindow$Outbound` instead. */
  export type Outbound = AllocationWindow$Outbound;
}

export function allocationWindowToJSON(
  allocationWindow: AllocationWindow,
): string {
  return JSON.stringify(
    AllocationWindow$outboundSchema.parse(allocationWindow),
  );
}

export function allocationWindowFromJSON(
  jsonString: string,
): SafeParseResult<AllocationWindow, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AllocationWindow$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AllocationWindow' from JSON`,
  );
}

/** @internal */
export const AllocationWindowInput$inboundSchema: z.ZodType<
  AllocationWindowInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: AllocationWindowActive$inboundSchema.default(1),
  name: z.string().optional(),
  start_time: z.number().int().optional(),
  end_time: z.number().int().optional(),
  sort_priority: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "start_time": "startTime",
    "end_time": "endTime",
    "sort_priority": "sortPriority",
  });
});

/** @internal */
export type AllocationWindowInput$Outbound = {
  uuid?: string | undefined;
  active: number;
  name?: string | undefined;
  start_time?: number | undefined;
  end_time?: number | undefined;
  sort_priority?: number | undefined;
};

/** @internal */
export const AllocationWindowInput$outboundSchema: z.ZodType<
  AllocationWindowInput$Outbound,
  z.ZodTypeDef,
  AllocationWindowInput
> = z.object({
  uuid: z.string().optional(),
  active: AllocationWindowActive$outboundSchema.default(1),
  name: z.string().optional(),
  startTime: z.number().int().optional(),
  endTime: z.number().int().optional(),
  sortPriority: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    startTime: "start_time",
    endTime: "end_time",
    sortPriority: "sort_priority",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AllocationWindowInput$ {
  /** @deprecated use `AllocationWindowInput$inboundSchema` instead. */
  export const inboundSchema = AllocationWindowInput$inboundSchema;
  /** @deprecated use `AllocationWindowInput$outboundSchema` instead. */
  export const outboundSchema = AllocationWindowInput$outboundSchema;
  /** @deprecated use `AllocationWindowInput$Outbound` instead. */
  export type Outbound = AllocationWindowInput$Outbound;
}

export function allocationWindowInputToJSON(
  allocationWindowInput: AllocationWindowInput,
): string {
  return JSON.stringify(
    AllocationWindowInput$outboundSchema.parse(allocationWindowInput),
  );
}

export function allocationWindowInputFromJSON(
  jsonString: string,
): SafeParseResult<AllocationWindowInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AllocationWindowInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AllocationWindowInput' from JSON`,
  );
}
