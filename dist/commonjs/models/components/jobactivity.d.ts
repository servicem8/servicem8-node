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
export declare const JobActivityActive: {
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
export type JobActivityActive = ClosedEnum<typeof JobActivityActive>;
export type JobActivity = {
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
    active?: JobActivityActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    jobUuid?: string | undefined;
    staffUuid?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    activityWasScheduled?: string | undefined;
    activityWasRecorded?: string | undefined;
    activityWasAutomated?: string | undefined;
    hasBeenOpened?: string | undefined;
    hasBeenOpenedTimestamp?: string | undefined;
    travelTimeInSeconds?: string | undefined;
    travelDistanceInMeters?: string | undefined;
    allocatedByStaffUuid?: string | undefined;
    allocatedTimestamp?: string | undefined;
    materialUuid?: string | undefined;
    /**
     * Staff Member who last modified record
     */
    editByStaffUuid?: string | undefined;
};
export type JobActivityInput = {
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
    active?: JobActivityActive | undefined;
    jobUuid?: string | undefined;
    staffUuid?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    activityWasScheduled?: string | undefined;
    activityWasRecorded?: string | undefined;
    activityWasAutomated?: string | undefined;
    hasBeenOpened?: string | undefined;
    hasBeenOpenedTimestamp?: string | undefined;
    travelTimeInSeconds?: string | undefined;
    travelDistanceInMeters?: string | undefined;
    allocatedByStaffUuid?: string | undefined;
    allocatedTimestamp?: string | undefined;
    materialUuid?: string | undefined;
};
/** @internal */
export declare const JobActivityActive$inboundSchema: z.ZodNativeEnum<typeof JobActivityActive>;
/** @internal */
export declare const JobActivityActive$outboundSchema: z.ZodNativeEnum<typeof JobActivityActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobActivityActive$ {
    /** @deprecated use `JobActivityActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `JobActivityActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const JobActivity$inboundSchema: z.ZodType<JobActivity, z.ZodTypeDef, unknown>;
/** @internal */
export type JobActivity$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    job_uuid?: string | undefined;
    staff_uuid?: string | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    activity_was_scheduled?: string | undefined;
    activity_was_recorded?: string | undefined;
    activity_was_automated?: string | undefined;
    has_been_opened?: string | undefined;
    has_been_opened_timestamp?: string | undefined;
    travel_time_in_seconds?: string | undefined;
    travel_distance_in_meters?: string | undefined;
    allocated_by_staff_uuid?: string | undefined;
    allocated_timestamp?: string | undefined;
    material_uuid?: string | undefined;
    edit_by_staff_uuid?: string | undefined;
};
/** @internal */
export declare const JobActivity$outboundSchema: z.ZodType<JobActivity$Outbound, z.ZodTypeDef, JobActivity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobActivity$ {
    /** @deprecated use `JobActivity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobActivity, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobActivity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobActivity$Outbound, z.ZodTypeDef, JobActivity>;
    /** @deprecated use `JobActivity$Outbound` instead. */
    type Outbound = JobActivity$Outbound;
}
export declare function jobActivityToJSON(jobActivity: JobActivity): string;
export declare function jobActivityFromJSON(jsonString: string): SafeParseResult<JobActivity, SDKValidationError>;
/** @internal */
export declare const JobActivityInput$inboundSchema: z.ZodType<JobActivityInput, z.ZodTypeDef, unknown>;
/** @internal */
export type JobActivityInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    job_uuid?: string | undefined;
    staff_uuid?: string | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    activity_was_scheduled?: string | undefined;
    activity_was_recorded?: string | undefined;
    activity_was_automated?: string | undefined;
    has_been_opened?: string | undefined;
    has_been_opened_timestamp?: string | undefined;
    travel_time_in_seconds?: string | undefined;
    travel_distance_in_meters?: string | undefined;
    allocated_by_staff_uuid?: string | undefined;
    allocated_timestamp?: string | undefined;
    material_uuid?: string | undefined;
};
/** @internal */
export declare const JobActivityInput$outboundSchema: z.ZodType<JobActivityInput$Outbound, z.ZodTypeDef, JobActivityInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobActivityInput$ {
    /** @deprecated use `JobActivityInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobActivityInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobActivityInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobActivityInput$Outbound, z.ZodTypeDef, JobActivityInput>;
    /** @deprecated use `JobActivityInput$Outbound` instead. */
    type Outbound = JobActivityInput$Outbound;
}
export declare function jobActivityInputToJSON(jobActivityInput: JobActivityInput): string;
export declare function jobActivityInputFromJSON(jsonString: string): SafeParseResult<JobActivityInput, SDKValidationError>;
//# sourceMappingURL=jobactivity.d.ts.map