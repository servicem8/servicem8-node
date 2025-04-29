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
export declare const AssetActive: {
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
export type AssetActive = ClosedEnum<typeof AssetActive>;
export type FieldDatum = {
    /**
     * Must be the UUID of an AssetTypeField
     */
    uuid: string;
    fieldType: string;
    fieldName: string;
    /**
     * Convert all values to string. Dates shall be in Y-m-d format.
     */
    fieldValue: string;
    sortOrder: number;
};
export type Asset = {
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
    active?: AssetActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    /**
     * UUID of the Client to which this Asset is attached
     */
    companyUuid?: string | undefined;
    /**
     * The unique code printed on this Asset's attached label (read only) (Read-only)
     */
    assetCode?: string | undefined;
    /**
     * UUID of an Asset Type which defines the fields that can be stored for this Asset (read only) (Read-only)
     */
    assetTypeUuid?: string | undefined;
    /**
     * User-facing description of this asset
     */
    name: string;
    /**
     * Latitude component of the Asset's location in degrees
     */
    lat?: number | undefined;
    /**
     * Longitude component of the Asset's location in degrees
     */
    lng?: number | undefined;
    /**
     * Timestamp at which the Asset's location was last updated
     */
    geoTimestamp?: string | undefined;
    /**
     * Altitude component of the Asset's location in metres
     */
    altitude?: number | undefined;
    fieldData?: Array<FieldDatum> | undefined;
};
export type AssetInput = {
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
    active?: AssetActive | undefined;
    /**
     * UUID of the Client to which this Asset is attached
     */
    companyUuid?: string | undefined;
    /**
     * The unique code printed on this Asset's attached label (read only) (Read-only)
     */
    assetCode?: string | undefined;
    /**
     * UUID of an Asset Type which defines the fields that can be stored for this Asset (read only) (Read-only)
     */
    assetTypeUuid?: string | undefined;
    /**
     * User-facing description of this asset
     */
    name: string;
    /**
     * Latitude component of the Asset's location in degrees
     */
    lat?: number | undefined;
    /**
     * Longitude component of the Asset's location in degrees
     */
    lng?: number | undefined;
    /**
     * Timestamp at which the Asset's location was last updated
     */
    geoTimestamp?: string | undefined;
    /**
     * Altitude component of the Asset's location in metres
     */
    altitude?: number | undefined;
    fieldData?: Array<FieldDatum> | undefined;
};
/** @internal */
export declare const AssetActive$inboundSchema: z.ZodNativeEnum<typeof AssetActive>;
/** @internal */
export declare const AssetActive$outboundSchema: z.ZodNativeEnum<typeof AssetActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetActive$ {
    /** @deprecated use `AssetActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `AssetActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const FieldDatum$inboundSchema: z.ZodType<FieldDatum, z.ZodTypeDef, unknown>;
/** @internal */
export type FieldDatum$Outbound = {
    uuid: string;
    fieldType: string;
    fieldName: string;
    fieldValue: string;
    sortOrder: number;
};
/** @internal */
export declare const FieldDatum$outboundSchema: z.ZodType<FieldDatum$Outbound, z.ZodTypeDef, FieldDatum>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FieldDatum$ {
    /** @deprecated use `FieldDatum$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FieldDatum, z.ZodTypeDef, unknown>;
    /** @deprecated use `FieldDatum$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FieldDatum$Outbound, z.ZodTypeDef, FieldDatum>;
    /** @deprecated use `FieldDatum$Outbound` instead. */
    type Outbound = FieldDatum$Outbound;
}
export declare function fieldDatumToJSON(fieldDatum: FieldDatum): string;
export declare function fieldDatumFromJSON(jsonString: string): SafeParseResult<FieldDatum, SDKValidationError>;
/** @internal */
export declare const Asset$inboundSchema: z.ZodType<Asset, z.ZodTypeDef, unknown>;
/** @internal */
export type Asset$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    company_uuid?: string | undefined;
    asset_code?: string | undefined;
    asset_type_uuid?: string | undefined;
    name: string;
    lat?: number | undefined;
    lng?: number | undefined;
    geo_timestamp?: string | undefined;
    altitude?: number | undefined;
    field_data?: Array<FieldDatum$Outbound> | undefined;
};
/** @internal */
export declare const Asset$outboundSchema: z.ZodType<Asset$Outbound, z.ZodTypeDef, Asset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Asset$ {
    /** @deprecated use `Asset$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Asset, z.ZodTypeDef, unknown>;
    /** @deprecated use `Asset$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Asset$Outbound, z.ZodTypeDef, Asset>;
    /** @deprecated use `Asset$Outbound` instead. */
    type Outbound = Asset$Outbound;
}
export declare function assetToJSON(asset: Asset): string;
export declare function assetFromJSON(jsonString: string): SafeParseResult<Asset, SDKValidationError>;
/** @internal */
export declare const AssetInput$inboundSchema: z.ZodType<AssetInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    company_uuid?: string | undefined;
    asset_code?: string | undefined;
    asset_type_uuid?: string | undefined;
    name: string;
    lat?: number | undefined;
    lng?: number | undefined;
    geo_timestamp?: string | undefined;
    altitude?: number | undefined;
    field_data?: Array<FieldDatum$Outbound> | undefined;
};
/** @internal */
export declare const AssetInput$outboundSchema: z.ZodType<AssetInput$Outbound, z.ZodTypeDef, AssetInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetInput$ {
    /** @deprecated use `AssetInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetInput$Outbound, z.ZodTypeDef, AssetInput>;
    /** @deprecated use `AssetInput$Outbound` instead. */
    type Outbound = AssetInput$Outbound;
}
export declare function assetInputToJSON(assetInput: AssetInput): string;
export declare function assetInputFromJSON(jsonString: string): SafeParseResult<AssetInput, SDKValidationError>;
//# sourceMappingURL=asset.d.ts.map