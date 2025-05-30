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
export const JobChecklistActive = {
  Zero: 0,
  One: 1,
} as const;
/**
 * Record active/deleted flag.  Valid values are [0,1]
 */
export type JobChecklistActive = ClosedEnum<typeof JobChecklistActive>;

export type ReminderData2 = {};

export type ReminderDataUnion2 = ReminderData2 | string;

export type ReminderData1 = {};

export type ReminderDataUnion1 = ReminderData1 | string;

/**
 * JSON data containing additional information for the reminder. Format depends on the reminder_type. For ABSOLUTE_DATETIME, includes 'absoluteDateTime'. For RELATIVE_DATETIME, includes 'relativeDateTime' with 'baseDate', 'unit', and 'quantity'. Exposed via API as 'reminder_data'.
 */
export type ReminderDataUnion3 =
  | ReminderData1
  | string
  | ReminderData2
  | string;

/**
 * If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read only).  Valid values are [0,1]
 */
export const IsLocked = {
  Zero: 0,
  One: 1,
} as const;
/**
 * If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read only).  Valid values are [0,1]
 */
export type IsLocked = ClosedEnum<typeof IsLocked>;

export type JobChecklist = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: JobChecklistActive | undefined;
  /**
   * Timestamp at which record was last modified
   */
  editDate?: any | undefined;
  /**
   * UUID of the job this checklist item belongs to. This links the checklist item to a specific job in the system.
   */
  jobUuid?: string | undefined;
  /**
   * The name or description of the checklist item. This is displayed to users in the mobile app and web interface.
   */
  name?: string | undefined;
  /**
   * The section or category name under which this checklist item is grouped. This helps organize related checklist items together.
   */
  sectionName?: string | undefined;
  /**
   * The type of checklist item. Valid values are: 'Todo', 'Asset', 'Photo', 'Form', and 'Document'. Defaults to 'Todo' if not specified. This determines the functionality and appearance of the checklist item.
   */
  itemType?: string | undefined;
  /**
   * A numeric value determining the order in which checklist items appear in the user interface. Lower values appear first. Used to customize the display sequence of items.
   */
  sortOrder?: number | undefined;
  /**
   * The date and time when the checklist item was marked as completed. Empty or '0000-00-00 00:00:00' indicates the item is not completed.
   */
  completedTimestamp?: string | undefined;
  /**
   * UUID of the staff member who completed this checklist item. References a Staff object. Empty if the item is not completed.
   */
  completedByStaffUuid?: string | undefined;
  /**
   * UUID of the job check-in during which this checklist item was completed. This links the checklist completion to a specific check-in event in the job history.
   */
  completedDuringCheckinUuid?: string | undefined;
  /**
   * The type of reminder associated with this checklist item. Valid values are: '' (no reminder), 'CHECK_IN', 'NAVIGATE', 'CHECK_OUT', 'ABSOLUTE_DATETIME', or 'RELATIVE_DATETIME'. Determines when the system will remind users about this checklist item.
   */
  reminderType?: string | undefined;
  /**
   * JSON data containing additional information for the reminder. Format depends on the reminder_type. For ABSOLUTE_DATETIME, includes 'absoluteDateTime'. For RELATIVE_DATETIME, includes 'relativeDateTime' with 'baseDate', 'unit', and 'quantity'. Exposed via API as 'reminder_data'.
   */
  reminderData?: ReminderData1 | string | ReminderData2 | string | undefined;
  /**
   * The type of object which this checklist item is related to. For example, for Form checklists, this will be 'Form'.
   */
  regardingObject?: string | undefined;
  /**
   * The UUID of the object which this checklists item is related to. For example, for Form checklists, this is the UUID of the Form that must be completed to complete the checklist item.
   */
  regardingObjectUuid?: string | undefined;
  /**
   * The type of object which completes this checklist item. For example, for Form checklists, this will be 'FormResponse'.
   */
  fulfilledByObjectName?: string | undefined;
  /**
   * The UUID of the object which completes this checklist item. For example, for Form checklists, this references the UUID of a FormResponse record.
   */
  fulfilledByObjectUuid?: string | undefined;
  /**
   * JSON array of staff UUIDs to whom this checklist item is assigned. Determines which staff members are responsible for completing this checklist item. Currently limited to a maximum of 1 staff member.
   */
  assignedToStaffUuids?: Array<string> | undefined;
  /**
   * If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read only).  Valid values are [0,1]
   */
  isLocked?: IsLocked | undefined;
  /**
   * The timestamp when the checklist item was assigned to the staff member. (Read only)
   */
  assignedTimestamp?: string | undefined;
  /**
   * The UUID of the staff member who assigned the checklist item to the staff member. (Read only)
   */
  assignedByStaffUuid?: string | undefined;
};

