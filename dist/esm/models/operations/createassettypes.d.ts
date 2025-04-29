import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateAssetTypesResponseResult = components.Result | components.ErrorT;
export type CreateAssetTypesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateAssetTypesResponseResult$inboundSchema: z.ZodType<CreateAssetTypesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAssetTypesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateAssetTypesResponseResult$outboundSchema: z.ZodType<CreateAssetTypesResponseResult$Outbound, z.ZodTypeDef, CreateAssetTypesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAssetTypesResponseResult$ {
    /** @deprecated use `CreateAssetTypesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAssetTypesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAssetTypesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAssetTypesResponseResult$Outbound, z.ZodTypeDef, CreateAssetTypesResponseResult>;
    /** @deprecated use `CreateAssetTypesResponseResult$Outbound` instead. */
    type Outbound = CreateAssetTypesResponseResult$Outbound;
}
export declare function createAssetTypesResponseResultToJSON(createAssetTypesResponseResult: CreateAssetTypesResponseResult): string;
export declare function createAssetTypesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateAssetTypesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateAssetTypesResponse$inboundSchema: z.ZodType<CreateAssetTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAssetTypesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateAssetTypesResponse$outboundSchema: z.ZodType<CreateAssetTypesResponse$Outbound, z.ZodTypeDef, CreateAssetTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAssetTypesResponse$ {
    /** @deprecated use `CreateAssetTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAssetTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAssetTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAssetTypesResponse$Outbound, z.ZodTypeDef, CreateAssetTypesResponse>;
    /** @deprecated use `CreateAssetTypesResponse$Outbound` instead. */
    type Outbound = CreateAssetTypesResponse$Outbound;
}
export declare function createAssetTypesResponseToJSON(createAssetTypesResponse: CreateAssetTypesResponse): string;
export declare function createAssetTypesResponseFromJSON(jsonString: string): SafeParseResult<CreateAssetTypesResponse, SDKValidationError>;
//# sourceMappingURL=createassettypes.d.ts.map