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
export declare const JobAllocationActive: {
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
export type JobAllocationActive = ClosedEnum<typeof JobAllocationActive>;
export type JobAllocation = {
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
    active?: JobAllocationActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    jobUuid?: string | undefined;
    queueUuid?: string | undefined;
    staffUuid?: string | undefined;
    allocationDate?: string | undefined;
    allocationWindowUuid?: string | undefined;
    allocatedByStaffUuid?: string | undefined;
    allocatedTimestamp?: string | undefined;
    expiryTimestamp?: string | undefined;
    readTimestamp?: string | undefined;
    completionTimestamp?: string | undefined;
    estimatedDuration?: string | undefined;
    revisedDuration?: string | undefined;
    sortPriority?: string | undefined;
    requiresAcceptance?: string | undefined;
    acceptanceStatus?: string | undefined;
    acceptanceTimestamp?: string | undefined;
};
export type JobAllocationInput = {
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
    active?: JobAllocationActive | undefined;
    jobUuid?: string | undefined;
    queueUuid?: string | undefined;
    staffUuid?: string | undefined;
    allocationDate?: string | undefined;
    allocationWindowUuid?: string | undefined;
    allocatedByStaffUuid?: string | undefined;
    allocatedTimestamp?: string | undefined;
    expiryTimestamp?: string | undefined;
    readTimestamp?: string | undefined;
    completionTimestamp?: string | undefined;
    estimatedDuration?: string | undefined;
    revisedDuration?: string | undefined;
    sortPriority?: string | undefined;
    requiresAcceptance?: string | undefined;
    acceptanceStatus?: string | undefined;
    acceptanceTimestamp?: string | undefined;
};
/** @internal */
export declare const JobAllocationActive$inboundSchema: z.ZodNativeEnum<typeof JobAllocationActive>;
/** @internal */
export declare const JobAllocationActive$outboundSchema: z.ZodNativeEnum<typeof JobAllocationActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobAllocationActive$ {
    /** @deprecated use `JobAllocationActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `JobAllocationActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const JobAllocation$inboundSchema: z.ZodType<JobAllocation, z.ZodTypeDef, unknown>;
/** @internal */
export type JobAllocation$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    job_uuid?: string | undefined;
    queue_uuid?: string | undefined;
    staff_uuid?: string | undefined;
    allocation_date?: string | undefined;
    allocation_window_uuid?: string | undefined;
    allocated_by_staff_uuid?: string | undefined;
    allocated_timestamp?: string | undefined;
    expiry_timestamp?: string | undefined;
    read_timestamp?: string | undefined;
    completion_timestamp?: string | undefined;
    estimated_duration?: string | undefined;
    revised_duration?: string | undefined;
    sort_priority?: string | undefined;
    requires_acceptance?: string | undefined;
    acceptance_status?: string | undefined;
    acceptance_timestamp?: string | undefined;
};
/** @internal */
export declare const JobAllocation$outboundSchema: z.ZodType<JobAllocation$Outbound, z.ZodTypeDef, JobAllocation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobAllocation$ {
    /** @deprecated use `JobAllocation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobAllocation, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobAllocation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobAllocation$Outbound, z.ZodTypeDef, JobAllocation>;
    /** @deprecated use `JobAllocation$Outbound` instead. */
    type Outbound = JobAllocation$Outbound;
}
export declare function jobAllocationToJSON(jobAllocation: JobAllocation): string;
export declare function jobAllocationFromJSON(jsonString: string): SafeParseResult<JobAllocation, SDKValidationError>;
/** @internal */
export declare const JobAllocationInput$inboundSchema: z.ZodType<JobAllocationInput, z.ZodTypeDef, unknown>;
/** @internal */
export type JobAllocationInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    job_uuid?: string | undefined;
    queue_uuid?: string | undefined;
    staff_uuid?: string | undefined;
    allocation_date?: string | undefined;
    allocation_window_uuid?: string | undefined;
    allocated_by_staff_uuid?: string | undefined;
    allocated_timestamp?: string | undefined;
    expiry_timestamp?: string | undefined;
    read_timestamp?: string | undefined;
    completion_timestamp?: string | undefined;
    estimated_duration?: string | undefined;
    revised_duration?: string | undefined;
    sort_priority?: string | undefined;
    requires_acceptance?: string | undefined;
    acceptance_status?: string | undefined;
    acceptance_timestamp?: string | undefined;
};
/** @internal */
export declare const JobAllocationInput$outboundSchema: z.ZodType<JobAllocationInput$Outbound, z.ZodTypeDef, JobAllocationInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobAllocationInput$ {
    /** @deprecated use `JobAllocationInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobAllocationInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobAllocationInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobAllocationInput$Outbound, z.ZodTypeDef, JobAllocationInput>;
    /** @deprecated use `JobAllocationInput$Outbound` instead. */
    type Outbound = JobAllocationInput$Outbound;
}
export declare function jobAllocationInputToJSON(jobAllocationInput: JobAllocationInput): string;
export declare function jobAllocationInputFromJSON(jsonString: string): SafeParseResult<JobAllocationInput, SDKValidationError>;
//# sourceMappingURL=joballocation.d.ts.map