import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateFormResponsesResponseResult = components.Result | components.ErrorT;
export type CreateFormResponsesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateFormResponsesResponseResult$inboundSchema: z.ZodType<CreateFormResponsesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFormResponsesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateFormResponsesResponseResult$outboundSchema: z.ZodType<CreateFormResponsesResponseResult$Outbound, z.ZodTypeDef, CreateFormResponsesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateFormResponsesResponseResult$ {
    /** @deprecated use `CreateFormResponsesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateFormResponsesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateFormResponsesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateFormResponsesResponseResult$Outbound, z.ZodTypeDef, CreateFormResponsesResponseResult>;
    /** @deprecated use `CreateFormResponsesResponseResult$Outbound` instead. */
    type Outbound = CreateFormResponsesResponseResult$Outbound;
}
export declare function createFormResponsesResponseResultToJSON(createFormResponsesResponseResult: CreateFormResponsesResponseResult): string;
export declare function createFormResponsesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateFormResponsesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateFormResponsesResponse$inboundSchema: z.ZodType<CreateFormResponsesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFormResponsesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateFormResponsesResponse$outboundSchema: z.ZodType<CreateFormResponsesResponse$Outbound, z.ZodTypeDef, CreateFormResponsesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateFormResponsesResponse$ {
    /** @deprecated use `CreateFormResponsesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateFormResponsesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateFormResponsesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateFormResponsesResponse$Outbound, z.ZodTypeDef, CreateFormResponsesResponse>;
    /** @deprecated use `CreateFormResponsesResponse$Outbound` instead. */
    type Outbound = CreateFormResponsesResponse$Outbound;
}
export declare function createFormResponsesResponseToJSON(createFormResponsesResponse: CreateFormResponsesResponse): string;
export declare function createFormResponsesResponseFromJSON(jsonString: string): SafeParseResult<CreateFormResponsesResponse, SDKValidationError>;
//# sourceMappingURL=createformresponses.d.ts.map