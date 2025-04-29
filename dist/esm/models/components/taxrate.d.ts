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
export declare const TaxRateActive: {
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
export type TaxRateActive = ClosedEnum<typeof TaxRateActive>;
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const IsDefaultTaxRate: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * @remarks
 *
 * Valid values are [0,1]
 */
export type IsDefaultTaxRate = ClosedEnum<typeof IsDefaultTaxRate>;
export type TaxRate = {
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
    active?: TaxRateActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name: string;
    amount?: string | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    isDefaultTaxRate?: IsDefaultTaxRate | undefined;
};
export type TaxRateInput = {
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
    active?: TaxRateActive | undefined;
    name: string;
    amount?: string | undefined;
    /**
     * @remarks
     *
     * Valid values are [0,1]
     */
    isDefaultTaxRate?: IsDefaultTaxRate | undefined;
};
/** @internal */
export declare const TaxRateActive$inboundSchema: z.ZodNativeEnum<typeof TaxRateActive>;
/** @internal */
export declare const TaxRateActive$outboundSchema: z.ZodNativeEnum<typeof TaxRateActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRateActive$ {
    /** @deprecated use `TaxRateActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `TaxRateActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const IsDefaultTaxRate$inboundSchema: z.ZodNativeEnum<typeof IsDefaultTaxRate>;
/** @internal */
export declare const IsDefaultTaxRate$outboundSchema: z.ZodNativeEnum<typeof IsDefaultTaxRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IsDefaultTaxRate$ {
    /** @deprecated use `IsDefaultTaxRate$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `IsDefaultTaxRate$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const TaxRate$inboundSchema: z.ZodType<TaxRate, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRate$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    amount?: string | undefined;
    is_default_tax_rate?: number | undefined;
};
/** @internal */
export declare const TaxRate$outboundSchema: z.ZodType<TaxRate$Outbound, z.ZodTypeDef, TaxRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRate$ {
    /** @deprecated use `TaxRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRate$Outbound, z.ZodTypeDef, TaxRate>;
    /** @deprecated use `TaxRate$Outbound` instead. */
    type Outbound = TaxRate$Outbound;
}
export declare function taxRateToJSON(taxRate: TaxRate): string;
export declare function taxRateFromJSON(jsonString: string): SafeParseResult<TaxRate, SDKValidationError>;
/** @internal */
export declare const TaxRateInput$inboundSchema: z.ZodType<TaxRateInput, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRateInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    amount?: string | undefined;
    is_default_tax_rate?: number | undefined;
};
/** @internal */
export declare const TaxRateInput$outboundSchema: z.ZodType<TaxRateInput$Outbound, z.ZodTypeDef, TaxRateInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRateInput$ {
    /** @deprecated use `TaxRateInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRateInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRateInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRateInput$Outbound, z.ZodTypeDef, TaxRateInput>;
    /** @deprecated use `TaxRateInput$Outbound` instead. */
    type Outbound = TaxRateInput$Outbound;
}
export declare function taxRateInputToJSON(taxRateInput: TaxRateInput): string;
export declare function taxRateInputFromJSON(jsonString: string): SafeParseResult<TaxRateInput, SDKValidationError>;
//# sourceMappingURL=taxrate.d.ts.map