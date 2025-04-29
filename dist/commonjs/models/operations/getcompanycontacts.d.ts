import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCompanyContactsRequest = {
    /**
     * UUID of the Company Contact
     */
    uuid: string;
};
export type GetCompanyContactsResponse = components.ErrorT | components.CompanyContact;
/** @internal */
export declare const GetCompanyContactsRequest$inboundSchema: z.ZodType<GetCompanyContactsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompanyContactsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetCompanyContactsRequest$outboundSchema: z.ZodType<GetCompanyContactsRequest$Outbound, z.ZodTypeDef, GetCompanyContactsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompanyContactsRequest$ {
    /** @deprecated use `GetCompanyContactsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompanyContactsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompanyContactsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompanyContactsRequest$Outbound, z.ZodTypeDef, GetCompanyContactsRequest>;
    /** @deprecated use `GetCompanyContactsRequest$Outbound` instead. */
    type Outbound = GetCompanyContactsRequest$Outbound;
}
export declare function getCompanyContactsRequestToJSON(getCompanyContactsRequest: GetCompanyContactsRequest): string;
export declare function getCompanyContactsRequestFromJSON(jsonString: string): SafeParseResult<GetCompanyContactsRequest, SDKValidationError>;
/** @internal */
export declare const GetCompanyContactsResponse$inboundSchema: z.ZodType<GetCompanyContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompanyContactsResponse$Outbound = components.ErrorT$Outbound | components.CompanyContact$Outbound;
/** @internal */
export declare const GetCompanyContactsResponse$outboundSchema: z.ZodType<GetCompanyContactsResponse$Outbound, z.ZodTypeDef, GetCompanyContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompanyContactsResponse$ {
    /** @deprecated use `GetCompanyContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompanyContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompanyContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompanyContactsResponse$Outbound, z.ZodTypeDef, GetCompanyContactsResponse>;
    /** @deprecated use `GetCompanyContactsResponse$Outbound` instead. */
    type Outbound = GetCompanyContactsResponse$Outbound;
}
export declare function getCompanyContactsResponseToJSON(getCompanyContactsResponse: GetCompanyContactsResponse): string;
export declare function getCompanyContactsResponseFromJSON(jsonString: string): SafeParseResult<GetCompanyContactsResponse, SDKValidationError>;
//# sourceMappingURL=getcompanycontacts.d.ts.map