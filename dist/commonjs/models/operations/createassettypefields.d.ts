import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateAssetTypeFieldsResponseResult = components.Result | components.ErrorT;
export type CreateAssetTypeFieldsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateAssetTypeFieldsResponseResult$inboundSchema: z.ZodType<CreateAssetTypeFieldsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAssetTypeFieldsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateAssetTypeFieldsResponseResult$outboundSchema: z.ZodType<CreateAssetTypeFieldsResponseResult$Outbound, z.ZodTypeDef, CreateAssetTypeFieldsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAssetTypeFieldsResponseResult$ {
    /** @deprecated use `CreateAssetTypeFieldsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAssetTypeFieldsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAssetTypeFieldsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAssetTypeFieldsResponseResult$Outbound, z.ZodTypeDef, CreateAssetTypeFieldsResponseResult>;
    /** @deprecated use `CreateAssetTypeFieldsResponseResult$Outbound` instead. */
    type Outbound = CreateAssetTypeFieldsResponseResult$Outbound;
}
export declare function createAssetTypeFieldsResponseResultToJSON(createAssetTypeFieldsResponseResult: CreateAssetTypeFieldsResponseResult): string;
export declare function createAssetTypeFieldsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateAssetTypeFieldsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateAssetTypeFieldsResponse$inboundSchema: z.ZodType<CreateAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAssetTypeFieldsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateAssetTypeFieldsResponse$outboundSchema: z.ZodType<CreateAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, CreateAssetTypeFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAssetTypeFieldsResponse$ {
    /** @deprecated use `CreateAssetTypeFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAssetTypeFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, CreateAssetTypeFieldsResponse>;
    /** @deprecated use `CreateAssetTypeFieldsResponse$Outbound` instead. */
    type Outbound = CreateAssetTypeFieldsResponse$Outbound;
}
export declare function createAssetTypeFieldsResponseToJSON(createAssetTypeFieldsResponse: CreateAssetTypeFieldsResponse): string;
export declare function createAssetTypeFieldsResponseFromJSON(jsonString: string): SafeParseResult<CreateAssetTypeFieldsResponse, SDKValidationError>;
//# sourceMappingURL=createassettypefields.d.ts.map