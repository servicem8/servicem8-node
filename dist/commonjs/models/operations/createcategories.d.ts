import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateCategoriesResponseResult = components.Result | components.ErrorT;
export type CreateCategoriesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateCategoriesResponseResult$inboundSchema: z.ZodType<CreateCategoriesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCategoriesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateCategoriesResponseResult$outboundSchema: z.ZodType<CreateCategoriesResponseResult$Outbound, z.ZodTypeDef, CreateCategoriesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateCategoriesResponseResult$ {
    /** @deprecated use `CreateCategoriesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateCategoriesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateCategoriesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateCategoriesResponseResult$Outbound, z.ZodTypeDef, CreateCategoriesResponseResult>;
    /** @deprecated use `CreateCategoriesResponseResult$Outbound` instead. */
    type Outbound = CreateCategoriesResponseResult$Outbound;
}
export declare function createCategoriesResponseResultToJSON(createCategoriesResponseResult: CreateCategoriesResponseResult): string;
export declare function createCategoriesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateCategoriesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateCategoriesResponse$inboundSchema: z.ZodType<CreateCategoriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateCategoriesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateCategoriesResponse$outboundSchema: z.ZodType<CreateCategoriesResponse$Outbound, z.ZodTypeDef, CreateCategoriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateCategoriesResponse$ {
    /** @deprecated use `CreateCategoriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateCategoriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateCategoriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateCategoriesResponse$Outbound, z.ZodTypeDef, CreateCategoriesResponse>;
    /** @deprecated use `CreateCategoriesResponse$Outbound` instead. */
    type Outbound = CreateCategoriesResponse$Outbound;
}
export declare function createCategoriesResponseToJSON(createCategoriesResponse: CreateCategoriesResponse): string;
export declare function createCategoriesResponseFromJSON(jsonString: string): SafeParseResult<CreateCategoriesResponse, SDKValidationError>;
//# sourceMappingURL=createcategories.d.ts.map