import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateTasksResponseResult = components.Result | components.ErrorT;
export type CreateTasksResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateTasksResponseResult$inboundSchema: z.ZodType<CreateTasksResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateTasksResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateTasksResponseResult$outboundSchema: z.ZodType<CreateTasksResponseResult$Outbound, z.ZodTypeDef, CreateTasksResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateTasksResponseResult$ {
    /** @deprecated use `CreateTasksResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateTasksResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateTasksResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateTasksResponseResult$Outbound, z.ZodTypeDef, CreateTasksResponseResult>;
    /** @deprecated use `CreateTasksResponseResult$Outbound` instead. */
    type Outbound = CreateTasksResponseResult$Outbound;
}
export declare function createTasksResponseResultToJSON(createTasksResponseResult: CreateTasksResponseResult): string;
export declare function createTasksResponseResultFromJSON(jsonString: string): SafeParseResult<CreateTasksResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateTasksResponse$inboundSchema: z.ZodType<CreateTasksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateTasksResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateTasksResponse$outboundSchema: z.ZodType<CreateTasksResponse$Outbound, z.ZodTypeDef, CreateTasksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateTasksResponse$ {
    /** @deprecated use `CreateTasksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateTasksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateTasksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateTasksResponse$Outbound, z.ZodTypeDef, CreateTasksResponse>;
    /** @deprecated use `CreateTasksResponse$Outbound` instead. */
    type Outbound = CreateTasksResponse$Outbound;
}
export declare function createTasksResponseToJSON(createTasksResponse: CreateTasksResponse): string;
export declare function createTasksResponseFromJSON(jsonString: string): SafeParseResult<CreateTasksResponse, SDKValidationError>;
//# sourceMappingURL=createtasks.d.ts.map