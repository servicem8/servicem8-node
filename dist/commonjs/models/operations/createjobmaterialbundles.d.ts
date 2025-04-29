import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateJobMaterialBundlesResponseResult = components.Result | components.ErrorT;
export type CreateJobMaterialBundlesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateJobMaterialBundlesResponseResult$inboundSchema: z.ZodType<CreateJobMaterialBundlesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobMaterialBundlesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateJobMaterialBundlesResponseResult$outboundSchema: z.ZodType<CreateJobMaterialBundlesResponseResult$Outbound, z.ZodTypeDef, CreateJobMaterialBundlesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobMaterialBundlesResponseResult$ {
    /** @deprecated use `CreateJobMaterialBundlesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobMaterialBundlesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobMaterialBundlesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobMaterialBundlesResponseResult$Outbound, z.ZodTypeDef, CreateJobMaterialBundlesResponseResult>;
    /** @deprecated use `CreateJobMaterialBundlesResponseResult$Outbound` instead. */
    type Outbound = CreateJobMaterialBundlesResponseResult$Outbound;
}
export declare function createJobMaterialBundlesResponseResultToJSON(createJobMaterialBundlesResponseResult: CreateJobMaterialBundlesResponseResult): string;
export declare function createJobMaterialBundlesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateJobMaterialBundlesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateJobMaterialBundlesResponse$inboundSchema: z.ZodType<CreateJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateJobMaterialBundlesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateJobMaterialBundlesResponse$outboundSchema: z.ZodType<CreateJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, CreateJobMaterialBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateJobMaterialBundlesResponse$ {
    /** @deprecated use `CreateJobMaterialBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateJobMaterialBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, CreateJobMaterialBundlesResponse>;
    /** @deprecated use `CreateJobMaterialBundlesResponse$Outbound` instead. */
    type Outbound = CreateJobMaterialBundlesResponse$Outbound;
}
export declare function createJobMaterialBundlesResponseToJSON(createJobMaterialBundlesResponse: CreateJobMaterialBundlesResponse): string;
export declare function createJobMaterialBundlesResponseFromJSON(jsonString: string): SafeParseResult<CreateJobMaterialBundlesResponse, SDKValidationError>;
//# sourceMappingURL=createjobmaterialbundles.d.ts.map