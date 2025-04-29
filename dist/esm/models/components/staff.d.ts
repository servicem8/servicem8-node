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
export declare const StaffActive: {
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
export type StaffActive = ClosedEnum<typeof StaffActive>;
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const HideFromSchedule: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export type HideFromSchedule = ClosedEnum<typeof HideFromSchedule>;
export type Staff = {
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
    active?: StaffActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    /**
     * Staff First Name
     */
    first: string;
    /**
     * Staff Last Name
     */
    last: string;
    /**
     * Staff Email Address. This is also your login name.
     */
    email: string;
    mobile?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    geoTimestamp?: string | undefined;
    jobTitle?: string | undefined;
    navigatingToJobUuid?: string | undefined;
    navigatingTimestamp?: string | undefined;
    navigatingExpiryTimestamp?: string | undefined;
    color?: string | undefined;
    customIconUrl?: string | undefined;
    statusMessage?: string | undefined;
    statusMessageTimestamp?: string | undefined;
    canReceivePushNotification?: string | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    hideFromSchedule?: HideFromSchedule | undefined;
    securityRoleUuid?: string | undefined;
};
export type StaffInput = {
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
    active?: StaffActive | undefined;
    /**
     * Staff First Name
     */
    first: string;
    /**
     * Staff Last Name
     */
    last: string;
    /**
     * Staff Email Address. This is also your login name.
     */
    email: string;
    mobile?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    geoTimestamp?: string | undefined;
    jobTitle?: string | undefined;
    navigatingToJobUuid?: string | undefined;
    navigatingTimestamp?: string | undefined;
    navigatingExpiryTimestamp?: string | undefined;
    color?: string | undefined;
    customIconUrl?: string | undefined;
    statusMessage?: string | undefined;
    statusMessageTimestamp?: string | undefined;
    canReceivePushNotification?: string | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    hideFromSchedule?: HideFromSchedule | undefined;
    securityRoleUuid?: string | undefined;
};
/** @internal */
export declare const StaffActive$inboundSchema: z.ZodNativeEnum<typeof StaffActive>;
/** @internal */
export declare const StaffActive$outboundSchema: z.ZodNativeEnum<typeof StaffActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StaffActive$ {
    /** @deprecated use `StaffActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `StaffActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const HideFromSchedule$inboundSchema: z.ZodNativeEnum<typeof HideFromSchedule>;
/** @internal */
export declare const HideFromSchedule$outboundSchema: z.ZodNativeEnum<typeof HideFromSchedule>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HideFromSchedule$ {
    /** @deprecated use `HideFromSchedule$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `HideFromSchedule$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Staff$inboundSchema: z.ZodType<Staff, z.ZodTypeDef, unknown>;
/** @internal */
export type Staff$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    first: string;
    last: string;
    email: string;
    mobile?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    geo_timestamp?: string | undefined;
    job_title?: string | undefined;
    navigating_to_job_uuid?: string | undefined;
    navigating_timestamp?: string | undefined;
    navigating_expiry_timestamp?: string | undefined;
    color?: string | undefined;
    custom_icon_url?: string | undefined;
    status_message?: string | undefined;
    status_message_timestamp?: string | undefined;
    can_receive_push_notification?: string | undefined;
    hide_from_schedule?: number | undefined;
    security_role_uuid?: string | undefined;
};
/** @internal */
export declare const Staff$outboundSchema: z.ZodType<Staff$Outbound, z.ZodTypeDef, Staff>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Staff$ {
    /** @deprecated use `Staff$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Staff, z.ZodTypeDef, unknown>;
    /** @deprecated use `Staff$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Staff$Outbound, z.ZodTypeDef, Staff>;
    /** @deprecated use `Staff$Outbound` instead. */
    type Outbound = Staff$Outbound;
}
export declare function staffToJSON(staff: Staff): string;
export declare function staffFromJSON(jsonString: string): SafeParseResult<Staff, SDKValidationError>;
/** @internal */
export declare const StaffInput$inboundSchema: z.ZodType<StaffInput, z.ZodTypeDef, unknown>;
/** @internal */
export type StaffInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    first: string;
    last: string;
    email: string;
    mobile?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    geo_timestamp?: string | undefined;
    job_title?: string | undefined;
    navigating_to_job_uuid?: string | undefined;
    navigating_timestamp?: string | undefined;
    navigating_expiry_timestamp?: string | undefined;
    color?: string | undefined;
    custom_icon_url?: string | undefined;
    status_message?: string | undefined;
    status_message_timestamp?: string | undefined;
    can_receive_push_notification?: string | undefined;
    hide_from_schedule?: number | undefined;
    security_role_uuid?: string | undefined;
};
/** @internal */
export declare const StaffInput$outboundSchema: z.ZodType<StaffInput$Outbound, z.ZodTypeDef, StaffInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StaffInput$ {
    /** @deprecated use `StaffInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StaffInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `StaffInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StaffInput$Outbound, z.ZodTypeDef, StaffInput>;
    /** @deprecated use `StaffInput$Outbound` instead. */
    type Outbound = StaffInput$Outbound;
}
export declare function staffInputToJSON(staffInput: StaffInput): string;
export declare function staffInputFromJSON(jsonString: string): SafeParseResult<StaffInput, SDKValidationError>;
//# sourceMappingURL=staff.d.ts.map