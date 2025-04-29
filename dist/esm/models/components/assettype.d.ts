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
export declare const AssetTypeActive: {
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
export type AssetTypeActive = ClosedEnum<typeof AssetTypeActive>;
export type AssetType = {
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
    active?: AssetTypeActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name?: string | undefined;
};
export type AssetTypeInput = {
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
    active?: AssetTypeActive | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const AssetTypeActive$inboundSchema: z.ZodNativeEnum<typeof AssetTypeActive>;
/** @internal */
export declare const AssetTypeActive$outboundSchema: z.ZodNativeEnum<typeof AssetTypeActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTypeActive$ {
    /** @deprecated use `AssetTypeActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `AssetTypeActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const AssetType$inboundSchema: z.ZodType<AssetType, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetType$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const AssetType$outboundSchema: z.ZodType<AssetType$Outbound, z.ZodTypeDef, AssetType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetType$ {
    /** @deprecated use `AssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetType, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetType$Outbound, z.ZodTypeDef, AssetType>;
    /** @deprecated use `AssetType$Outbound` instead. */
    type Outbound = AssetType$Outbound;
}
export declare function assetTypeToJSON(assetType: AssetType): string;
export declare function assetTypeFromJSON(jsonString: string): SafeParseResult<AssetType, SDKValidationError>;
/** @internal */
export declare const AssetTypeInput$inboundSchema: z.ZodType<AssetTypeInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTypeInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name?: string | undefined;
};
/** @internal */
export declare const AssetTypeInput$outboundSchema: z.ZodType<AssetTypeInput$Outbound, z.ZodTypeDef, AssetTypeInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTypeInput$ {
    /** @deprecated use `AssetTypeInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTypeInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTypeInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTypeInput$Outbound, z.ZodTypeDef, AssetTypeInput>;
    /** @deprecated use `AssetTypeInput$Outbound` instead. */
    type Outbound = AssetTypeInput$Outbound;
}
export declare function assetTypeInputToJSON(assetTypeInput: AssetTypeInput): string;
export declare function assetTypeInputFromJSON(jsonString: string): SafeParseResult<AssetTypeInput, SDKValidationError>;
//# sourceMappingURL=assettype.d.ts.map