export type JobChecklistInput = {
  /**
   * Unique identifier for this record
   */
  uuid?: string | undefined;
  /**
   * Record active/deleted flag.  Valid values are [0,1]
   */
  active?: JobChecklistActive | undefined;
  /**
   * UUID of the job this checklist item belongs to. This links the checklist item to a specific job in the system.
   */
  jobUuid?: string | undefined;
  /**
   * The name or description of the checklist item. This is displayed to users in the mobile app and web interface.
   */
  name?: string | undefined;
  /**
   * The section or category name under which this checklist item is grouped. This helps organize related checklist items together.
   */
  sectionName?: string | undefined;
  /**
   * The type of checklist item. Valid values are: 'Todo', 'Asset', 'Photo', 'Form', and 'Document'. Defaults to 'Todo' if not specified. This determines the functionality and appearance of the checklist item.
   */
  itemType?: string | undefined;
  /**
   * A numeric value determining the order in which checklist items appear in the user interface. Lower values appear first. Used to customize the display sequence of items.
   */
  sortOrder?: number | undefined;
  /**
   * The date and time when the checklist item was marked as completed. Empty or '0000-00-00 00:00:00' indicates the item is not completed.
   */
  completedTimestamp?: string | undefined;
  /**
   * UUID of the staff member who completed this checklist item. References a Staff object. Empty if the item is not completed.
   */
  completedByStaffUuid?: string | undefined;
  /**
   * UUID of the job check-in during which this checklist item was completed. This links the checklist completion to a specific check-in event in the job history.
   */
  completedDuringCheckinUuid?: string | undefined;
  /**
   * The type of reminder associated with this checklist item. Valid values are: '' (no reminder), 'CHECK_IN', 'NAVIGATE', 'CHECK_OUT', 'ABSOLUTE_DATETIME', or 'RELATIVE_DATETIME'. Determines when the system will remind users about this checklist item.
   */
  reminderType?: string | undefined;
  /**
   * JSON data containing additional information for the reminder. Format depends on the reminder_type. For ABSOLUTE_DATETIME, includes 'absoluteDateTime'. For RELATIVE_DATETIME, includes 'relativeDateTime' with 'baseDate', 'unit', and 'quantity'. Exposed via API as 'reminder_data'.
   */
  reminderData?: ReminderData1 | string | ReminderData2 | string | undefined;
  /**
   * The type of object which this checklist item is related to. For example, for Form checklists, this will be 'Form'.
   */
  regardingObject?: string | undefined;
  /**
   * The UUID of the object which this checklists item is related to. For example, for Form checklists, this is the UUID of the Form that must be completed to complete the checklist item.
   */
  regardingObjectUuid?: string | undefined;
  /**
   * The type of object which completes this checklist item. For example, for Form checklists, this will be 'FormResponse'.
   */
  fulfilledByObjectName?: string | undefined;
  /**
   * The UUID of the object which completes this checklist item. For example, for Form checklists, this references the UUID of a FormResponse record.
   */
  fulfilledByObjectUuid?: string | undefined;
  /**
   * JSON array of staff UUIDs to whom this checklist item is assigned. Determines which staff members are responsible for completing this checklist item. Currently limited to a maximum of 1 staff member.
   */
  assignedToStaffUuids?: Array<string> | undefined;
  /**
   * If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read only).  Valid values are [0,1]
   */
  isLocked?: IsLocked | undefined;
  /**
   * The timestamp when the checklist item was assigned to the staff member. (Read only)
   */
  assignedTimestamp?: string | undefined;
  /**
   * The UUID of the staff member who assigned the checklist item to the staff member. (Read only)
   */
  assignedByStaffUuid?: string | undefined;
};

