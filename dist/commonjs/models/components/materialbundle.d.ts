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
export declare const MaterialBundleActive: {
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
export type MaterialBundleActive = ClosedEnum<typeof MaterialBundleActive>;
export type MaterialList = {
    /**
     * Must be the UUID of a Material record
     */
    uuid: string;
    quantity: number;
};
export type MaterialBundle = {
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
    active?: MaterialBundleActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    itemNumber: string;
    name?: string | undefined;
    materialList?: Array<MaterialList> | undefined;
};
export type MaterialBundleInput = {
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
    active?: MaterialBundleActive | undefined;
    itemNumber: string;
    name?: string | undefined;
    materialList?: Array<MaterialList> | undefined;
};
/** @internal */
export declare const MaterialBundleActive$inboundSchema: z.ZodNativeEnum<typeof MaterialBundleActive>;
/** @internal */
export declare const MaterialBundleActive$outboundSchema: z.ZodNativeEnum<typeof MaterialBundleActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaterialBundleActive$ {
    /** @deprecated use `MaterialBundleActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `MaterialBundleActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const MaterialList$inboundSchema: z.ZodType<MaterialList, z.ZodTypeDef, unknown>;
/** @internal */
export type MaterialList$Outbound = {
    uuid: string;
    quantity: number;
};
/** @internal */
export declare const MaterialList$outboundSchema: z.ZodType<MaterialList$Outbound, z.ZodTypeDef, MaterialList>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaterialList$ {
    /** @deprecated use `MaterialList$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MaterialList, z.ZodTypeDef, unknown>;
    /** @deprecated use `MaterialList$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MaterialList$Outbound, z.ZodTypeDef, MaterialList>;
    /** @deprecated use `MaterialList$Outbound` instead. */
    type Outbound = MaterialList$Outbound;
}
export declare function materialListToJSON(materialList: MaterialList): string;
export declare function materialListFromJSON(jsonString: string): SafeParseResult<MaterialList, SDKValidationError>;
/** @internal */
export declare const MaterialBundle$inboundSchema: z.ZodType<MaterialBundle, z.ZodTypeDef, unknown>;
/** @internal */
export type MaterialBundle$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    item_number: string;
    name?: string | undefined;
    material_list?: Array<MaterialList$Outbound> | undefined;
};
/** @internal */
export declare const MaterialBundle$outboundSchema: z.ZodType<MaterialBundle$Outbound, z.ZodTypeDef, MaterialBundle>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaterialBundle$ {
    /** @deprecated use `MaterialBundle$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MaterialBundle, z.ZodTypeDef, unknown>;
    /** @deprecated use `MaterialBundle$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MaterialBundle$Outbound, z.ZodTypeDef, MaterialBundle>;
    /** @deprecated use `MaterialBundle$Outbound` instead. */
    type Outbound = MaterialBundle$Outbound;
}
export declare function materialBundleToJSON(materialBundle: MaterialBundle): string;
export declare function materialBundleFromJSON(jsonString: string): SafeParseResult<MaterialBundle, SDKValidationError>;
/** @internal */
export declare const MaterialBundleInput$inboundSchema: z.ZodType<MaterialBundleInput, z.ZodTypeDef, unknown>;
/** @internal */
export type MaterialBundleInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    item_number: string;
    name?: string | undefined;
    material_list?: Array<MaterialList$Outbound> | undefined;
};
/** @internal */
export declare const MaterialBundleInput$outboundSchema: z.ZodType<MaterialBundleInput$Outbound, z.ZodTypeDef, MaterialBundleInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaterialBundleInput$ {
    /** @deprecated use `MaterialBundleInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MaterialBundleInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `MaterialBundleInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MaterialBundleInput$Outbound, z.ZodTypeDef, MaterialBundleInput>;
    /** @deprecated use `MaterialBundleInput$Outbound` instead. */
    type Outbound = MaterialBundleInput$Outbound;
}
export declare function materialBundleInputToJSON(materialBundleInput: MaterialBundleInput): string;
export declare function materialBundleInputFromJSON(jsonString: string): SafeParseResult<MaterialBundleInput, SDKValidationError>;
//# sourceMappingURL=materialbundle.d.ts.map