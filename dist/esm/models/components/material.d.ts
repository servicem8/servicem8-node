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
export declare const MaterialActive: {
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
export type MaterialActive = ClosedEnum<typeof MaterialActive>;
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const PriceIncludesTaxes: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export type PriceIncludesTaxes = ClosedEnum<typeof PriceIncludesTaxes>;
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const ItemIsInventoried: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export type ItemIsInventoried = ClosedEnum<typeof ItemIsInventoried>;
export type Material = {
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
    active?: MaterialActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name: string;
    itemNumber?: string | undefined;
    price?: string | undefined;
    cost?: string | undefined;
    itemDescription?: string | undefined;
    quantityInStock?: number | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    priceIncludesTaxes?: PriceIncludesTaxes | undefined;
    useDescriptionForInvoicing?: string | undefined;
    taxRateUuid?: string | undefined;
    barcode?: string | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    itemIsInventoried?: ItemIsInventoried | undefined;
};
export type MaterialInput = {
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
    active?: MaterialActive | undefined;
    name: string;
    itemNumber?: string | undefined;
    price?: string | undefined;
    cost?: string | undefined;
    itemDescription?: string | undefined;
    quantityInStock?: number | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    priceIncludesTaxes?: PriceIncludesTaxes | undefined;
    useDescriptionForInvoicing?: string | undefined;
    taxRateUuid?: string | undefined;
    barcode?: string | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    itemIsInventoried?: ItemIsInventoried | undefined;
};
/** @internal */
export declare const MaterialActive$inboundSchema: z.ZodNativeEnum<typeof MaterialActive>;
/** @internal */
export declare const MaterialActive$outboundSchema: z.ZodNativeEnum<typeof MaterialActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaterialActive$ {
    /** @deprecated use `MaterialActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `MaterialActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const PriceIncludesTaxes$inboundSchema: z.ZodNativeEnum<typeof PriceIncludesTaxes>;
/** @internal */
export declare const PriceIncludesTaxes$outboundSchema: z.ZodNativeEnum<typeof PriceIncludesTaxes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriceIncludesTaxes$ {
    /** @deprecated use `PriceIncludesTaxes$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `PriceIncludesTaxes$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const ItemIsInventoried$inboundSchema: z.ZodNativeEnum<typeof ItemIsInventoried>;
/** @internal */
export declare const ItemIsInventoried$outboundSchema: z.ZodNativeEnum<typeof ItemIsInventoried>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ItemIsInventoried$ {
    /** @deprecated use `ItemIsInventoried$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `ItemIsInventoried$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Material$inboundSchema: z.ZodType<Material, z.ZodTypeDef, unknown>;
/** @internal */
export type Material$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    item_number?: string | undefined;
    price?: string | undefined;
    cost?: string | undefined;
    item_description?: string | undefined;
    quantity_in_stock?: number | undefined;
    price_includes_taxes?: number | undefined;
    use_description_for_invoicing?: string | undefined;
    tax_rate_uuid?: string | undefined;
    barcode?: string | undefined;
    item_is_inventoried?: number | undefined;
};
/** @internal */
export declare const Material$outboundSchema: z.ZodType<Material$Outbound, z.ZodTypeDef, Material>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Material$ {
    /** @deprecated use `Material$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Material, z.ZodTypeDef, unknown>;
    /** @deprecated use `Material$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Material$Outbound, z.ZodTypeDef, Material>;
    /** @deprecated use `Material$Outbound` instead. */
    type Outbound = Material$Outbound;
}
export declare function materialToJSON(material: Material): string;
export declare function materialFromJSON(jsonString: string): SafeParseResult<Material, SDKValidationError>;
/** @internal */
export declare const MaterialInput$inboundSchema: z.ZodType<MaterialInput, z.ZodTypeDef, unknown>;
/** @internal */
export type MaterialInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    item_number?: string | undefined;
    price?: string | undefined;
    cost?: string | undefined;
    item_description?: string | undefined;
    quantity_in_stock?: number | undefined;
    price_includes_taxes?: number | undefined;
    use_description_for_invoicing?: string | undefined;
    tax_rate_uuid?: string | undefined;
    barcode?: string | undefined;
    item_is_inventoried?: number | undefined;
};
/** @internal */
export declare const MaterialInput$outboundSchema: z.ZodType<MaterialInput$Outbound, z.ZodTypeDef, MaterialInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaterialInput$ {
    /** @deprecated use `MaterialInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MaterialInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `MaterialInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MaterialInput$Outbound, z.ZodTypeDef, MaterialInput>;
    /** @deprecated use `MaterialInput$Outbound` instead. */
    type Outbound = MaterialInput$Outbound;
}
export declare function materialInputToJSON(materialInput: MaterialInput): string;
export declare function materialInputFromJSON(jsonString: string): SafeParseResult<MaterialInput, SDKValidationError>;
//# sourceMappingURL=material.d.ts.map