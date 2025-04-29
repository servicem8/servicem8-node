import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobsRequest = {
    /**
     * UUID of the Job
     */
    uuid: string;
};
export type GetJobsResponse = components.ErrorT | components.Job;
/** @internal */
export declare const GetJobsRequest$inboundSchema: z.ZodType<GetJobsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobsRequest$outboundSchema: z.ZodType<GetJobsRequest$Outbound, z.ZodTypeDef, GetJobsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobsRequest$ {
    /** @deprecated use `GetJobsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobsRequest$Outbound, z.ZodTypeDef, GetJobsRequest>;
    /** @deprecated use `GetJobsRequest$Outbound` instead. */
    type Outbound = GetJobsRequest$Outbound;
}
export declare function getJobsRequestToJSON(getJobsRequest: GetJobsRequest): string;
export declare function getJobsRequestFromJSON(jsonString: string): SafeParseResult<GetJobsRequest, SDKValidationError>;
/** @internal */
export declare const GetJobsResponse$inboundSchema: z.ZodType<GetJobsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobsResponse$Outbound = components.ErrorT$Outbound | components.Job$Outbound;
/** @internal */
export declare const GetJobsResponse$outboundSchema: z.ZodType<GetJobsResponse$Outbound, z.ZodTypeDef, GetJobsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobsResponse$ {
    /** @deprecated use `GetJobsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobsResponse$Outbound, z.ZodTypeDef, GetJobsResponse>;
    /** @deprecated use `GetJobsResponse$Outbound` instead. */
    type Outbound = GetJobsResponse$Outbound;
}
export declare function getJobsResponseToJSON(getJobsResponse: GetJobsResponse): string;
export declare function getJobsResponseFromJSON(jsonString: string): SafeParseResult<GetJobsResponse, SDKValidationError>;
//# sourceMappingURL=getjobs.d.ts.map