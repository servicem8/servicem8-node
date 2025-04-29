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
export declare const AssetTypeFieldActive: {
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
export type AssetTypeFieldActive = ClosedEnum<typeof AssetTypeFieldActive>;
export declare const AssetTypeFieldFieldType: {
    readonly Text: "Text";
    readonly Number: "Number";
    readonly Date: "Date";
    readonly MultipleChoice: "Multiple Choice";
};
export type AssetTypeFieldFieldType = ClosedEnum<typeof AssetTypeFieldFieldType>;
export type FieldData = {
    fieldType: AssetTypeFieldFieldType;
    mandatory: boolean;
    choices?: Array<string> | undefined;
};
export type AssetTypeField = {
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
    active?: AssetTypeFieldActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    /**
     * (Read-only)
     */
    assetTypeUuid?: string | undefined;
    name: string;
    fieldData?: FieldData | undefined;
    sortOrder?: number | undefined;
};
export type AssetTypeFieldInput = {
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
    active?: AssetTypeFieldActive | undefined;
    /**
     * (Read-only)
     */
    assetTypeUuid?: string | undefined;
    name: string;
    fieldData?: FieldData | undefined;
    sortOrder?: number | undefined;
};
/** @internal */
export declare const AssetTypeFieldActive$inboundSchema: z.ZodNativeEnum<typeof AssetTypeFieldActive>;
/** @internal */
export declare const AssetTypeFieldActive$outboundSchema: z.ZodNativeEnum<typeof AssetTypeFieldActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTypeFieldActive$ {
    /** @deprecated use `AssetTypeFieldActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `AssetTypeFieldActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const AssetTypeFieldFieldType$inboundSchema: z.ZodNativeEnum<typeof AssetTypeFieldFieldType>;
/** @internal */
export declare const AssetTypeFieldFieldType$outboundSchema: z.ZodNativeEnum<typeof AssetTypeFieldFieldType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTypeFieldFieldType$ {
    /** @deprecated use `AssetTypeFieldFieldType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Text: "Text";
        readonly Number: "Number";
        readonly Date: "Date";
        readonly MultipleChoice: "Multiple Choice";
    }>;
    /** @deprecated use `AssetTypeFieldFieldType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Text: "Text";
        readonly Number: "Number";
        readonly Date: "Date";
        readonly MultipleChoice: "Multiple Choice";
    }>;
}
/** @internal */
export declare const FieldData$inboundSchema: z.ZodType<FieldData, z.ZodTypeDef, unknown>;
/** @internal */
export type FieldData$Outbound = {
    fieldType: string;
    mandatory: boolean;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const FieldData$outboundSchema: z.ZodType<FieldData$Outbound, z.ZodTypeDef, FieldData>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FieldData$ {
    /** @deprecated use `FieldData$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FieldData, z.ZodTypeDef, unknown>;
    /** @deprecated use `FieldData$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FieldData$Outbound, z.ZodTypeDef, FieldData>;
    /** @deprecated use `FieldData$Outbound` instead. */
    type Outbound = FieldData$Outbound;
}
export declare function fieldDataToJSON(fieldData: FieldData): string;
export declare function fieldDataFromJSON(jsonString: string): SafeParseResult<FieldData, SDKValidationError>;
/** @internal */
export declare const AssetTypeField$inboundSchema: z.ZodType<AssetTypeField, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTypeField$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    asset_type_uuid?: string | undefined;
    name: string;
    field_data?: FieldData$Outbound | undefined;
    sort_order?: number | undefined;
};
/** @internal */
export declare const AssetTypeField$outboundSchema: z.ZodType<AssetTypeField$Outbound, z.ZodTypeDef, AssetTypeField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTypeField$ {
    /** @deprecated use `AssetTypeField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTypeField, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTypeField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTypeField$Outbound, z.ZodTypeDef, AssetTypeField>;
    /** @deprecated use `AssetTypeField$Outbound` instead. */
    type Outbound = AssetTypeField$Outbound;
}
export declare function assetTypeFieldToJSON(assetTypeField: AssetTypeField): string;
export declare function assetTypeFieldFromJSON(jsonString: string): SafeParseResult<AssetTypeField, SDKValidationError>;
/** @internal */
export declare const AssetTypeFieldInput$inboundSchema: z.ZodType<AssetTypeFieldInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTypeFieldInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    asset_type_uuid?: string | undefined;
    name: string;
    field_data?: FieldData$Outbound | undefined;
    sort_order?: number | undefined;
};
/** @internal */
export declare const AssetTypeFieldInput$outboundSchema: z.ZodType<AssetTypeFieldInput$Outbound, z.ZodTypeDef, AssetTypeFieldInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTypeFieldInput$ {
    /** @deprecated use `AssetTypeFieldInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTypeFieldInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTypeFieldInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTypeFieldInput$Outbound, z.ZodTypeDef, AssetTypeFieldInput>;
    /** @deprecated use `AssetTypeFieldInput$Outbound` instead. */
    type Outbound = AssetTypeFieldInput$Outbound;
}
export declare function assetTypeFieldInputToJSON(assetTypeFieldInput: AssetTypeFieldInput): string;
export declare function assetTypeFieldInputFromJSON(jsonString: string): SafeParseResult<AssetTypeFieldInput, SDKValidationError>;
//# sourceMappingURL=assettypefield.d.ts.map