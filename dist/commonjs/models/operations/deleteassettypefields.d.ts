import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteAssetTypeFieldsRequest = {
    /**
     * UUID of the Asset Type Field
     */
    uuid: string;
};
export type DeleteAssetTypeFieldsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteAssetTypeFieldsRequest$inboundSchema: z.ZodType<DeleteAssetTypeFieldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAssetTypeFieldsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteAssetTypeFieldsRequest$outboundSchema: z.ZodType<DeleteAssetTypeFieldsRequest$Outbound, z.ZodTypeDef, DeleteAssetTypeFieldsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAssetTypeFieldsRequest$ {
    /** @deprecated use `DeleteAssetTypeFieldsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAssetTypeFieldsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAssetTypeFieldsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAssetTypeFieldsRequest$Outbound, z.ZodTypeDef, DeleteAssetTypeFieldsRequest>;
    /** @deprecated use `DeleteAssetTypeFieldsRequest$Outbound` instead. */
    type Outbound = DeleteAssetTypeFieldsRequest$Outbound;
}
export declare function deleteAssetTypeFieldsRequestToJSON(deleteAssetTypeFieldsRequest: DeleteAssetTypeFieldsRequest): string;
export declare function deleteAssetTypeFieldsRequestFromJSON(jsonString: string): SafeParseResult<DeleteAssetTypeFieldsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteAssetTypeFieldsResponse$inboundSchema: z.ZodType<DeleteAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAssetTypeFieldsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteAssetTypeFieldsResponse$outboundSchema: z.ZodType<DeleteAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, DeleteAssetTypeFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAssetTypeFieldsResponse$ {
    /** @deprecated use `DeleteAssetTypeFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAssetTypeFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAssetTypeFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAssetTypeFieldsResponse$Outbound, z.ZodTypeDef, DeleteAssetTypeFieldsResponse>;
    /** @deprecated use `DeleteAssetTypeFieldsResponse$Outbound` instead. */
    type Outbound = DeleteAssetTypeFieldsResponse$Outbound;
}
export declare function deleteAssetTypeFieldsResponseToJSON(deleteAssetTypeFieldsResponse: DeleteAssetTypeFieldsResponse): string;
export declare function deleteAssetTypeFieldsResponseFromJSON(jsonString: string): SafeParseResult<DeleteAssetTypeFieldsResponse, SDKValidationError>;
//# sourceMappingURL=deleteassettypefields.d.ts.map