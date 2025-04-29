import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobMaterialsRequest = {
    /**
     * UUID of the Job Material
     */
    uuid: string;
};
export type GetJobMaterialsResponse = components.ErrorT | components.JobMaterial;
/** @internal */
export declare const GetJobMaterialsRequest$inboundSchema: z.ZodType<GetJobMaterialsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobMaterialsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobMaterialsRequest$outboundSchema: z.ZodType<GetJobMaterialsRequest$Outbound, z.ZodTypeDef, GetJobMaterialsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobMaterialsRequest$ {
    /** @deprecated use `GetJobMaterialsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobMaterialsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobMaterialsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobMaterialsRequest$Outbound, z.ZodTypeDef, GetJobMaterialsRequest>;
    /** @deprecated use `GetJobMaterialsRequest$Outbound` instead. */
    type Outbound = GetJobMaterialsRequest$Outbound;
}
export declare function getJobMaterialsRequestToJSON(getJobMaterialsRequest: GetJobMaterialsRequest): string;
export declare function getJobMaterialsRequestFromJSON(jsonString: string): SafeParseResult<GetJobMaterialsRequest, SDKValidationError>;
/** @internal */
export declare const GetJobMaterialsResponse$inboundSchema: z.ZodType<GetJobMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobMaterialsResponse$Outbound = components.ErrorT$Outbound | components.JobMaterial$Outbound;
/** @internal */
export declare const GetJobMaterialsResponse$outboundSchema: z.ZodType<GetJobMaterialsResponse$Outbound, z.ZodTypeDef, GetJobMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobMaterialsResponse$ {
    /** @deprecated use `GetJobMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobMaterialsResponse$Outbound, z.ZodTypeDef, GetJobMaterialsResponse>;
    /** @deprecated use `GetJobMaterialsResponse$Outbound` instead. */
    type Outbound = GetJobMaterialsResponse$Outbound;
}
export declare function getJobMaterialsResponseToJSON(getJobMaterialsResponse: GetJobMaterialsResponse): string;
export declare function getJobMaterialsResponseFromJSON(jsonString: string): SafeParseResult<GetJobMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=getjobmaterials.d.ts.map