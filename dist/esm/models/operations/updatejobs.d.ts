import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobsRequest = {
    /**
     * UUID of the Job
     */
    uuid: string;
    /**
     * Job fields to update
     */
    job: components.JobInput;
};
export type UpdateJobsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobsRequest$inboundSchema: z.ZodType<UpdateJobsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobsRequest$Outbound = {
    uuid: string;
    Job: components.JobInput$Outbound;
};
/** @internal */
export declare const UpdateJobsRequest$outboundSchema: z.ZodType<UpdateJobsRequest$Outbound, z.ZodTypeDef, UpdateJobsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobsRequest$ {
    /** @deprecated use `UpdateJobsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobsRequest$Outbound, z.ZodTypeDef, UpdateJobsRequest>;
    /** @deprecated use `UpdateJobsRequest$Outbound` instead. */
    type Outbound = UpdateJobsRequest$Outbound;
}
export declare function updateJobsRequestToJSON(updateJobsRequest: UpdateJobsRequest): string;
export declare function updateJobsRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobsResponse$inboundSchema: z.ZodType<UpdateJobsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobsResponse$outboundSchema: z.ZodType<UpdateJobsResponse$Outbound, z.ZodTypeDef, UpdateJobsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobsResponse$ {
    /** @deprecated use `UpdateJobsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobsResponse$Outbound, z.ZodTypeDef, UpdateJobsResponse>;
    /** @deprecated use `UpdateJobsResponse$Outbound` instead. */
    type Outbound = UpdateJobsResponse$Outbound;
}
export declare function updateJobsResponseToJSON(updateJobsResponse: UpdateJobsResponse): string;
export declare function updateJobsResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobsResponse, SDKValidationError>;
//# sourceMappingURL=updatejobs.d.ts.map