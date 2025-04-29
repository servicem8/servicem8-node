import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobsRequest = {
    /**
     * UUID of the Job
     */
    uuid: string;
};
export type DeleteJobsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobsRequest$inboundSchema: z.ZodType<DeleteJobsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobsRequest$outboundSchema: z.ZodType<DeleteJobsRequest$Outbound, z.ZodTypeDef, DeleteJobsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobsRequest$ {
    /** @deprecated use `DeleteJobsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobsRequest$Outbound, z.ZodTypeDef, DeleteJobsRequest>;
    /** @deprecated use `DeleteJobsRequest$Outbound` instead. */
    type Outbound = DeleteJobsRequest$Outbound;
}
export declare function deleteJobsRequestToJSON(deleteJobsRequest: DeleteJobsRequest): string;
export declare function deleteJobsRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobsResponse$inboundSchema: z.ZodType<DeleteJobsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobsResponse$outboundSchema: z.ZodType<DeleteJobsResponse$Outbound, z.ZodTypeDef, DeleteJobsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobsResponse$ {
    /** @deprecated use `DeleteJobsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobsResponse$Outbound, z.ZodTypeDef, DeleteJobsResponse>;
    /** @deprecated use `DeleteJobsResponse$Outbound` instead. */
    type Outbound = DeleteJobsResponse$Outbound;
}
export declare function deleteJobsResponseToJSON(deleteJobsResponse: DeleteJobsResponse): string;
export declare function deleteJobsResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobsResponse, SDKValidationError>;
//# sourceMappingURL=deletejobs.d.ts.map