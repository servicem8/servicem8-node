import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetAssetTypesRequest = {
    /**
     * UUID of the Asset Type
     */
    uuid: string;
};
export type GetAssetTypesResponse = components.ErrorT | components.AssetType;
/** @internal */
export declare const GetAssetTypesRequest$inboundSchema: z.ZodType<GetAssetTypesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAssetTypesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetAssetTypesRequest$outboundSchema: z.ZodType<GetAssetTypesRequest$Outbound, z.ZodTypeDef, GetAssetTypesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAssetTypesRequest$ {
    /** @deprecated use `GetAssetTypesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAssetTypesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAssetTypesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAssetTypesRequest$Outbound, z.ZodTypeDef, GetAssetTypesRequest>;
    /** @deprecated use `GetAssetTypesRequest$Outbound` instead. */
    type Outbound = GetAssetTypesRequest$Outbound;
}
export declare function getAssetTypesRequestToJSON(getAssetTypesRequest: GetAssetTypesRequest): string;
export declare function getAssetTypesRequestFromJSON(jsonString: string): SafeParseResult<GetAssetTypesRequest, SDKValidationError>;
/** @internal */
export declare const GetAssetTypesResponse$inboundSchema: z.ZodType<GetAssetTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAssetTypesResponse$Outbound = components.ErrorT$Outbound | components.AssetType$Outbound;
/** @internal */
export declare const GetAssetTypesResponse$outboundSchema: z.ZodType<GetAssetTypesResponse$Outbound, z.ZodTypeDef, GetAssetTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAssetTypesResponse$ {
    /** @deprecated use `GetAssetTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAssetTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAssetTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAssetTypesResponse$Outbound, z.ZodTypeDef, GetAssetTypesResponse>;
    /** @deprecated use `GetAssetTypesResponse$Outbound` instead. */
    type Outbound = GetAssetTypesResponse$Outbound;
}
export declare function getAssetTypesResponseToJSON(getAssetTypesResponse: GetAssetTypesResponse): string;
export declare function getAssetTypesResponseFromJSON(jsonString: string): SafeParseResult<GetAssetTypesResponse, SDKValidationError>;
//# sourceMappingURL=getassettypes.d.ts.map