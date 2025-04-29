import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateMaterialsResponseResult = components.Result | components.ErrorT;
export type CreateMaterialsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateMaterialsResponseResult$inboundSchema: z.ZodType<CreateMaterialsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateMaterialsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateMaterialsResponseResult$outboundSchema: z.ZodType<CreateMaterialsResponseResult$Outbound, z.ZodTypeDef, CreateMaterialsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateMaterialsResponseResult$ {
    /** @deprecated use `CreateMaterialsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateMaterialsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateMaterialsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateMaterialsResponseResult$Outbound, z.ZodTypeDef, CreateMaterialsResponseResult>;
    /** @deprecated use `CreateMaterialsResponseResult$Outbound` instead. */
    type Outbound = CreateMaterialsResponseResult$Outbound;
}
export declare function createMaterialsResponseResultToJSON(createMaterialsResponseResult: CreateMaterialsResponseResult): string;
export declare function createMaterialsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateMaterialsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateMaterialsResponse$inboundSchema: z.ZodType<CreateMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateMaterialsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateMaterialsResponse$outboundSchema: z.ZodType<CreateMaterialsResponse$Outbound, z.ZodTypeDef, CreateMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateMaterialsResponse$ {
    /** @deprecated use `CreateMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateMaterialsResponse$Outbound, z.ZodTypeDef, CreateMaterialsResponse>;
    /** @deprecated use `CreateMaterialsResponse$Outbound` instead. */
    type Outbound = CreateMaterialsResponse$Outbound;
}
export declare function createMaterialsResponseToJSON(createMaterialsResponse: CreateMaterialsResponse): string;
export declare function createMaterialsResponseFromJSON(jsonString: string): SafeParseResult<CreateMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=creatematerials.d.ts.map