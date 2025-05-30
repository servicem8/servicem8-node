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
export const QueueActive = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export type QueueActive = ClosedEnum<typeof QueueActive>;

/**
 * Determines if jobs in this queue require assignment to staff members. If true, jobs must be explicitly assigned to staff. If false, jobs are visible to all staff..  Valid values are [0,1]
 */
export const RequiresAssignment = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Determines if jobs in this queue require assignment to staff members. If true, jobs must be explicitly assigned to staff. If false, jobs are visible to all staff..  Valid values are [0,1]
 */
export type RequiresAssignment = ClosedEnum<typeof RequiresAssignment>;

export type Queue = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: QueueActive | undefined;
  /**
   * Timestamp at which record was last modified
   */
  editDate?: any | undefined;
  /**
   * Name of the job queue. Used to identify the queue in the system. Examples include 'Workshop', 'Pending Quotes', etc.
   */
  name?: string | undefined;
  /**
   * Default number of days that jobs should remain in this queue before requiring attention. Common values are 7 days (1 week) or 14 days (2 weeks).
   */
  defaultTimeframe?: number | undefined;
  /**
   * Semicolon-delimited list of staff UUIDs who are subscribed to receive notifications for this queue.
   */
  subscribedStaff?: string | undefined;
  /**
   * Determines if jobs in this queue require assignment to staff members. If true, jobs must be explicitly assigned to staff. If false, jobs are visible to all staff..  Valid values are [0,1]
   */
  requiresAssignment?: RequiresAssignment | undefined;
};

export type QueueInput = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: QueueActive | undefined;
  /**
   * Name of the job queue. Used to identify the queue in the system. Examples include 'Workshop', 'Pending Quotes', etc.
   */
  name?: string | undefined;
  /**
   * Default number of days that jobs should remain in this queue before requiring attention. Common values are 7 days (1 week) or 14 days (2 weeks).
   */
  defaultTimeframe?: number | undefined;
  /**
   * Semicolon-delimited list of staff UUIDs who are subscribed to receive notifications for this queue.
   */
  subscribedStaff?: string | undefined;
  /**
   * Determines if jobs in this queue require assignment to staff members. If true, jobs must be explicitly assigned to staff. If false, jobs are visible to all staff..  Valid values are [0,1]
   */
  requiresAssignment?: RequiresAssignment | undefined;
};

/** @internal */
export const QueueActive$inboundSchema: z.ZodNativeEnum<typeof QueueActive> = z
  .nativeEnum(QueueActive);

/** @internal */
export const QueueActive$outboundSchema: z.ZodNativeEnum<typeof QueueActive> =
  QueueActive$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueueActive$ {
  /** @deprecated use `QueueActive$inboundSchema` instead. */
  export const inboundSchema = QueueActive$inboundSchema;
  /** @deprecated use `QueueActive$outboundSchema` instead. */
  export const outboundSchema = QueueActive$outboundSchema;
}

/** @internal */
export const RequiresAssignment$inboundSchema: z.ZodNativeEnum<
  typeof RequiresAssignment
> = z.nativeEnum(RequiresAssignment);

/** @internal */
export const RequiresAssignment$outboundSchema: z.ZodNativeEnum<
  typeof RequiresAssignment
> = RequiresAssignment$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequiresAssignment$ {
  /** @deprecated use `RequiresAssignment$inboundSchema` instead. */
  export const inboundSchema = RequiresAssignment$inboundSchema;
  /** @deprecated use `RequiresAssignment$outboundSchema` instead. */
  export const outboundSchema = RequiresAssignment$outboundSchema;
}

