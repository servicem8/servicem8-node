import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateBundlesResponseResult = components.Result | components.ErrorT;
export type CreateBundlesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateBundlesResponseResult$inboundSchema: z.ZodType<CreateBundlesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateBundlesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateBundlesResponseResult$outboundSchema: z.ZodType<CreateBundlesResponseResult$Outbound, z.ZodTypeDef, CreateBundlesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateBundlesResponseResult$ {
    /** @deprecated use `CreateBundlesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateBundlesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateBundlesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateBundlesResponseResult$Outbound, z.ZodTypeDef, CreateBundlesResponseResult>;
    /** @deprecated use `CreateBundlesResponseResult$Outbound` instead. */
    type Outbound = CreateBundlesResponseResult$Outbound;
}
export declare function createBundlesResponseResultToJSON(createBundlesResponseResult: CreateBundlesResponseResult): string;
export declare function createBundlesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateBundlesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateBundlesResponse$inboundSchema: z.ZodType<CreateBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateBundlesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateBundlesResponse$outboundSchema: z.ZodType<CreateBundlesResponse$Outbound, z.ZodTypeDef, CreateBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateBundlesResponse$ {
    /** @deprecated use `CreateBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateBundlesResponse$Outbound, z.ZodTypeDef, CreateBundlesResponse>;
    /** @deprecated use `CreateBundlesResponse$Outbound` instead. */
    type Outbound = CreateBundlesResponse$Outbound;
}
export declare function createBundlesResponseToJSON(createBundlesResponse: CreateBundlesResponse): string;
export declare function createBundlesResponseFromJSON(jsonString: string): SafeParseResult<CreateBundlesResponse, SDKValidationError>;
//# sourceMappingURL=createbundles.d.ts.map