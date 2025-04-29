import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobMaterialBundlesRequest = {
    /**
     * UUID of the Job Material Bundle
     */
    uuid: string;
};
export type GetJobMaterialBundlesResponse = components.ErrorT | components.JobMaterialBundle;
/** @internal */
export declare const GetJobMaterialBundlesRequest$inboundSchema: z.ZodType<GetJobMaterialBundlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobMaterialBundlesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobMaterialBundlesRequest$outboundSchema: z.ZodType<GetJobMaterialBundlesRequest$Outbound, z.ZodTypeDef, GetJobMaterialBundlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobMaterialBundlesRequest$ {
    /** @deprecated use `GetJobMaterialBundlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobMaterialBundlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobMaterialBundlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobMaterialBundlesRequest$Outbound, z.ZodTypeDef, GetJobMaterialBundlesRequest>;
    /** @deprecated use `GetJobMaterialBundlesRequest$Outbound` instead. */
    type Outbound = GetJobMaterialBundlesRequest$Outbound;
}
export declare function getJobMaterialBundlesRequestToJSON(getJobMaterialBundlesRequest: GetJobMaterialBundlesRequest): string;
export declare function getJobMaterialBundlesRequestFromJSON(jsonString: string): SafeParseResult<GetJobMaterialBundlesRequest, SDKValidationError>;
/** @internal */
export declare const GetJobMaterialBundlesResponse$inboundSchema: z.ZodType<GetJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobMaterialBundlesResponse$Outbound = components.ErrorT$Outbound | components.JobMaterialBundle$Outbound;
/** @internal */
export declare const GetJobMaterialBundlesResponse$outboundSchema: z.ZodType<GetJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, GetJobMaterialBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobMaterialBundlesResponse$ {
    /** @deprecated use `GetJobMaterialBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobMaterialBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobMaterialBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobMaterialBundlesResponse$Outbound, z.ZodTypeDef, GetJobMaterialBundlesResponse>;
    /** @deprecated use `GetJobMaterialBundlesResponse$Outbound` instead. */
    type Outbound = GetJobMaterialBundlesResponse$Outbound;
}
export declare function getJobMaterialBundlesResponseToJSON(getJobMaterialBundlesResponse: GetJobMaterialBundlesResponse): string;
export declare function getJobMaterialBundlesResponseFromJSON(jsonString: string): SafeParseResult<GetJobMaterialBundlesResponse, SDKValidationError>;
//# sourceMappingURL=getjobmaterialbundles.d.ts.map