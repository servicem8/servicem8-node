import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetAssetTypeFieldsRequest = {
    /**
     * UUID of the Asset Type Field
     */
    uuid: string;
};
export type GetAssetTypeFieldsResponse = components.ErrorT | components.AssetTypeField;
/** @internal */
export declare const GetAssetTypeFieldsRequest$inboundSchema: z.ZodType<GetAssetTypeFieldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAssetTypeFieldsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetAssetTypeFieldsRequest$outboundSchema: z.ZodType<GetAssetTypeFieldsRequest$Outbound, z.ZodTypeDef, GetAssetTypeFieldsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAssetTypeFieldsRequest$ {
    /** @deprecated use `GetAssetTypeFieldsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAssetTypeFieldsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAssetTypeFieldsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAssetTypeFieldsRequest$Outbound, z.ZodTypeDef, GetAssetTypeFieldsRequest>;
    /** @deprecated use `GetAssetTypeFieldsRequest$Outbound` instead. */
    type Outbound = GetAssetTypeFieldsRequest$Outbound;
}
export declare function getAssetTypeFieldsRequestToJSON(getAssetTypeFieldsRequest: GetAssetTypeFieldsRequest): string;
export declare function getAssetTypeFieldsRequestFromJSON(jsonString: string): SafeParseResult<GetAssetTypeFieldsRequest, SDKValidationError>;
/** @internal */
export declare const GetAssetTypeFieldsResponse$inboundSchema: z.ZodType<GetAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAssetTypeFieldsResponse$Outbound = components.ErrorT$Outbound | components.AssetTypeField$Outbound;
/** @internal */
export declare const GetAssetTypeFieldsResponse$outboundSchema: z.ZodType<GetAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, GetAssetTypeFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAssetTypeFieldsResponse$ {
    /** @deprecated use `GetAssetTypeFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAssetTypeFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, GetAssetTypeFieldsResponse>;
    /** @deprecated use `GetAssetTypeFieldsResponse$Outbound` instead. */
    type Outbound = GetAssetTypeFieldsResponse$Outbound;
}
export declare function getAssetTypeFieldsResponseToJSON(getAssetTypeFieldsResponse: GetAssetTypeFieldsResponse): string;
export declare function getAssetTypeFieldsResponseFromJSON(jsonString: string): SafeParseResult<GetAssetTypeFieldsResponse, SDKValidationError>;
//# sourceMappingURL=getassettypefields.d.ts.map