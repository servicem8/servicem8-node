import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateAssetTypeFieldsRequest = {
    /**
     * UUID of the Asset Type Field
     */
    uuid: string;
    /**
     * Asset Type Field fields to update
     */
    assetTypeField: components.AssetTypeFieldInput;
};
export type UpdateAssetTypeFieldsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateAssetTypeFieldsRequest$inboundSchema: z.ZodType<UpdateAssetTypeFieldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAssetTypeFieldsRequest$Outbound = {
    uuid: string;
    AssetTypeField: components.AssetTypeFieldInput$Outbound;
};
/** @internal */
export declare const UpdateAssetTypeFieldsRequest$outboundSchema: z.ZodType<UpdateAssetTypeFieldsRequest$Outbound, z.ZodTypeDef, UpdateAssetTypeFieldsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAssetTypeFieldsRequest$ {
    /** @deprecated use `UpdateAssetTypeFieldsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAssetTypeFieldsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAssetTypeFieldsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAssetTypeFieldsRequest$Outbound, z.ZodTypeDef, UpdateAssetTypeFieldsRequest>;
    /** @deprecated use `UpdateAssetTypeFieldsRequest$Outbound` instead. */
    type Outbound = UpdateAssetTypeFieldsRequest$Outbound;
}
export declare function updateAssetTypeFieldsRequestToJSON(updateAssetTypeFieldsRequest: UpdateAssetTypeFieldsRequest): string;
export declare function updateAssetTypeFieldsRequestFromJSON(jsonString: string): SafeParseResult<UpdateAssetTypeFieldsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAssetTypeFieldsResponse$inboundSchema: z.ZodType<UpdateAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAssetTypeFieldsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateAssetTypeFieldsResponse$outboundSchema: z.ZodType<UpdateAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, UpdateAssetTypeFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAssetTypeFieldsResponse$ {
    /** @deprecated use `UpdateAssetTypeFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAssetTypeFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, UpdateAssetTypeFieldsResponse>;
    /** @deprecated use `UpdateAssetTypeFieldsResponse$Outbound` instead. */
    type Outbound = UpdateAssetTypeFieldsResponse$Outbound;
}
export declare function updateAssetTypeFieldsResponseToJSON(updateAssetTypeFieldsResponse: UpdateAssetTypeFieldsResponse): string;
export declare function updateAssetTypeFieldsResponseFromJSON(jsonString: string): SafeParseResult<UpdateAssetTypeFieldsResponse, SDKValidationError>;
//# sourceMappingURL=updateassettypefields.d.ts.map