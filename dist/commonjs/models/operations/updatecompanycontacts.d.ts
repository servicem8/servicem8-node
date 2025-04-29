import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateCompanyContactsRequest = {
    /**
     * UUID of the Company Contact
     */
    uuid: string;
    /**
     * Company Contact fields to update
     */
    companyContact: components.CompanyContactInput;
};
export type UpdateCompanyContactsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateCompanyContactsRequest$inboundSchema: z.ZodType<UpdateCompanyContactsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCompanyContactsRequest$Outbound = {
    uuid: string;
    CompanyContact: components.CompanyContactInput$Outbound;
};
/** @internal */
export declare const UpdateCompanyContactsRequest$outboundSchema: z.ZodType<UpdateCompanyContactsRequest$Outbound, z.ZodTypeDef, UpdateCompanyContactsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateCompanyContactsRequest$ {
    /** @deprecated use `UpdateCompanyContactsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateCompanyContactsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateCompanyContactsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateCompanyContactsRequest$Outbound, z.ZodTypeDef, UpdateCompanyContactsRequest>;
    /** @deprecated use `UpdateCompanyContactsRequest$Outbound` instead. */
    type Outbound = UpdateCompanyContactsRequest$Outbound;
}
export declare function updateCompanyContactsRequestToJSON(updateCompanyContactsRequest: UpdateCompanyContactsRequest): string;
export declare function updateCompanyContactsRequestFromJSON(jsonString: string): SafeParseResult<UpdateCompanyContactsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateCompanyContactsResponse$inboundSchema: z.ZodType<UpdateCompanyContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateCompanyContactsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateCompanyContactsResponse$outboundSchema: z.ZodType<UpdateCompanyContactsResponse$Outbound, z.ZodTypeDef, UpdateCompanyContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateCompanyContactsResponse$ {
    /** @deprecated use `UpdateCompanyContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateCompanyContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateCompanyContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateCompanyContactsResponse$Outbound, z.ZodTypeDef, UpdateCompanyContactsResponse>;
    /** @deprecated use `UpdateCompanyContactsResponse$Outbound` instead. */
    type Outbound = UpdateCompanyContactsResponse$Outbound;
}
export declare function updateCompanyContactsResponseToJSON(updateCompanyContactsResponse: UpdateCompanyContactsResponse): string;
export declare function updateCompanyContactsResponseFromJSON(jsonString: string): SafeParseResult<UpdateCompanyContactsResponse, SDKValidationError>;
//# sourceMappingURL=updatecompanycontacts.d.ts.map