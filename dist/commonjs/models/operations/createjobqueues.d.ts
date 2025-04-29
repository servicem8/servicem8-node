import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobQueuesResponseResult = components.Result | components.ErrorT;
export type CreateJobQueuesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobQueuesResponseResult$inboundSchema: z.ZodType<CreateJobQueuesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobQueuesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobQueuesResponseResult$outboundSchema: z.ZodType<CreateJobQueuesResponseResult$Outbound, z.ZodTypeDef, CreateJobQueuesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobQueuesResponseResult$ {
    /** @deprecated use `CreateJobQueuesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobQueuesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobQueuesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobQueuesResponseResult$Outbound, z.ZodTypeDef, CreateJobQueuesResponseResult>;
    /** @deprecated use `CreateJobQueuesResponseResult$Outbound` instead. */
    type Outbound = CreateJobQueuesResponseResult$Outbound;
}
export declare function createJobQueuesResponseResultToJSON(createJobQueuesResponseResult: CreateJobQueuesResponseResult): string;
export declare function createJobQueuesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobQueuesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobQueuesResponse$inboundSchema: z.ZodType<CreateJobQueuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobQueuesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobQueuesResponse$outboundSchema: z.ZodType<CreateJobQueuesResponse$Outbound, z.ZodTypeDef, CreateJobQueuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobQueuesResponse$ {
    /** @deprecated use `CreateJobQueuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobQueuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobQueuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobQueuesResponse$Outbound, z.ZodTypeDef, CreateJobQueuesResponse>;
    /** @deprecated use `CreateJobQueuesResponse$Outbound` instead. */
    type Outbound = CreateJobQueuesResponse$Outbound;
}
export declare function createJobQueuesResponseToJSON(createJobQueuesResponse: CreateJobQueuesResponse): string;
export declare function createJobQueuesResponseFromJSON(jsonString: string): SafeParseResult<CreateJobQueuesResponse, SDKValidationError>;
//# sourceMappingURL=createjobqueues.d.ts.map