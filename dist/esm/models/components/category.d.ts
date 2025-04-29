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
export declare const CategoryActive: {
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
export type CategoryActive = ClosedEnum<typeof CategoryActive>;
export type Category = {
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
    active?: CategoryActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name: string;
    colour?: string | undefined;
};
export type CategoryInput = {
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
    active?: CategoryActive | undefined;
    name: string;
    colour?: string | undefined;
};
/** @internal */
export declare const CategoryActive$inboundSchema: z.ZodNativeEnum<typeof CategoryActive>;
/** @internal */
export declare const CategoryActive$outboundSchema: z.ZodNativeEnum<typeof CategoryActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CategoryActive$ {
    /** @deprecated use `CategoryActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `CategoryActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Category$inboundSchema: z.ZodType<Category, z.ZodTypeDef, unknown>;
/** @internal */
export type Category$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    colour?: string | undefined;
};
/** @internal */
export declare const Category$outboundSchema: z.ZodType<Category$Outbound, z.ZodTypeDef, Category>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Category$ {
    /** @deprecated use `Category$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Category, z.ZodTypeDef, unknown>;
    /** @deprecated use `Category$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Category$Outbound, z.ZodTypeDef, Category>;
    /** @deprecated use `Category$Outbound` instead. */
    type Outbound = Category$Outbound;
}
export declare function categoryToJSON(category: Category): string;
export declare function categoryFromJSON(jsonString: string): SafeParseResult<Category, SDKValidationError>;
/** @internal */
export declare const CategoryInput$inboundSchema: z.ZodType<CategoryInput, z.ZodTypeDef, unknown>;
/** @internal */
export type CategoryInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    colour?: string | undefined;
};
/** @internal */
export declare const CategoryInput$outboundSchema: z.ZodType<CategoryInput$Outbound, z.ZodTypeDef, CategoryInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CategoryInput$ {
    /** @deprecated use `CategoryInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CategoryInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `CategoryInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CategoryInput$Outbound, z.ZodTypeDef, CategoryInput>;
    /** @deprecated use `CategoryInput$Outbound` instead. */
    type Outbound = CategoryInput$Outbound;
}
export declare function categoryInputToJSON(categoryInput: CategoryInput): string;
export declare function categoryInputFromJSON(jsonString: string): SafeParseResult<CategoryInput, SDKValidationError>;
//# sourceMappingURL=category.d.ts.map