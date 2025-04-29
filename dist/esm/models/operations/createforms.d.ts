import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateFormsResponseResult = components.Result | components.ErrorT;
export type CreateFormsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateFormsResponseResult$inboundSchema: z.ZodType<CreateFormsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFormsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateFormsResponseResult$outboundSchema: z.ZodType<CreateFormsResponseResult$Outbound, z.ZodTypeDef, CreateFormsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateFormsResponseResult$ {
    /** @deprecated use `CreateFormsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateFormsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateFormsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateFormsResponseResult$Outbound, z.ZodTypeDef, CreateFormsResponseResult>;
    /** @deprecated use `CreateFormsResponseResult$Outbound` instead. */
    type Outbound = CreateFormsResponseResult$Outbound;
}
export declare function createFormsResponseResultToJSON(createFormsResponseResult: CreateFormsResponseResult): string;
export declare function createFormsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateFormsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateFormsResponse$inboundSchema: z.ZodType<CreateFormsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFormsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateFormsResponse$outboundSchema: z.ZodType<CreateFormsResponse$Outbound, z.ZodTypeDef, CreateFormsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateFormsResponse$ {
    /** @deprecated use `CreateFormsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateFormsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateFormsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateFormsResponse$Outbound, z.ZodTypeDef, CreateFormsResponse>;
    /** @deprecated use `CreateFormsResponse$Outbound` instead. */
    type Outbound = CreateFormsResponse$Outbound;
}
export declare function createFormsResponseToJSON(createFormsResponse: CreateFormsResponse): string;
export declare function createFormsResponseFromJSON(jsonString: string): SafeParseResult<CreateFormsResponse, SDKValidationError>;
//# sourceMappingURL=createforms.d.ts.map