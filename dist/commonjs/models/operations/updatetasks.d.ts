import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateTasksRequest = {
    /**
     * UUID of the Task
     */
    uuid: string;
    /**
     * Task fields to update
     */
    task: components.TaskInput;
};
export type UpdateTasksResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateTasksRequest$inboundSchema: z.ZodType<UpdateTasksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTasksRequest$Outbound = {
    uuid: string;
    Task: components.TaskInput$Outbound;
};
/** @internal */
export declare const UpdateTasksRequest$outboundSchema: z.ZodType<UpdateTasksRequest$Outbound, z.ZodTypeDef, UpdateTasksRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateTasksRequest$ {
    /** @deprecated use `UpdateTasksRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateTasksRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateTasksRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateTasksRequest$Outbound, z.ZodTypeDef, UpdateTasksRequest>;
    /** @deprecated use `UpdateTasksRequest$Outbound` instead. */
    type Outbound = UpdateTasksRequest$Outbound;
}
export declare function updateTasksRequestToJSON(updateTasksRequest: UpdateTasksRequest): string;
export declare function updateTasksRequestFromJSON(jsonString: string): SafeParseResult<UpdateTasksRequest, SDKValidationError>;
/** @internal */
export declare const UpdateTasksResponse$inboundSchema: z.ZodType<UpdateTasksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTasksResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateTasksResponse$outboundSchema: z.ZodType<UpdateTasksResponse$Outbound, z.ZodTypeDef, UpdateTasksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateTasksResponse$ {
    /** @deprecated use `UpdateTasksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateTasksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateTasksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateTasksResponse$Outbound, z.ZodTypeDef, UpdateTasksResponse>;
    /** @deprecated use `UpdateTasksResponse$Outbound` instead. */
    type Outbound = UpdateTasksResponse$Outbound;
}
export declare function updateTasksResponseToJSON(updateTasksResponse: UpdateTasksResponse): string;
export declare function updateTasksResponseFromJSON(jsonString: string): SafeParseResult<UpdateTasksResponse, SDKValidationError>;
//# sourceMappingURL=updatetasks.d.ts.map