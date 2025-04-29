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
export declare const VendorActive: {
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
export type VendorActive = ClosedEnum<typeof VendorActive>;
export type Vendor = {
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
    active?: VendorActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    /**
     * Company Name
     */
    name: string;
    /**
     * Company ABN Number (Australian Accounts Only)
     */
    abnNumber?: string | undefined;
    businessNumber?: string | undefined;
    /**
     * Company Website address
     */
    website?: string | undefined;
    email?: string | undefined;
    emailAccounts?: string | undefined;
    billingAddress?: string | undefined;
    acceptedPaymentMethods?: string | undefined;
    defaultRegion?: string | undefined;
    currency?: string | undefined;
    openingTimeMonday?: string | undefined;
    closingTimeMonday?: string | undefined;
    openingTimeTuesday?: string | undefined;
    closingTimeTuesday?: string | undefined;
    openingTimeWednesday?: string | undefined;
    closingTimeWednesday?: string | undefined;
    openingTimeThursday?: string | undefined;
    closingTimeThursday?: string | undefined;
    openingTimeFriday?: string | undefined;
    closingTimeFriday?: string | undefined;
    openingTimeSaturday?: string | undefined;
    closingTimeSaturday?: string | undefined;
    openingTimeSunday?: string | undefined;
    closingTimeSunday?: string | undefined;
    timezoneName?: string | undefined;
    invoiceTerms?: string | undefined;
    jobDefaultStatus?: string | undefined;
};
export type VendorInput = {
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
    active?: VendorActive | undefined;
    /**
     * Company Name
     */
    name: string;
    /**
     * Company ABN Number (Australian Accounts Only)
     */
    abnNumber?: string | undefined;
    businessNumber?: string | undefined;
    /**
     * Company Website address
     */
    website?: string | undefined;
    email?: string | undefined;
    emailAccounts?: string | undefined;
    billingAddress?: string | undefined;
    acceptedPaymentMethods?: string | undefined;
    defaultRegion?: string | undefined;
    currency?: string | undefined;
    openingTimeMonday?: string | undefined;
    closingTimeMonday?: string | undefined;
    openingTimeTuesday?: string | undefined;
    closingTimeTuesday?: string | undefined;
    openingTimeWednesday?: string | undefined;
    closingTimeWednesday?: string | undefined;
    openingTimeThursday?: string | undefined;
    closingTimeThursday?: string | undefined;
    openingTimeFriday?: string | undefined;
    closingTimeFriday?: string | undefined;
    openingTimeSaturday?: string | undefined;
    closingTimeSaturday?: string | undefined;
    openingTimeSunday?: string | undefined;
    closingTimeSunday?: string | undefined;
    timezoneName?: string | undefined;
    invoiceTerms?: string | undefined;
    jobDefaultStatus?: string | undefined;
};
/** @internal */
export declare const VendorActive$inboundSchema: z.ZodNativeEnum<typeof VendorActive>;
/** @internal */
export declare const VendorActive$outboundSchema: z.ZodNativeEnum<typeof VendorActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VendorActive$ {
    /** @deprecated use `VendorActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `VendorActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Vendor$inboundSchema: z.ZodType<Vendor, z.ZodTypeDef, unknown>;
/** @internal */
export type Vendor$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    abn_number?: string | undefined;
    business_number?: string | undefined;
    website?: string | undefined;
    email?: string | undefined;
    email_accounts?: string | undefined;
    billing_address?: string | undefined;
    accepted_payment_methods?: string | undefined;
    default_region?: string | undefined;
    currency?: string | undefined;
    opening_time_monday?: string | undefined;
    closing_time_monday?: string | undefined;
    opening_time_tuesday?: string | undefined;
    closing_time_tuesday?: string | undefined;
    opening_time_wednesday?: string | undefined;
    closing_time_wednesday?: string | undefined;
    opening_time_thursday?: string | undefined;
    closing_time_thursday?: string | undefined;
    opening_time_friday?: string | undefined;
    closing_time_friday?: string | undefined;
    opening_time_saturday?: string | undefined;
    closing_time_saturday?: string | undefined;
    opening_time_sunday?: string | undefined;
    closing_time_sunday?: string | undefined;
    timezone_name?: string | undefined;
    invoice_terms?: string | undefined;
    job_default_status?: string | undefined;
};
/** @internal */
export declare const Vendor$outboundSchema: z.ZodType<Vendor$Outbound, z.ZodTypeDef, Vendor>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Vendor$ {
    /** @deprecated use `Vendor$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Vendor, z.ZodTypeDef, unknown>;
    /** @deprecated use `Vendor$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Vendor$Outbound, z.ZodTypeDef, Vendor>;
    /** @deprecated use `Vendor$Outbound` instead. */
    type Outbound = Vendor$Outbound;
}
export declare function vendorToJSON(vendor: Vendor): string;
export declare function vendorFromJSON(jsonString: string): SafeParseResult<Vendor, SDKValidationError>;
/** @internal */
export declare const VendorInput$inboundSchema: z.ZodType<VendorInput, z.ZodTypeDef, unknown>;
/** @internal */
export type VendorInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    abn_number?: string | undefined;
    business_number?: string | undefined;
    website?: string | undefined;
    email?: string | undefined;
    email_accounts?: string | undefined;
    billing_address?: string | undefined;
    accepted_payment_methods?: string | undefined;
    default_region?: string | undefined;
    currency?: string | undefined;
    opening_time_monday?: string | undefined;
    closing_time_monday?: string | undefined;
    opening_time_tuesday?: string | undefined;
    closing_time_tuesday?: string | undefined;
    opening_time_wednesday?: string | undefined;
    closing_time_wednesday?: string | undefined;
    opening_time_thursday?: string | undefined;
    closing_time_thursday?: string | undefined;
    opening_time_friday?: string | undefined;
    closing_time_friday?: string | undefined;
    opening_time_saturday?: string | undefined;
    closing_time_saturday?: string | undefined;
    opening_time_sunday?: string | undefined;
    closing_time_sunday?: string | undefined;
    timezone_name?: string | undefined;
    invoice_terms?: string | undefined;
    job_default_status?: string | undefined;
};
/** @internal */
export declare const VendorInput$outboundSchema: z.ZodType<VendorInput$Outbound, z.ZodTypeDef, VendorInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VendorInput$ {
    /** @deprecated use `VendorInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VendorInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `VendorInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VendorInput$Outbound, z.ZodTypeDef, VendorInput>;
    /** @deprecated use `VendorInput$Outbound` instead. */
    type Outbound = VendorInput$Outbound;
}
export declare function vendorInputToJSON(vendorInput: VendorInput): string;
export declare function vendorInputFromJSON(jsonString: string): SafeParseResult<VendorInput, SDKValidationError>;
//# sourceMappingURL=vendor.d.ts.map