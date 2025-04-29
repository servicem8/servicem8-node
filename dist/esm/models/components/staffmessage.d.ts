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
export declare const StaffMessageActive: {
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
export type StaffMessageActive = ClosedEnum<typeof StaffMessageActive>;
export type StaffMessage = {
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
    active?: StaffMessageActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    fromStaffUuid?: string | undefined;
    toStaffUuid?: string | undefined;
    sentTimestamp?: string | undefined;
    deliveredTimestamp?: string | undefined;
    readTimestamp?: string | undefined;
    message?: string | undefined;
    regardingJobUuid?: string | undefined;
    attachedJson?: string | undefined;
};
export type StaffMessageInput = {
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
    active?: StaffMessageActive | undefined;
    fromStaffUuid?: string | undefined;
    toStaffUuid?: string | undefined;
    sentTimestamp?: string | undefined;
    deliveredTimestamp?: string | undefined;
    readTimestamp?: string | undefined;
    message?: string | undefined;
    regardingJobUuid?: string | undefined;
    attachedJson?: string | undefined;
};
/** @internal */
export declare const StaffMessageActive$inboundSchema: z.ZodNativeEnum<typeof StaffMessageActive>;
/** @internal */
export declare const StaffMessageActive$outboundSchema: z.ZodNativeEnum<typeof StaffMessageActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StaffMessageActive$ {
    /** @deprecated use `StaffMessageActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `StaffMessageActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const StaffMessage$inboundSchema: z.ZodType<StaffMessage, z.ZodTypeDef, unknown>;
/** @internal */
export type StaffMessage$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    from_staff_uuid?: string | undefined;
    to_staff_uuid?: string | undefined;
    sent_timestamp?: string | undefined;
    delivered_timestamp?: string | undefined;
    read_timestamp?: string | undefined;
    message?: string | undefined;
    regarding_job_uuid?: string | undefined;
    attached_json?: string | undefined;
};
/** @internal */
export declare const StaffMessage$outboundSchema: z.ZodType<StaffMessage$Outbound, z.ZodTypeDef, StaffMessage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StaffMessage$ {
    /** @deprecated use `StaffMessage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StaffMessage, z.ZodTypeDef, unknown>;
    /** @deprecated use `StaffMessage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StaffMessage$Outbound, z.ZodTypeDef, StaffMessage>;
    /** @deprecated use `StaffMessage$Outbound` instead. */
    type Outbound = StaffMessage$Outbound;
}
export declare function staffMessageToJSON(staffMessage: StaffMessage): string;
export declare function staffMessageFromJSON(jsonString: string): SafeParseResult<StaffMessage, SDKValidationError>;
/** @internal */
export declare const StaffMessageInput$inboundSchema: z.ZodType<StaffMessageInput, z.ZodTypeDef, unknown>;
/** @internal */
export type StaffMessageInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    from_staff_uuid?: string | undefined;
    to_staff_uuid?: string | undefined;
    sent_timestamp?: string | undefined;
    delivered_timestamp?: string | undefined;
    read_timestamp?: string | undefined;
    message?: string | undefined;
    regarding_job_uuid?: string | undefined;
    attached_json?: string | undefined;
};
/** @internal */
export declare const StaffMessageInput$outboundSchema: z.ZodType<StaffMessageInput$Outbound, z.ZodTypeDef, StaffMessageInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StaffMessageInput$ {
    /** @deprecated use `StaffMessageInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StaffMessageInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `StaffMessageInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StaffMessageInput$Outbound, z.ZodTypeDef, StaffMessageInput>;
    /** @deprecated use `StaffMessageInput$Outbound` instead. */
    type Outbound = StaffMessageInput$Outbound;
}
export declare function staffMessageInputToJSON(staffMessageInput: StaffMessageInput): string;
export declare function staffMessageInputFromJSON(jsonString: string): SafeParseResult<StaffMessageInput, SDKValidationError>;
//# sourceMappingURL=staffmessage.d.ts.map