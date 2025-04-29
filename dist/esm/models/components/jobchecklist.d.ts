import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const JobChecklistActive: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export type JobChecklistActive = ClosedEnum<typeof JobChecklistActive>;
export type ReminderData2 = {};
export type ReminderDataUnion2 = ReminderData2 | string;
export type ReminderData1 = {};
export type ReminderDataUnion1 = ReminderData1 | string;
export type ReminderDataUnion3 = ReminderData1 | string | ReminderData2 | string;
/**
 * If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read-only).
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const IsLocked: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read-only).
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export type IsLocked = ClosedEnum<typeof IsLocked>;
export type JobChecklist = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: JobChecklistActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    jobUuid?: string | undefined;
    name?: string | undefined;
    sectionName?: string | undefined;
    itemType?: string | undefined;
    sortOrder?: number | undefined;
    completedTimestamp?: string | undefined;
    completedByStaffUuid?: string | undefined;
    completedDuringCheckinUuid?: string | undefined;
    reminderType?: string | undefined;
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
    assignedToStaffUuids?: Array<string> | undefined;
    /**
     * If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read-only).
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    isLocked?: IsLocked | undefined;
    /**
     * The timestamp when the checklist item was assigned to the staff member. (Read-only)
     */
    assignedTimestamp?: string | undefined;
    /**
     * The UUID of the staff member who assigned the checklist item to the staff member. (Read-only)
     */
    assignedByStaffUuid?: string | undefined;
};
export type JobChecklistInput = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: JobChecklistActive | undefined;
    jobUuid?: string | undefined;
    name?: string | undefined;
    sectionName?: string | undefined;
    itemType?: string | undefined;
    sortOrder?: number | undefined;
    completedTimestamp?: string | undefined;
    completedByStaffUuid?: string | undefined;
    completedDuringCheckinUuid?: string | undefined;
    reminderType?: string | undefined;
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
    assignedToStaffUuids?: Array<string> | undefined;
    /**
     * If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read-only).
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    isLocked?: IsLocked | undefined;
    /**
     * The timestamp when the checklist item was assigned to the staff member. (Read-only)
     */
    assignedTimestamp?: string | undefined;
    /**
     * The UUID of the staff member who assigned the checklist item to the staff member. (Read-only)
     */
    assignedByStaffUuid?: string | undefined;
};
/** @internal */
export declare const JobChecklistActive$inboundSchema: z.ZodNativeEnum<typeof JobChecklistActive>;
/** @internal */
export declare const JobChecklistActive$outboundSchema: z.ZodNativeEnum<typeof JobChecklistActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobChecklistActive$ {
    /** @deprecated use `JobChecklistActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `JobChecklistActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const ReminderData2$inboundSchema: z.ZodType<ReminderData2, z.ZodTypeDef, unknown>;
/** @internal */
export type ReminderData2$Outbound = {};
/** @internal */
export declare const ReminderData2$outboundSchema: z.ZodType<ReminderData2$Outbound, z.ZodTypeDef, ReminderData2>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReminderData2$ {
    /** @deprecated use `ReminderData2$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReminderData2, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReminderData2$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReminderData2$Outbound, z.ZodTypeDef, ReminderData2>;
    /** @deprecated use `ReminderData2$Outbound` instead. */
    type Outbound = ReminderData2$Outbound;
}
export declare function reminderData2ToJSON(reminderData2: ReminderData2): string;
export declare function reminderData2FromJSON(jsonString: string): SafeParseResult<ReminderData2, SDKValidationError>;
/** @internal */
export declare const ReminderDataUnion2$inboundSchema: z.ZodType<ReminderDataUnion2, z.ZodTypeDef, unknown>;
/** @internal */
export type ReminderDataUnion2$Outbound = ReminderData2$Outbound | string;
/** @internal */
export declare const ReminderDataUnion2$outboundSchema: z.ZodType<ReminderDataUnion2$Outbound, z.ZodTypeDef, ReminderDataUnion2>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReminderDataUnion2$ {
    /** @deprecated use `ReminderDataUnion2$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReminderDataUnion2, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReminderDataUnion2$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReminderDataUnion2$Outbound, z.ZodTypeDef, ReminderDataUnion2>;
    /** @deprecated use `ReminderDataUnion2$Outbound` instead. */
    type Outbound = ReminderDataUnion2$Outbound;
}
export declare function reminderDataUnion2ToJSON(reminderDataUnion2: ReminderDataUnion2): string;
export declare function reminderDataUnion2FromJSON(jsonString: string): SafeParseResult<ReminderDataUnion2, SDKValidationError>;
/** @internal */
export declare const ReminderData1$inboundSchema: z.ZodType<ReminderData1, z.ZodTypeDef, unknown>;
/** @internal */
export type ReminderData1$Outbound = {};
/** @internal */
export declare const ReminderData1$outboundSchema: z.ZodType<ReminderData1$Outbound, z.ZodTypeDef, ReminderData1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReminderData1$ {
    /** @deprecated use `ReminderData1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReminderData1, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReminderData1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReminderData1$Outbound, z.ZodTypeDef, ReminderData1>;
    /** @deprecated use `ReminderData1$Outbound` instead. */
    type Outbound = ReminderData1$Outbound;
}
export declare function reminderData1ToJSON(reminderData1: ReminderData1): string;
export declare function reminderData1FromJSON(jsonString: string): SafeParseResult<ReminderData1, SDKValidationError>;
/** @internal */
export declare const ReminderDataUnion1$inboundSchema: z.ZodType<ReminderDataUnion1, z.ZodTypeDef, unknown>;
/** @internal */
export type ReminderDataUnion1$Outbound = ReminderData1$Outbound | string;
/** @internal */
export declare const ReminderDataUnion1$outboundSchema: z.ZodType<ReminderDataUnion1$Outbound, z.ZodTypeDef, ReminderDataUnion1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReminderDataUnion1$ {
    /** @deprecated use `ReminderDataUnion1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReminderDataUnion1, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReminderDataUnion1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReminderDataUnion1$Outbound, z.ZodTypeDef, ReminderDataUnion1>;
    /** @deprecated use `ReminderDataUnion1$Outbound` instead. */
    type Outbound = ReminderDataUnion1$Outbound;
}
export declare function reminderDataUnion1ToJSON(reminderDataUnion1: ReminderDataUnion1): string;
export declare function reminderDataUnion1FromJSON(jsonString: string): SafeParseResult<ReminderDataUnion1, SDKValidationError>;
/** @internal */
export declare const ReminderDataUnion3$inboundSchema: z.ZodType<ReminderDataUnion3, z.ZodTypeDef, unknown>;
/** @internal */
export type ReminderDataUnion3$Outbound = ReminderData1$Outbound | string | ReminderData2$Outbound | string;
/** @internal */
export declare const ReminderDataUnion3$outboundSchema: z.ZodType<ReminderDataUnion3$Outbound, z.ZodTypeDef, ReminderDataUnion3>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReminderDataUnion3$ {
    /** @deprecated use `ReminderDataUnion3$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReminderDataUnion3, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReminderDataUnion3$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReminderDataUnion3$Outbound, z.ZodTypeDef, ReminderDataUnion3>;
    /** @deprecated use `ReminderDataUnion3$Outbound` instead. */
    type Outbound = ReminderDataUnion3$Outbound;
}
export declare function reminderDataUnion3ToJSON(reminderDataUnion3: ReminderDataUnion3): string;
export declare function reminderDataUnion3FromJSON(jsonString: string): SafeParseResult<ReminderDataUnion3, SDKValidationError>;
/** @internal */
export declare const IsLocked$inboundSchema: z.ZodNativeEnum<typeof IsLocked>;
/** @internal */
export declare const IsLocked$outboundSchema: z.ZodNativeEnum<typeof IsLocked>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IsLocked$ {
    /** @deprecated use `IsLocked$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `IsLocked$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const JobChecklist$inboundSchema: z.ZodType<JobChecklist, z.ZodTypeDef, unknown>;
/** @internal */
export type JobChecklist$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    job_uuid?: string | undefined;
    name?: string | undefined;
    section_name?: string | undefined;
    item_type?: string | undefined;
    sort_order?: number | undefined;
    completed_timestamp?: string | undefined;
    completed_by_staff_uuid?: string | undefined;
    completed_during_checkin_uuid?: string | undefined;
    reminder_type?: string | undefined;
    reminder_data?: ReminderData1$Outbound | string | ReminderData2$Outbound | string | undefined;
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
export declare const JobChecklist$outboundSchema: z.ZodType<JobChecklist$Outbound, z.ZodTypeDef, JobChecklist>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobChecklist$ {
    /** @deprecated use `JobChecklist$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobChecklist, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobChecklist$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobChecklist$Outbound, z.ZodTypeDef, JobChecklist>;
    /** @deprecated use `JobChecklist$Outbound` instead. */
    type Outbound = JobChecklist$Outbound;
}
export declare function jobChecklistToJSON(jobChecklist: JobChecklist): string;
export declare function jobChecklistFromJSON(jsonString: string): SafeParseResult<JobChecklist, SDKValidationError>;
/** @internal */
export declare const JobChecklistInput$inboundSchema: z.ZodType<JobChecklistInput, z.ZodTypeDef, unknown>;
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
    reminder_data?: ReminderData1$Outbound | string | ReminderData2$Outbound | string | undefined;
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
export declare const JobChecklistInput$outboundSchema: z.ZodType<JobChecklistInput$Outbound, z.ZodTypeDef, JobChecklistInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobChecklistInput$ {
    /** @deprecated use `JobChecklistInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobChecklistInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobChecklistInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobChecklistInput$Outbound, z.ZodTypeDef, JobChecklistInput>;
    /** @deprecated use `JobChecklistInput$Outbound` instead. */
    type Outbound = JobChecklistInput$Outbound;
}
export declare function jobChecklistInputToJSON(jobChecklistInput: JobChecklistInput): string;
export declare function jobChecklistInputFromJSON(jsonString: string): SafeParseResult<JobChecklistInput, SDKValidationError>;
//# sourceMappingURL=jobchecklist.d.ts.map