import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobQueuesRequest = {
    /**
     * UUID of the Job Queue
     */
    uuid: string;
};
export type DeleteJobQueuesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobQueuesRequest$inboundSchema: z.ZodType<DeleteJobQueuesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobQueuesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobQueuesRequest$outboundSchema: z.ZodType<DeleteJobQueuesRequest$Outbound, z.ZodTypeDef, DeleteJobQueuesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobQueuesRequest$ {
    /** @deprecated use `DeleteJobQueuesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobQueuesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobQueuesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobQueuesRequest$Outbound, z.ZodTypeDef, DeleteJobQueuesRequest>;
    /** @deprecated use `DeleteJobQueuesRequest$Outbound` instead. */
    type Outbound = DeleteJobQueuesRequest$Outbound;
}
export declare function deleteJobQueuesRequestToJSON(deleteJobQueuesRequest: DeleteJobQueuesRequest): string;
export declare function deleteJobQueuesRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobQueuesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobQueuesResponse$inboundSchema: z.ZodType<DeleteJobQueuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobQueuesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobQueuesResponse$outboundSchema: z.ZodType<DeleteJobQueuesResponse$Outbound, z.ZodTypeDef, DeleteJobQueuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobQueuesResponse$ {
    /** @deprecated use `DeleteJobQueuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobQueuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobQueuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobQueuesResponse$Outbound, z.ZodTypeDef, DeleteJobQueuesResponse>;
    /** @deprecated use `DeleteJobQueuesResponse$Outbound` instead. */
    type Outbound = DeleteJobQueuesResponse$Outbound;
}
export declare function deleteJobQueuesResponseToJSON(deleteJobQueuesResponse: DeleteJobQueuesResponse): string;
export declare function deleteJobQueuesResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobQueuesResponse, SDKValidationError>;
//# sourceMappingURL=deletejobqueues.d.ts.map