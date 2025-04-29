import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobMaterialsResponseResult = components.Result | components.ErrorT;
export type CreateJobMaterialsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobMaterialsResponseResult$inboundSchema: z.ZodType<CreateJobMaterialsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobMaterialsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobMaterialsResponseResult$outboundSchema: z.ZodType<CreateJobMaterialsResponseResult$Outbound, z.ZodTypeDef, CreateJobMaterialsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobMaterialsResponseResult$ {
    /** @deprecated use `CreateJobMaterialsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobMaterialsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobMaterialsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobMaterialsResponseResult$Outbound, z.ZodTypeDef, CreateJobMaterialsResponseResult>;
    /** @deprecated use `CreateJobMaterialsResponseResult$Outbound` instead. */
    type Outbound = CreateJobMaterialsResponseResult$Outbound;
}
export declare function createJobMaterialsResponseResultToJSON(createJobMaterialsResponseResult: CreateJobMaterialsResponseResult): string;
export declare function createJobMaterialsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobMaterialsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobMaterialsResponse$inboundSchema: z.ZodType<CreateJobMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobMaterialsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobMaterialsResponse$outboundSchema: z.ZodType<CreateJobMaterialsResponse$Outbound, z.ZodTypeDef, CreateJobMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobMaterialsResponse$ {
    /** @deprecated use `CreateJobMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobMaterialsResponse$Outbound, z.ZodTypeDef, CreateJobMaterialsResponse>;
    /** @deprecated use `CreateJobMaterialsResponse$Outbound` instead. */
    type Outbound = CreateJobMaterialsResponse$Outbound;
}
export declare function createJobMaterialsResponseToJSON(createJobMaterialsResponse: CreateJobMaterialsResponse): string;
export declare function createJobMaterialsResponseFromJSON(jsonString: string): SafeParseResult<CreateJobMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=createjobmaterials.d.ts.map