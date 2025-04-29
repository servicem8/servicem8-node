import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetTasksRequest = {
    /**
     * UUID of the Task
     */
    uuid: string;
};
export type GetTasksResponse = components.ErrorT | components.Task;
/** @internal */
export declare const GetTasksRequest$inboundSchema: z.ZodType<GetTasksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTasksRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetTasksRequest$outboundSchema: z.ZodType<GetTasksRequest$Outbound, z.ZodTypeDef, GetTasksRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetTasksRequest$ {
    /** @deprecated use `GetTasksRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetTasksRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetTasksRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetTasksRequest$Outbound, z.ZodTypeDef, GetTasksRequest>;
    /** @deprecated use `GetTasksRequest$Outbound` instead. */
    type Outbound = GetTasksRequest$Outbound;
}
export declare function getTasksRequestToJSON(getTasksRequest: GetTasksRequest): string;
export declare function getTasksRequestFromJSON(jsonString: string): SafeParseResult<GetTasksRequest, SDKValidationError>;
/** @internal */
export declare const GetTasksResponse$inboundSchema: z.ZodType<GetTasksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTasksResponse$Outbound = components.ErrorT$Outbound | components.Task$Outbound;
/** @internal */
export declare const GetTasksResponse$outboundSchema: z.ZodType<GetTasksResponse$Outbound, z.ZodTypeDef, GetTasksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetTasksResponse$ {
    /** @deprecated use `GetTasksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetTasksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetTasksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetTasksResponse$Outbound, z.ZodTypeDef, GetTasksResponse>;
    /** @deprecated use `GetTasksResponse$Outbound` instead. */
    type Outbound = GetTasksResponse$Outbound;
}
export declare function getTasksResponseToJSON(getTasksResponse: GetTasksResponse): string;
export declare function getTasksResponseFromJSON(jsonString: string): SafeParseResult<GetTasksResponse, SDKValidationError>;
//# sourceMappingURL=gettasks.d.ts.map