/** @internal */
export const Queue$inboundSchema: z.ZodType<Queue, z.ZodTypeDef, unknown> = z
  .object({
    uuid: z.string().optional(),
    active: QueueActive$inboundSchema.default(1),
    edit_date: z.any().optional(),
    name: z.string().optional(),
    default_timeframe: z.number().int().optional(),
    subscribed_staff: z.string().optional(),
    requires_assignment: RequiresAssignment$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "edit_date": "editDate",
      "default_timeframe": "defaultTimeframe",
      "subscribed_staff": "subscribedStaff",
      "requires_assignment": "requiresAssignment",
    });
  });

/** @internal */
export type Queue$Outbound = {
  uuid?: string | undefined;
  active: number;
  edit_date?: any | undefined;
  name?: string | undefined;
  default_timeframe?: number | undefined;
  subscribed_staff?: string | undefined;
  requires_assignment?: number | undefined;
};

/** @internal */
export const Queue$outboundSchema: z.ZodType<
  Queue$Outbound,
  z.ZodTypeDef,
  Queue
> = z.object({
  uuid: z.string().optional(),
  active: QueueActive$outboundSchema.default(1),
  editDate: z.any().optional(),
  name: z.string().optional(),
  defaultTimeframe: z.number().int().optional(),
  subscribedStaff: z.string().optional(),
  requiresAssignment: RequiresAssignment$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    editDate: "edit_date",
    defaultTimeframe: "default_timeframe",
    subscribedStaff: "subscribed_staff",
    requiresAssignment: "requires_assignment",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Queue$ {
  /** @deprecated use `Queue$inboundSchema` instead. */
  export const inboundSchema = Queue$inboundSchema;
  /** @deprecated use `Queue$outboundSchema` instead. */
  export const outboundSchema = Queue$outboundSchema;
  /** @deprecated use `Queue$Outbound` instead. */
  export type Outbound = Queue$Outbound;
}

export function queueToJSON(queue: Queue): string {
  return JSON.stringify(Queue$outboundSchema.parse(queue));
}

export function queueFromJSON(
  jsonString: string,
): SafeParseResult<Queue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Queue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Queue' from JSON`,
  );
}

/** @internal */
export const QueueInput$inboundSchema: z.ZodType<
  QueueInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: QueueActive$inboundSchema.default(1),
  name: z.string().optional(),
  default_timeframe: z.number().int().optional(),
  subscribed_staff: z.string().optional(),
  requires_assignment: RequiresAssignment$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "default_timeframe": "defaultTimeframe",
    "subscribed_staff": "subscribedStaff",
    "requires_assignment": "requiresAssignment",
  });
});

/** @internal */
export type QueueInput$Outbound = {
  uuid?: string | undefined;
  active: number;
  name?: string | undefined;
  default_timeframe?: number | undefined;
  subscribed_staff?: string | undefined;
  requires_assignment?: number | undefined;
};

/** @internal */
export const QueueInput$outboundSchema: z.ZodType<
  QueueInput$Outbound,
  z.ZodTypeDef,
  QueueInput
> = z.object({
  uuid: z.string().optional(),
  active: QueueActive$outboundSchema.default(1),
  name: z.string().optional(),
  defaultTimeframe: z.number().int().optional(),
  subscribedStaff: z.string().optional(),
  requiresAssignment: RequiresAssignment$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    defaultTimeframe: "default_timeframe",
    subscribedStaff: "subscribed_staff",
    requiresAssignment: "requires_assignment",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueueInput$ {
  /** @deprecated use `QueueInput$inboundSchema` instead. */
  export const inboundSchema = QueueInput$inboundSchema;
  /** @deprecated use `QueueInput$outboundSchema` instead. */
  export const outboundSchema = QueueInput$outboundSchema;
  /** @deprecated use `QueueInput$Outbound` instead. */
  export type Outbound = QueueInput$Outbound;
}

export function queueInputToJSON(queueInput: QueueInput): string {
  return JSON.stringify(QueueInput$outboundSchema.parse(queueInput));
}

export function queueInputFromJSON(
  jsonString: string,
): SafeParseResult<QueueInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QueueInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueueInput' from JSON`,
  );
}
