import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteAssetTypesRequest = {
    /**
     * UUID of the Asset Type
     */
    uuid: string;
};
export type DeleteAssetTypesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteAssetTypesRequest$inboundSchema: z.ZodType<DeleteAssetTypesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAssetTypesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteAssetTypesRequest$outboundSchema: z.ZodType<DeleteAssetTypesRequest$Outbound, z.ZodTypeDef, DeleteAssetTypesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAssetTypesRequest$ {
    /** @deprecated use `DeleteAssetTypesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAssetTypesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAssetTypesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAssetTypesRequest$Outbound, z.ZodTypeDef, DeleteAssetTypesRequest>;
    /** @deprecated use `DeleteAssetTypesRequest$Outbound` instead. */
    type Outbound = DeleteAssetTypesRequest$Outbound;
}
export declare function deleteAssetTypesRequestToJSON(deleteAssetTypesRequest: DeleteAssetTypesRequest): string;
export declare function deleteAssetTypesRequestFromJSON(jsonString: string): SafeParseResult<DeleteAssetTypesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteAssetTypesResponse$inboundSchema: z.ZodType<DeleteAssetTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAssetTypesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteAssetTypesResponse$outboundSchema: z.ZodType<DeleteAssetTypesResponse$Outbound, z.ZodTypeDef, DeleteAssetTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAssetTypesResponse$ {
    /** @deprecated use `DeleteAssetTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAssetTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAssetTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAssetTypesResponse$Outbound, z.ZodTypeDef, DeleteAssetTypesResponse>;
    /** @deprecated use `DeleteAssetTypesResponse$Outbound` instead. */
    type Outbound = DeleteAssetTypesResponse$Outbound;
}
export declare function deleteAssetTypesResponseToJSON(deleteAssetTypesResponse: DeleteAssetTypesResponse): string;
export declare function deleteAssetTypesResponseFromJSON(jsonString: string): SafeParseResult<DeleteAssetTypesResponse, SDKValidationError>;
//# sourceMappingURL=deleteassettypes.d.ts.map