/** @internal */
export const JobChecklistActive$inboundSchema: z.ZodNativeEnum<
  typeof JobChecklistActive
> = z.nativeEnum(JobChecklistActive);

/** @internal */
export const JobChecklistActive$outboundSchema: z.ZodNativeEnum<
  typeof JobChecklistActive
> = JobChecklistActive$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobChecklistActive$ {
  /** @deprecated use `JobChecklistActive$inboundSchema` instead. */
  export const inboundSchema = JobChecklistActive$inboundSchema;
  /** @deprecated use `JobChecklistActive$outboundSchema` instead. */
  export const outboundSchema = JobChecklistActive$outboundSchema;
}

/** @internal */
export const ReminderData2$inboundSchema: z.ZodType<
  ReminderData2,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ReminderData2$Outbound = {};

/** @internal */
export const ReminderData2$outboundSchema: z.ZodType<
  ReminderData2$Outbound,
  z.ZodTypeDef,
  ReminderData2
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReminderData2$ {
  /** @deprecated use `ReminderData2$inboundSchema` instead. */
  export const inboundSchema = ReminderData2$inboundSchema;
  /** @deprecated use `ReminderData2$outboundSchema` instead. */
  export const outboundSchema = ReminderData2$outboundSchema;
  /** @deprecated use `ReminderData2$Outbound` instead. */
  export type Outbound = ReminderData2$Outbound;
}

export function reminderData2ToJSON(reminderData2: ReminderData2): string {
  return JSON.stringify(ReminderData2$outboundSchema.parse(reminderData2));
}

export function reminderData2FromJSON(
  jsonString: string,
): SafeParseResult<ReminderData2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReminderData2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReminderData2' from JSON`,
  );
}

/** @internal */
export const ReminderDataUnion2$inboundSchema: z.ZodType<
  ReminderDataUnion2,
  z.ZodTypeDef,
  unknown
> = z.union([z.lazy(() => ReminderData2$inboundSchema), z.string()]);

/** @internal */
export type ReminderDataUnion2$Outbound = ReminderData2$Outbound | string;

/** @internal */
export const ReminderDataUnion2$outboundSchema: z.ZodType<
  ReminderDataUnion2$Outbound,
  z.ZodTypeDef,
  ReminderDataUnion2
> = z.union([z.lazy(() => ReminderData2$outboundSchema), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReminderDataUnion2$ {
  /** @deprecated use `ReminderDataUnion2$inboundSchema` instead. */
  export const inboundSchema = ReminderDataUnion2$inboundSchema;
  /** @deprecated use `ReminderDataUnion2$outboundSchema` instead. */
  export const outboundSchema = ReminderDataUnion2$outboundSchema;
  /** @deprecated use `ReminderDataUnion2$Outbound` instead. */
  export type Outbound = ReminderDataUnion2$Outbound;
}

export function reminderDataUnion2ToJSON(
  reminderDataUnion2: ReminderDataUnion2,
): string {
  return JSON.stringify(
    ReminderDataUnion2$outboundSchema.parse(reminderDataUnion2),
  );
}

export function reminderDataUnion2FromJSON(
  jsonString: string,
): SafeParseResult<ReminderDataUnion2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReminderDataUnion2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReminderDataUnion2' from JSON`,
  );
}

/** @internal */
export const ReminderData1$inboundSchema: z.ZodType<
  ReminderData1,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ReminderData1$Outbound = {};

/** @internal */
export const ReminderData1$outboundSchema: z.ZodType<
  ReminderData1$Outbound,
  z.ZodTypeDef,
  ReminderData1
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReminderData1$ {
  /** @deprecated use `ReminderData1$inboundSchema` instead. */
  export const inboundSchema = ReminderData1$inboundSchema;
  /** @deprecated use `ReminderData1$outboundSchema` instead. */
  export const outboundSchema = ReminderData1$outboundSchema;
  /** @deprecated use `ReminderData1$Outbound` instead. */
  export type Outbound = ReminderData1$Outbound;
}

