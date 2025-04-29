import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteTasksRequest = {
    /**
     * UUID of the Task
     */
    uuid: string;
};
export type DeleteTasksResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteTasksRequest$inboundSchema: z.ZodType<DeleteTasksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTasksRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteTasksRequest$outboundSchema: z.ZodType<DeleteTasksRequest$Outbound, z.ZodTypeDef, DeleteTasksRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteTasksRequest$ {
    /** @deprecated use `DeleteTasksRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteTasksRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteTasksRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteTasksRequest$Outbound, z.ZodTypeDef, DeleteTasksRequest>;
    /** @deprecated use `DeleteTasksRequest$Outbound` instead. */
    type Outbound = DeleteTasksRequest$Outbound;
}
export declare function deleteTasksRequestToJSON(deleteTasksRequest: DeleteTasksRequest): string;
export declare function deleteTasksRequestFromJSON(jsonString: string): SafeParseResult<DeleteTasksRequest, SDKValidationError>;
/** @internal */
export declare const DeleteTasksResponse$inboundSchema: z.ZodType<DeleteTasksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTasksResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteTasksResponse$outboundSchema: z.ZodType<DeleteTasksResponse$Outbound, z.ZodTypeDef, DeleteTasksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteTasksResponse$ {
    /** @deprecated use `DeleteTasksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteTasksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteTasksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteTasksResponse$Outbound, z.ZodTypeDef, DeleteTasksResponse>;
    /** @deprecated use `DeleteTasksResponse$Outbound` instead. */
    type Outbound = DeleteTasksResponse$Outbound;
}
export declare function deleteTasksResponseToJSON(deleteTasksResponse: DeleteTasksResponse): string;
export declare function deleteTasksResponseFromJSON(jsonString: string): SafeParseResult<DeleteTasksResponse, SDKValidationError>;
//# sourceMappingURL=deletetasks.d.ts.map