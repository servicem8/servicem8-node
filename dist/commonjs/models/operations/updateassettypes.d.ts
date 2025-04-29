import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateAssetTypesRequest = {
    /**
     * UUID of the Asset Type
     */
    uuid: string;
    /**
     * Asset Type fields to update
     */
    assetType: components.AssetTypeInput;
};
export type UpdateAssetTypesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateAssetTypesRequest$inboundSchema: z.ZodType<UpdateAssetTypesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAssetTypesRequest$Outbound = {
    uuid: string;
    AssetType: components.AssetTypeInput$Outbound;
};
/** @internal */
export declare const UpdateAssetTypesRequest$outboundSchema: z.ZodType<UpdateAssetTypesRequest$Outbound, z.ZodTypeDef, UpdateAssetTypesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAssetTypesRequest$ {
    /** @deprecated use `UpdateAssetTypesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAssetTypesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAssetTypesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAssetTypesRequest$Outbound, z.ZodTypeDef, UpdateAssetTypesRequest>;
    /** @deprecated use `UpdateAssetTypesRequest$Outbound` instead. */
    type Outbound = UpdateAssetTypesRequest$Outbound;
}
export declare function updateAssetTypesRequestToJSON(updateAssetTypesRequest: UpdateAssetTypesRequest): string;
export declare function updateAssetTypesRequestFromJSON(jsonString: string): SafeParseResult<UpdateAssetTypesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAssetTypesResponse$inboundSchema: z.ZodType<UpdateAssetTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAssetTypesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateAssetTypesResponse$outboundSchema: z.ZodType<UpdateAssetTypesResponse$Outbound, z.ZodTypeDef, UpdateAssetTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAssetTypesResponse$ {
    /** @deprecated use `UpdateAssetTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAssetTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAssetTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAssetTypesResponse$Outbound, z.ZodTypeDef, UpdateAssetTypesResponse>;
    /** @deprecated use `UpdateAssetTypesResponse$Outbound` instead. */
    type Outbound = UpdateAssetTypesResponse$Outbound;
}
export declare function updateAssetTypesResponseToJSON(updateAssetTypesResponse: UpdateAssetTypesResponse): string;
export declare function updateAssetTypesResponseFromJSON(jsonString: string): SafeParseResult<UpdateAssetTypesResponse, SDKValidationError>;
//# sourceMappingURL=updateassettypes.d.ts.map