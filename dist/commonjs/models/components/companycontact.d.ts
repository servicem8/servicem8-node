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
export declare const CompanyContactActive: {
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
export type CompanyContactActive = ClosedEnum<typeof CompanyContactActive>;
export type CompanyContact = {
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
    active?: CompanyContactActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    companyUuid?: string | undefined;
    first?: string | undefined;
    last?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    type?: string | undefined;
    isPrimaryContact?: string | undefined;
};
export type CompanyContactInput = {
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
    active?: CompanyContactActive | undefined;
    companyUuid?: string | undefined;
    first?: string | undefined;
    last?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    type?: string | undefined;
    isPrimaryContact?: string | undefined;
};
/** @internal */
export declare const CompanyContactActive$inboundSchema: z.ZodNativeEnum<typeof CompanyContactActive>;
/** @internal */
export declare const CompanyContactActive$outboundSchema: z.ZodNativeEnum<typeof CompanyContactActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyContactActive$ {
    /** @deprecated use `CompanyContactActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `CompanyContactActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const CompanyContact$inboundSchema: z.ZodType<CompanyContact, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyContact$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    company_uuid?: string | undefined;
    first?: string | undefined;
    last?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    type?: string | undefined;
    is_primary_contact?: string | undefined;
};
/** @internal */
export declare const CompanyContact$outboundSchema: z.ZodType<CompanyContact$Outbound, z.ZodTypeDef, CompanyContact>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyContact$ {
    /** @deprecated use `CompanyContact$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyContact, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyContact$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyContact$Outbound, z.ZodTypeDef, CompanyContact>;
    /** @deprecated use `CompanyContact$Outbound` instead. */
    type Outbound = CompanyContact$Outbound;
}
export declare function companyContactToJSON(companyContact: CompanyContact): string;
export declare function companyContactFromJSON(jsonString: string): SafeParseResult<CompanyContact, SDKValidationError>;
/** @internal */
export declare const CompanyContactInput$inboundSchema: z.ZodType<CompanyContactInput, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyContactInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    company_uuid?: string | undefined;
    first?: string | undefined;
    last?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    type?: string | undefined;
    is_primary_contact?: string | undefined;
};
/** @internal */
export declare const CompanyContactInput$outboundSchema: z.ZodType<CompanyContactInput$Outbound, z.ZodTypeDef, CompanyContactInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyContactInput$ {
    /** @deprecated use `CompanyContactInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyContactInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyContactInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyContactInput$Outbound, z.ZodTypeDef, CompanyContactInput>;
    /** @deprecated use `CompanyContactInput$Outbound` instead. */
    type Outbound = CompanyContactInput$Outbound;
}
export declare function companyContactInputToJSON(companyContactInput: CompanyContactInput): string;
export declare function companyContactInputFromJSON(jsonString: string): SafeParseResult<CompanyContactInput, SDKValidationError>;
//# sourceMappingURL=companycontact.d.ts.map