export function reminderData1ToJSON(reminderData1: ReminderData1): string {
  return JSON.stringify(ReminderData1$outboundSchema.parse(reminderData1));
}

export function reminderData1FromJSON(
  jsonString: string,
): SafeParseResult<ReminderData1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReminderData1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReminderData1' from JSON`,
  );
}

/** @internal */
export const ReminderDataUnion1$inboundSchema: z.ZodType<
  ReminderDataUnion1,
  z.ZodTypeDef,
  unknown
> = z.union([z.lazy(() => ReminderData1$inboundSchema), z.string()]);

/** @internal */
export type ReminderDataUnion1$Outbound = ReminderData1$Outbound | string;

/** @internal */
export const ReminderDataUnion1$outboundSchema: z.ZodType<
  ReminderDataUnion1$Outbound,
  z.ZodTypeDef,
  ReminderDataUnion1
> = z.union([z.lazy(() => ReminderData1$outboundSchema), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReminderDataUnion1$ {
  /** @deprecated use `ReminderDataUnion1$inboundSchema` instead. */
  export const inboundSchema = ReminderDataUnion1$inboundSchema;
  /** @deprecated use `ReminderDataUnion1$outboundSchema` instead. */
  export const outboundSchema = ReminderDataUnion1$outboundSchema;
  /** @deprecated use `ReminderDataUnion1$Outbound` instead. */
  export type Outbound = ReminderDataUnion1$Outbound;
}

export function reminderDataUnion1ToJSON(
  reminderDataUnion1: ReminderDataUnion1,
): string {
  return JSON.stringify(
    ReminderDataUnion1$outboundSchema.parse(reminderDataUnion1),
  );
}

export function reminderDataUnion1FromJSON(
  jsonString: string,
): SafeParseResult<ReminderDataUnion1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReminderDataUnion1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReminderDataUnion1' from JSON`,
  );
}

/** @internal */
export const ReminderDataUnion3$inboundSchema: z.ZodType<
  ReminderDataUnion3,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.union([z.lazy(() => ReminderData1$inboundSchema), z.string()]),
  z.union([z.lazy(() => ReminderData2$inboundSchema), z.string()]),
]);

/** @internal */
export type ReminderDataUnion3$Outbound =
  | ReminderData1$Outbound
  | string
  | ReminderData2$Outbound
  | string;

/** @internal */
export const ReminderDataUnion3$outboundSchema: z.ZodType<
  ReminderDataUnion3$Outbound,
  z.ZodTypeDef,
  ReminderDataUnion3
> = z.union([
  z.union([z.lazy(() => ReminderData1$outboundSchema), z.string()]),
  z.union([z.lazy(() => ReminderData2$outboundSchema), z.string()]),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReminderDataUnion3$ {
  /** @deprecated use `ReminderDataUnion3$inboundSchema` instead. */
  export const inboundSchema = ReminderDataUnion3$inboundSchema;
  /** @deprecated use `ReminderDataUnion3$outboundSchema` instead. */
  export const outboundSchema = ReminderDataUnion3$outboundSchema;
  /** @deprecated use `ReminderDataUnion3$Outbound` instead. */
  export type Outbound = ReminderDataUnion3$Outbound;
}

export function reminderDataUnion3ToJSON(
  reminderDataUnion3: ReminderDataUnion3,
): string {
  return JSON.stringify(
    ReminderDataUnion3$outboundSchema.parse(reminderDataUnion3),
  );
}

export function reminderDataUnion3FromJSON(
  jsonString: string,
): SafeParseResult<ReminderDataUnion3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReminderDataUnion3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReminderDataUnion3' from JSON`,
  );
}

/** @internal */
export const IsLocked$inboundSchema: z.ZodNativeEnum<typeof IsLocked> = z
  .nativeEnum(IsLocked);

/** @internal */
export const IsLocked$outboundSchema: z.ZodNativeEnum<typeof IsLocked> =
  IsLocked$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IsLocked$ {
  /** @deprecated use `IsLocked$inboundSchema` instead. */
  export const inboundSchema = IsLocked$inboundSchema;
  /** @deprecated use `IsLocked$outboundSchema` instead. */
  export const outboundSchema = IsLocked$outboundSchema;
}

