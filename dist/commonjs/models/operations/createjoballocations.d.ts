import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobAllocationsResponseResult = components.Result | components.ErrorT;
export type CreateJobAllocationsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobAllocationsResponseResult$inboundSchema: z.ZodType<CreateJobAllocationsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobAllocationsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobAllocationsResponseResult$outboundSchema: z.ZodType<CreateJobAllocationsResponseResult$Outbound, z.ZodTypeDef, CreateJobAllocationsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobAllocationsResponseResult$ {
    /** @deprecated use `CreateJobAllocationsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobAllocationsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobAllocationsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobAllocationsResponseResult$Outbound, z.ZodTypeDef, CreateJobAllocationsResponseResult>;
    /** @deprecated use `CreateJobAllocationsResponseResult$Outbound` instead. */
    type Outbound = CreateJobAllocationsResponseResult$Outbound;
}
export declare function createJobAllocationsResponseResultToJSON(createJobAllocationsResponseResult: CreateJobAllocationsResponseResult): string;
export declare function createJobAllocationsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobAllocationsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobAllocationsResponse$inboundSchema: z.ZodType<CreateJobAllocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobAllocationsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobAllocationsResponse$outboundSchema: z.ZodType<CreateJobAllocationsResponse$Outbound, z.ZodTypeDef, CreateJobAllocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobAllocationsResponse$ {
    /** @deprecated use `CreateJobAllocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobAllocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobAllocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobAllocationsResponse$Outbound, z.ZodTypeDef, CreateJobAllocationsResponse>;
    /** @deprecated use `CreateJobAllocationsResponse$Outbound` instead. */
    type Outbound = CreateJobAllocationsResponse$Outbound;
}
export declare function createJobAllocationsResponseToJSON(createJobAllocationsResponse: CreateJobAllocationsResponse): string;
export declare function createJobAllocationsResponseFromJSON(jsonString: string): SafeParseResult<CreateJobAllocationsResponse, SDKValidationError>;
//# sourceMappingURL=createjoballocations.d.ts.map