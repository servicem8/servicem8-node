import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobQueuesRequest = {
    /**
     * UUID of the Job Queue
     */
    uuid: string;
};
export type GetJobQueuesResponse = components.ErrorT | components.Queue;
/** @internal */
export declare const GetJobQueuesRequest$inboundSchema: z.ZodType<GetJobQueuesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobQueuesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobQueuesRequest$outboundSchema: z.ZodType<GetJobQueuesRequest$Outbound, z.ZodTypeDef, GetJobQueuesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobQueuesRequest$ {
    /** @deprecated use `GetJobQueuesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobQueuesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobQueuesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobQueuesRequest$Outbound, z.ZodTypeDef, GetJobQueuesRequest>;
    /** @deprecated use `GetJobQueuesRequest$Outbound` instead. */
    type Outbound = GetJobQueuesRequest$Outbound;
}
export declare function getJobQueuesRequestToJSON(getJobQueuesRequest: GetJobQueuesRequest): string;
export declare function getJobQueuesRequestFromJSON(jsonString: string): SafeParseResult<GetJobQueuesRequest, SDKValidationError>;
/** @internal */
export declare const GetJobQueuesResponse$inboundSchema: z.ZodType<GetJobQueuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobQueuesResponse$Outbound = components.ErrorT$Outbound | components.Queue$Outbound;
/** @internal */
export declare const GetJobQueuesResponse$outboundSchema: z.ZodType<GetJobQueuesResponse$Outbound, z.ZodTypeDef, GetJobQueuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobQueuesResponse$ {
    /** @deprecated use `GetJobQueuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobQueuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobQueuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobQueuesResponse$Outbound, z.ZodTypeDef, GetJobQueuesResponse>;
    /** @deprecated use `GetJobQueuesResponse$Outbound` instead. */
    type Outbound = GetJobQueuesResponse$Outbound;
}
export declare function getJobQueuesResponseToJSON(getJobQueuesResponse: GetJobQueuesResponse): string;
export declare function getJobQueuesResponseFromJSON(jsonString: string): SafeParseResult<GetJobQueuesResponse, SDKValidationError>;
//# sourceMappingURL=getjobqueues.d.ts.map