import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateFormFieldsResponseResult = components.Result | components.ErrorT;
export type CreateFormFieldsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateFormFieldsResponseResult$inboundSchema: z.ZodType<CreateFormFieldsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFormFieldsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateFormFieldsResponseResult$outboundSchema: z.ZodType<CreateFormFieldsResponseResult$Outbound, z.ZodTypeDef, CreateFormFieldsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateFormFieldsResponseResult$ {
    /** @deprecated use `CreateFormFieldsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateFormFieldsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateFormFieldsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateFormFieldsResponseResult$Outbound, z.ZodTypeDef, CreateFormFieldsResponseResult>;
    /** @deprecated use `CreateFormFieldsResponseResult$Outbound` instead. */
    type Outbound = CreateFormFieldsResponseResult$Outbound;
}
export declare function createFormFieldsResponseResultToJSON(createFormFieldsResponseResult: CreateFormFieldsResponseResult): string;
export declare function createFormFieldsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateFormFieldsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateFormFieldsResponse$inboundSchema: z.ZodType<CreateFormFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFormFieldsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateFormFieldsResponse$outboundSchema: z.ZodType<CreateFormFieldsResponse$Outbound, z.ZodTypeDef, CreateFormFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateFormFieldsResponse$ {
    /** @deprecated use `CreateFormFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateFormFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateFormFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateFormFieldsResponse$Outbound, z.ZodTypeDef, CreateFormFieldsResponse>;
    /** @deprecated use `CreateFormFieldsResponse$Outbound` instead. */
    type Outbound = CreateFormFieldsResponse$Outbound;
}
export declare function createFormFieldsResponseToJSON(createFormFieldsResponse: CreateFormFieldsResponse): string;
export declare function createFormFieldsResponseFromJSON(jsonString: string): SafeParseResult<CreateFormFieldsResponse, SDKValidationError>;
//# sourceMappingURL=createformfields.d.ts.map