/** @internal */
export const JobChecklist$inboundSchema: z.ZodType<
  JobChecklist,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: JobChecklistActive$inboundSchema.default(1),
  edit_date: z.any().optional(),
  job_uuid: z.string().optional(),
  name: z.string().optional(),
  section_name: z.string().optional(),
  item_type: z.string().optional(),
  sort_order: z.number().int().optional(),
  completed_timestamp: z.string().optional(),
  completed_by_staff_uuid: z.string().optional(),
  completed_during_checkin_uuid: z.string().optional(),
  reminder_type: z.string().optional(),
  reminder_data: z.union([
    z.union([z.lazy(() => ReminderData1$inboundSchema), z.string()]),
    z.union([z.lazy(() => ReminderData2$inboundSchema), z.string()]),
  ]).optional(),
  regarding_object: z.string().optional(),
  regarding_object_uuid: z.string().optional(),
  fulfilled_by_object_name: z.string().optional(),
  fulfilled_by_object_uuid: z.string().optional(),
  assigned_to_staff_uuids: z.array(z.string()).optional(),
  is_locked: IsLocked$inboundSchema.optional(),
  assigned_timestamp: z.string().optional(),
  assigned_by_staff_uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "edit_date": "editDate",
    "job_uuid": "jobUuid",
    "section_name": "sectionName",
    "item_type": "itemType",
    "sort_order": "sortOrder",
    "completed_timestamp": "completedTimestamp",
    "completed_by_staff_uuid": "completedByStaffUuid",
    "completed_during_checkin_uuid": "completedDuringCheckinUuid",
    "reminder_type": "reminderType",
    "reminder_data": "reminderData",
    "regarding_object": "regardingObject",
    "regarding_object_uuid": "regardingObjectUuid",
    "fulfilled_by_object_name": "fulfilledByObjectName",
    "fulfilled_by_object_uuid": "fulfilledByObjectUuid",
    "assigned_to_staff_uuids": "assignedToStaffUuids",
    "is_locked": "isLocked",
    "assigned_timestamp": "assignedTimestamp",
    "assigned_by_staff_uuid": "assignedByStaffUuid",
  });
});

/** @internal */
export type JobChecklist$Outbound = {
  uuid?: string | undefined;
  active: number;
  edit_date?: any | undefined;
  job_uuid?: string | undefined;
  name?: string | undefined;
  section_name?: string | undefined;
  item_type?: string | undefined;
  sort_order?: number | undefined;
  completed_timestamp?: string | undefined;
  completed_by_staff_uuid?: string | undefined;
  completed_during_checkin_uuid?: string | undefined;
  reminder_type?: string | undefined;
  reminder_data?:
    | ReminderData1$Outbound
    | string
    | ReminderData2$Outbound
    | string
    | undefined;
  regarding_object?: string | undefined;
  regarding_object_uuid?: string | undefined;
  fulfilled_by_object_name?: string | undefined;
  fulfilled_by_object_uuid?: string | undefined;
  assigned_to_staff_uuids?: Array<string> | undefined;
  is_locked?: number | undefined;
  assigned_timestamp?: string | undefined;
  assigned_by_staff_uuid?: string | undefined;
};

/** @internal */
export const JobChecklist$outboundSchema: z.ZodType<
  JobChecklist$Outbound,
  z.ZodTypeDef,
  JobChecklist
