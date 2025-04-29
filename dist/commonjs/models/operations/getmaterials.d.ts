import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetMaterialsRequest = {
    /**
     * UUID of the Material
     */
    uuid: string;
};
export type GetMaterialsResponse = components.ErrorT | components.Material;
/** @internal */
export declare const GetMaterialsRequest$inboundSchema: z.ZodType<GetMaterialsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetMaterialsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetMaterialsRequest$outboundSchema: z.ZodType<GetMaterialsRequest$Outbound, z.ZodTypeDef, GetMaterialsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetMaterialsRequest$ {
    /** @deprecated use `GetMaterialsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetMaterialsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetMaterialsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetMaterialsRequest$Outbound, z.ZodTypeDef, GetMaterialsRequest>;
    /** @deprecated use `GetMaterialsRequest$Outbound` instead. */
    type Outbound = GetMaterialsRequest$Outbound;
}
export declare function getMaterialsRequestToJSON(getMaterialsRequest: GetMaterialsRequest): string;
export declare function getMaterialsRequestFromJSON(jsonString: string): SafeParseResult<GetMaterialsRequest, SDKValidationError>;
/** @internal */
export declare const GetMaterialsResponse$inboundSchema: z.ZodType<GetMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetMaterialsResponse$Outbound = components.ErrorT$Outbound | components.Material$Outbound;
/** @internal */
export declare const GetMaterialsResponse$outboundSchema: z.ZodType<GetMaterialsResponse$Outbound, z.ZodTypeDef, GetMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetMaterialsResponse$ {
    /** @deprecated use `GetMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetMaterialsResponse$Outbound, z.ZodTypeDef, GetMaterialsResponse>;
    /** @deprecated use `GetMaterialsResponse$Outbound` instead. */
    type Outbound = GetMaterialsResponse$Outbound;
}
export declare function getMaterialsResponseToJSON(getMaterialsResponse: GetMaterialsResponse): string;
export declare function getMaterialsResponseFromJSON(jsonString: string): SafeParseResult<GetMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=getmaterials.d.ts.map