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
export declare const BadgeActive: {
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
export type BadgeActive = ClosedEnum<typeof BadgeActive>;
export type Badge = {
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
    active?: BadgeActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    /**
     * Badge Name
     */
    name: string;
    automaticallyAllocated?: string | undefined;
    fileName?: string | undefined;
    regardingFormUuid?: string | undefined;
    regardingAssetTypeUuid?: string | undefined;
};
export type BadgeInput = {
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
    active?: BadgeActive | undefined;
    /**
     * Badge Name
     */
    name: string;
    automaticallyAllocated?: string | undefined;
    fileName?: string | undefined;
    regardingFormUuid?: string | undefined;
    regardingAssetTypeUuid?: string | undefined;
};
/** @internal */
export declare const BadgeActive$inboundSchema: z.ZodNativeEnum<typeof BadgeActive>;
/** @internal */
export declare const BadgeActive$outboundSchema: z.ZodNativeEnum<typeof BadgeActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BadgeActive$ {
    /** @deprecated use `BadgeActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `BadgeActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Badge$inboundSchema: z.ZodType<Badge, z.ZodTypeDef, unknown>;
/** @internal */
export type Badge$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    automatically_allocated?: string | undefined;
    file_name?: string | undefined;
    regarding_form_uuid?: string | undefined;
    regarding_asset_type_uuid?: string | undefined;
};
/** @internal */
export declare const Badge$outboundSchema: z.ZodType<Badge$Outbound, z.ZodTypeDef, Badge>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Badge$ {
    /** @deprecated use `Badge$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Badge, z.ZodTypeDef, unknown>;
    /** @deprecated use `Badge$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Badge$Outbound, z.ZodTypeDef, Badge>;
    /** @deprecated use `Badge$Outbound` instead. */
    type Outbound = Badge$Outbound;
}
export declare function badgeToJSON(badge: Badge): string;
export declare function badgeFromJSON(jsonString: string): SafeParseResult<Badge, SDKValidationError>;
/** @internal */
export declare const BadgeInput$inboundSchema: z.ZodType<BadgeInput, z.ZodTypeDef, unknown>;
/** @internal */
export type BadgeInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    automatically_allocated?: string | undefined;
    file_name?: string | undefined;
    regarding_form_uuid?: string | undefined;
    regarding_asset_type_uuid?: string | undefined;
};
/** @internal */
export declare const BadgeInput$outboundSchema: z.ZodType<BadgeInput$Outbound, z.ZodTypeDef, BadgeInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BadgeInput$ {
    /** @deprecated use `BadgeInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BadgeInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `BadgeInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BadgeInput$Outbound, z.ZodTypeDef, BadgeInput>;
    /** @deprecated use `BadgeInput$Outbound` instead. */
    type Outbound = BadgeInput$Outbound;
}
export declare function badgeInputToJSON(badgeInput: BadgeInput): string;
export declare function badgeInputFromJSON(jsonString: string): SafeParseResult<BadgeInput, SDKValidationError>;
//# sourceMappingURL=badge.d.ts.map