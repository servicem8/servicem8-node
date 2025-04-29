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
export declare const CompanyActive: {
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
export type CompanyActive = ClosedEnum<typeof CompanyActive>;
export type Company = {
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
    active?: CompanyActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    /**
     * Company Name
     */
    name: string;
    website?: string | undefined;
    abnNumber?: string | undefined;
    isIndividual?: string | undefined;
    addressStreet?: string | undefined;
    addressCity?: string | undefined;
    addressState?: string | undefined;
    addressPostcode?: string | undefined;
    addressCountry?: string | undefined;
    faxNumber?: string | undefined;
    /**
     * Password
     */
    address?: string | undefined;
    /**
     * Confirm Password
     */
    billingAddress?: string | undefined;
    badges?: string | undefined;
    taxRateUuid?: string | undefined;
    billingAttention?: string | undefined;
    paymentTerms?: string | undefined;
};
export type CompanyInput = {
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
    active?: CompanyActive | undefined;
    /**
     * Company Name
     */
    name: string;
    website?: string | undefined;
    abnNumber?: string | undefined;
    isIndividual?: string | undefined;
    addressStreet?: string | undefined;
    addressCity?: string | undefined;
    addressState?: string | undefined;
    addressPostcode?: string | undefined;
    addressCountry?: string | undefined;
    faxNumber?: string | undefined;
    /**
     * Password
     */
    address?: string | undefined;
    /**
     * Confirm Password
     */
    billingAddress?: string | undefined;
    badges?: string | undefined;
    taxRateUuid?: string | undefined;
    billingAttention?: string | undefined;
    paymentTerms?: string | undefined;
};
/** @internal */
export declare const CompanyActive$inboundSchema: z.ZodNativeEnum<typeof CompanyActive>;
/** @internal */
export declare const CompanyActive$outboundSchema: z.ZodNativeEnum<typeof CompanyActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyActive$ {
    /** @deprecated use `CompanyActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `CompanyActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Company$inboundSchema: z.ZodType<Company, z.ZodTypeDef, unknown>;
/** @internal */
export type Company$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    website?: string | undefined;
    abn_number?: string | undefined;
    is_individual?: string | undefined;
    address_street?: string | undefined;
    address_city?: string | undefined;
    address_state?: string | undefined;
    address_postcode?: string | undefined;
    address_country?: string | undefined;
    fax_number?: string | undefined;
    address?: string | undefined;
    billing_address?: string | undefined;
    badges?: string | undefined;
    tax_rate_uuid?: string | undefined;
    billing_attention?: string | undefined;
    payment_terms?: string | undefined;
};
/** @internal */
export declare const Company$outboundSchema: z.ZodType<Company$Outbound, z.ZodTypeDef, Company>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Company$ {
    /** @deprecated use `Company$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Company, z.ZodTypeDef, unknown>;
    /** @deprecated use `Company$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Company$Outbound, z.ZodTypeDef, Company>;
    /** @deprecated use `Company$Outbound` instead. */
    type Outbound = Company$Outbound;
}
export declare function companyToJSON(company: Company): string;
export declare function companyFromJSON(jsonString: string): SafeParseResult<Company, SDKValidationError>;
/** @internal */
export declare const CompanyInput$inboundSchema: z.ZodType<CompanyInput, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    website?: string | undefined;
    abn_number?: string | undefined;
    is_individual?: string | undefined;
    address_street?: string | undefined;
    address_city?: string | undefined;
    address_state?: string | undefined;
    address_postcode?: string | undefined;
    address_country?: string | undefined;
    fax_number?: string | undefined;
    address?: string | undefined;
    billing_address?: string | undefined;
    badges?: string | undefined;
    tax_rate_uuid?: string | undefined;
    billing_attention?: string | undefined;
    payment_terms?: string | undefined;
};
/** @internal */
export declare const CompanyInput$outboundSchema: z.ZodType<CompanyInput$Outbound, z.ZodTypeDef, CompanyInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyInput$ {
    /** @deprecated use `CompanyInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyInput$Outbound, z.ZodTypeDef, CompanyInput>;
    /** @deprecated use `CompanyInput$Outbound` instead. */
    type Outbound = CompanyInput$Outbound;
}
export declare function companyInputToJSON(companyInput: CompanyInput): string;
export declare function companyInputFromJSON(jsonString: string): SafeParseResult<CompanyInput, SDKValidationError>;
//# sourceMappingURL=company.d.ts.map