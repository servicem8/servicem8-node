import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobQueuesRequest = {
    /**
     * UUID of the Job Queue
     */
    uuid: string;
    /**
     * Job Queue fields to update
     */
    queue: components.QueueInput;
};
export type UpdateJobQueuesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobQueuesRequest$inboundSchema: z.ZodType<UpdateJobQueuesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobQueuesRequest$Outbound = {
    uuid: string;
    Queue: components.QueueInput$Outbound;
};
/** @internal */
export declare const UpdateJobQueuesRequest$outboundSchema: z.ZodType<UpdateJobQueuesRequest$Outbound, z.ZodTypeDef, UpdateJobQueuesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobQueuesRequest$ {
    /** @deprecated use `UpdateJobQueuesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobQueuesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobQueuesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobQueuesRequest$Outbound, z.ZodTypeDef, UpdateJobQueuesRequest>;
    /** @deprecated use `UpdateJobQueuesRequest$Outbound` instead. */
    type Outbound = UpdateJobQueuesRequest$Outbound;
}
export declare function updateJobQueuesRequestToJSON(updateJobQueuesRequest: UpdateJobQueuesRequest): string;
export declare function updateJobQueuesRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobQueuesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobQueuesResponse$inboundSchema: z.ZodType<UpdateJobQueuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobQueuesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobQueuesResponse$outboundSchema: z.ZodType<UpdateJobQueuesResponse$Outbound, z.ZodTypeDef, UpdateJobQueuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobQueuesResponse$ {
    /** @deprecated use `UpdateJobQueuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobQueuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobQueuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobQueuesResponse$Outbound, z.ZodTypeDef, UpdateJobQueuesResponse>;
    /** @deprecated use `UpdateJobQueuesResponse$Outbound` instead. */
    type Outbound = UpdateJobQueuesResponse$Outbound;
}
export declare function updateJobQueuesResponseToJSON(updateJobQueuesResponse: UpdateJobQueuesResponse): string;
export declare function updateJobQueuesResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobQueuesResponse, SDKValidationError>;
//# sourceMappingURL=updatejobqueues.d.ts.map