> = z.object({
  uuid: z.string().optional(),
  active: JobChecklistActive$outboundSchema.default(1),
  editDate: z.any().optional(),
  jobUuid: z.string().optional(),
  name: z.string().optional(),
  sectionName: z.string().optional(),
  itemType: z.string().optional(),
  sortOrder: z.number().int().optional(),
  completedTimestamp: z.string().optional(),
  completedByStaffUuid: z.string().optional(),
  completedDuringCheckinUuid: z.string().optional(),
  reminderType: z.string().optional(),
  reminderData: z.union([
    z.union([z.lazy(() => ReminderData1$outboundSchema), z.string()]),
    z.union([z.lazy(() => ReminderData2$outboundSchema), z.string()]),
  ]).optional(),
  regardingObject: z.string().optional(),
  regardingObjectUuid: z.string().optional(),
  fulfilledByObjectName: z.string().optional(),
  fulfilledByObjectUuid: z.string().optional(),
  assignedToStaffUuids: z.array(z.string()).optional(),
  isLocked: IsLocked$outboundSchema.optional(),
  assignedTimestamp: z.string().optional(),
  assignedByStaffUuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    editDate: "edit_date",
    jobUuid: "job_uuid",
    sectionName: "section_name",
    itemType: "item_type",
    sortOrder: "sort_order",
    completedTimestamp: "completed_timestamp",
    completedByStaffUuid: "completed_by_staff_uuid",
    completedDuringCheckinUuid: "completed_during_checkin_uuid",
    reminderType: "reminder_type",
    reminderData: "reminder_data",
    regardingObject: "regarding_object",
    regardingObjectUuid: "regarding_object_uuid",
    fulfilledByObjectName: "fulfilled_by_object_name",
    fulfilledByObjectUuid: "fulfilled_by_object_uuid",
    assignedToStaffUuids: "assigned_to_staff_uuids",
    isLocked: "is_locked",
    assignedTimestamp: "assigned_timestamp",
    assignedByStaffUuid: "assigned_by_staff_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobChecklist$ {
  /** @deprecated use `JobChecklist$inboundSchema` instead. */
  export const inboundSchema = JobChecklist$inboundSchema;
  /** @deprecated use `JobChecklist$outboundSchema` instead. */
  export const outboundSchema = JobChecklist$outboundSchema;
  /** @deprecated use `JobChecklist$Outbound` instead. */
  export type Outbound = JobChecklist$Outbound;
}

export function jobChecklistToJSON(jobChecklist: JobChecklist): string {
  return JSON.stringify(JobChecklist$outboundSchema.parse(jobChecklist));
}

export function jobChecklistFromJSON(
  jsonString: string,
): SafeParseResult<JobChecklist, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => JobChecklist$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'JobChecklist' from JSON`,
  );
}

/** @internal */
export const JobChecklistInput$inboundSchema: z.ZodType<
  JobChecklistInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string().optional(),
  active: JobChecklistActive$inboundSchema.default(1),
  job_uuid: z.string().optional(),
  name: z.string().optional(),
  section_name: z.string().optional(),
  item_type: z.string().optional(),
  sort_order: z.number().int().optional(),
  completed_timestamp: z.string().optional(),
  completed_by_staff_uuid: z.string().optional(),
  completed_during_checkin_uuid: z.string().optional(),
  reminder_type: z.string().optional(),
  reminder_data: z.union([
    z.union([z.lazy(() => ReminderData1$inboundSchema), z.string()]),
    z.union([z.lazy(() => ReminderData2$inboundSchema), z.string()]),
  ]).optional(),
  regarding_object: z.string().optional(),
  regarding_object_uuid: z.string().optional(),
  fulfilled_by_object_name: z.string().optional(),
  fulfilled_by_object_uuid: z.string().optional(),
  assigned_to_staff_uuids: z.array(z.string()).optional(),
  is_locked: IsLocked$inboundSchema.optional(),
  assigned_timestamp: z.string().optional(),
  assigned_by_staff_uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "job_uuid": "jobUuid",
    "section_name": "sectionName",
    "item_type": "itemType",
    "sort_order": "sortOrder",
    "completed_timestamp": "completedTimestamp",
    "completed_by_staff_uuid": "completedByStaffUuid",
    "completed_during_checkin_uuid": "completedDuringCheckinUuid",
    "reminder_type": "reminderType",
    "reminder_data": "reminderData",
    "regarding_object": "regardingObject",
    "regarding_object_uuid": "regardingObjectUuid",
    "fulfilled_by_object_name": "fulfilledByObjectName",
    "fulfilled_by_object_uuid": "fulfilledByObjectUuid",
    "assigned_to_staff_uuids": "assignedToStaffUuids",
    "is_locked": "isLocked",
    "assigned_timestamp": "assignedTimestamp",
    "assigned_by_staff_uuid": "assignedByStaffUuid",
  });
});

/** @internal */
export type JobChecklistInput$Outbound = {
  uuid?: string | undefined;
  active: number;
  job_uuid?: string | undefined;
  name?: string | undefined;
  section_name?: string | undefined;
  item_type?: string | undefined;
  sort_order?: number | undefined;
  completed_timestamp?: string | undefined;
  completed_by_staff_uuid?: string | undefined;
  completed_during_checkin_uuid?: string | undefined;
  reminder_type?: string | undefined;
  reminder_data?:
    | ReminderData1$Outbound
    | string
    | ReminderData2$Outbound
    | string
    | undefined;
  regarding_object?: string | undefined;
  regarding_object_uuid?: string | undefined;
  fulfilled_by_object_name?: string | undefined;
  fulfilled_by_object_uuid?: string | undefined;
  assigned_to_staff_uuids?: Array<string> | undefined;
  is_locked?: number | undefined;
  assigned_timestamp?: string | undefined;
  assigned_by_staff_uuid?: string | undefined;
};

/** @internal */
export const JobChecklistInput$outboundSchema: z.ZodType<
  JobChecklistInput$Outbound,
  z.ZodTypeDef,
  JobChecklistInput
> = z.object({
  uuid: z.string().optional(),
  active: JobChecklistActive$outboundSchema.default(1),
  jobUuid: z.string().optional(),
  name: z.string().optional(),
  sectionName: z.string().optional(),
  itemType: z.string().optional(),
  sortOrder: z.number().int().optional(),
  completedTimestamp: z.string().optional(),
  completedByStaffUuid: z.string().optional(),
  completedDuringCheckinUuid: z.string().optional(),
  reminderType: z.string().optional(),
  reminderData: z.union([
    z.union([z.lazy(() => ReminderData1$outboundSchema), z.string()]),
    z.union([z.lazy(() => ReminderData2$outboundSchema), z.string()]),
  ]).optional(),
  regardingObject: z.string().optional(),
  regardingObjectUuid: z.string().optional(),
  fulfilledByObjectName: z.string().optional(),
  fulfilledByObjectUuid: z.string().optional(),
  assignedToStaffUuids: z.array(z.string()).optional(),
  isLocked: IsLocked$outboundSchema.optional(),
  assignedTimestamp: z.string().optional(),
  assignedByStaffUuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    jobUuid: "job_uuid",
    sectionName: "section_name",
    itemType: "item_type",
    sortOrder: "sort_order",
    completedTimestamp: "completed_timestamp",
    completedByStaffUuid: "completed_by_staff_uuid",
    completedDuringCheckinUuid: "completed_during_checkin_uuid",
    reminderType: "reminder_type",
    reminderData: "reminder_data",
    regardingObject: "regarding_object",
    regardingObjectUuid: "regarding_object_uuid",
    fulfilledByObjectName: "fulfilled_by_object_name",
    fulfilledByObjectUuid: "fulfilled_by_object_uuid",
    assignedToStaffUuids: "assigned_to_staff_uuids",
    isLocked: "is_locked",
    assignedTimestamp: "assigned_timestamp",
    assignedByStaffUuid: "assigned_by_staff_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobChecklistInput$ {
  /** @deprecated use `JobChecklistInput$inboundSchema` instead. */
  export const inboundSchema = JobChecklistInput$inboundSchema;
  /** @deprecated use `JobChecklistInput$outboundSchema` instead. */
  export const outboundSchema = JobChecklistInput$outboundSchema;
  /** @deprecated use `JobChecklistInput$Outbound` instead. */
  export type Outbound = JobChecklistInput$Outbound;
}

export function jobChecklistInputToJSON(
  jobChecklistInput: JobChecklistInput,
): string {
  return JSON.stringify(
    JobChecklistInput$outboundSchema.parse(jobChecklistInput),
  );
}

export function jobChecklistInputFromJSON(
  jsonString: string,
): SafeParseResult<JobChecklistInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => JobChecklistInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'JobChecklistInput' from JSON`,
  );
}
