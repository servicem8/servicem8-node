import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobContactsRequest = {
    /**
     * UUID of the Job Contact
     */
    uuid: string;
};
export type GetJobContactsResponse = components.ErrorT | components.JobContact;
/** @internal */
export declare const GetJobContactsRequest$inboundSchema: z.ZodType<GetJobContactsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobContactsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobContactsRequest$outboundSchema: z.ZodType<GetJobContactsRequest$Outbound, z.ZodTypeDef, GetJobContactsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobContactsRequest$ {
    /** @deprecated use `GetJobContactsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobContactsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobContactsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobContactsRequest$Outbound, z.ZodTypeDef, GetJobContactsRequest>;
    /** @deprecated use `GetJobContactsRequest$Outbound` instead. */
    type Outbound = GetJobContactsRequest$Outbound;
}
export declare function getJobContactsRequestToJSON(getJobContactsRequest: GetJobContactsRequest): string;
export declare function getJobContactsRequestFromJSON(jsonString: string): SafeParseResult<GetJobContactsRequest, SDKValidationError>;
/** @internal */
export declare const GetJobContactsResponse$inboundSchema: z.ZodType<GetJobContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobContactsResponse$Outbound = components.ErrorT$Outbound | components.JobContact$Outbound;
/** @internal */
export declare const GetJobContactsResponse$outboundSchema: z.ZodType<GetJobContactsResponse$Outbound, z.ZodTypeDef, GetJobContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobContactsResponse$ {
    /** @deprecated use `GetJobContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobContactsResponse$Outbound, z.ZodTypeDef, GetJobContactsResponse>;
    /** @deprecated use `GetJobContactsResponse$Outbound` instead. */
    type Outbound = GetJobContactsResponse$Outbound;
}
export declare function getJobContactsResponseToJSON(getJobContactsResponse: GetJobContactsResponse): string;
export declare function getJobContactsResponseFromJSON(jsonString: string): SafeParseResult<GetJobContactsResponse, SDKValidationError>;
//# sourceMappingURL=getjobcontacts.d.ts.map