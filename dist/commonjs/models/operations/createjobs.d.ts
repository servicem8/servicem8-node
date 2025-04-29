import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobsResponseResult = components.Result | components.ErrorT;
export type CreateJobsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobsResponseResult$inboundSchema: z.ZodType<CreateJobsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobsResponseResult$outboundSchema: z.ZodType<CreateJobsResponseResult$Outbound, z.ZodTypeDef, CreateJobsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobsResponseResult$ {
    /** @deprecated use `CreateJobsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobsResponseResult$Outbound, z.ZodTypeDef, CreateJobsResponseResult>;
    /** @deprecated use `CreateJobsResponseResult$Outbound` instead. */
    type Outbound = CreateJobsResponseResult$Outbound;
}
export declare function createJobsResponseResultToJSON(createJobsResponseResult: CreateJobsResponseResult): string;
export declare function createJobsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobsResponse$inboundSchema: z.ZodType<CreateJobsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobsResponse$outboundSchema: z.ZodType<CreateJobsResponse$Outbound, z.ZodTypeDef, CreateJobsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobsResponse$ {
    /** @deprecated use `CreateJobsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobsResponse$Outbound, z.ZodTypeDef, CreateJobsResponse>;
    /** @deprecated use `CreateJobsResponse$Outbound` instead. */
    type Outbound = CreateJobsResponse$Outbound;
}
export declare function createJobsResponseToJSON(createJobsResponse: CreateJobsResponse): string;
export declare function createJobsResponseFromJSON(jsonString: string): SafeParseResult<CreateJobsResponse, SDKValidationError>;
//# sourceMappingURL=createjobs.d.ts.map