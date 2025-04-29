import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteCompanyContactsRequest = {
    /**
     * UUID of the Company Contact
     */
    uuid: string;
};
export type DeleteCompanyContactsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteCompanyContactsRequest$inboundSchema: z.ZodType<DeleteCompanyContactsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteCompanyContactsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteCompanyContactsRequest$outboundSchema: z.ZodType<DeleteCompanyContactsRequest$Outbound, z.ZodTypeDef, DeleteCompanyContactsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteCompanyContactsRequest$ {
    /** @deprecated use `DeleteCompanyContactsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteCompanyContactsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteCompanyContactsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteCompanyContactsRequest$Outbound, z.ZodTypeDef, DeleteCompanyContactsRequest>;
    /** @deprecated use `DeleteCompanyContactsRequest$Outbound` instead. */
    type Outbound = DeleteCompanyContactsRequest$Outbound;
}
export declare function deleteCompanyContactsRequestToJSON(deleteCompanyContactsRequest: DeleteCompanyContactsRequest): string;
export declare function deleteCompanyContactsRequestFromJSON(jsonString: string): SafeParseResult<DeleteCompanyContactsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteCompanyContactsResponse$inboundSchema: z.ZodType<DeleteCompanyContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteCompanyContactsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteCompanyContactsResponse$outboundSchema: z.ZodType<DeleteCompanyContactsResponse$Outbound, z.ZodTypeDef, DeleteCompanyContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteCompanyContactsResponse$ {
    /** @deprecated use `DeleteCompanyContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteCompanyContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteCompanyContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteCompanyContactsResponse$Outbound, z.ZodTypeDef, DeleteCompanyContactsResponse>;
    /** @deprecated use `DeleteCompanyContactsResponse$Outbound` instead. */
    type Outbound = DeleteCompanyContactsResponse$Outbound;
}
export declare function deleteCompanyContactsResponseToJSON(deleteCompanyContactsResponse: DeleteCompanyContactsResponse): string;
export declare function deleteCompanyContactsResponseFromJSON(jsonString: string): SafeParseResult<DeleteCompanyContactsResponse, SDKValidationError>;
//# sourceMappingURL=deletecompanycontacts.d.ts.map