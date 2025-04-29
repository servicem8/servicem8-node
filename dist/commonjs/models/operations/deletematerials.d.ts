import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteMaterialsRequest = {
    /**
     * UUID of the Material
     */
    uuid: string;
};
export type DeleteMaterialsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteMaterialsRequest$inboundSchema: z.ZodType<DeleteMaterialsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteMaterialsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteMaterialsRequest$outboundSchema: z.ZodType<DeleteMaterialsRequest$Outbound, z.ZodTypeDef, DeleteMaterialsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteMaterialsRequest$ {
    /** @deprecated use `DeleteMaterialsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteMaterialsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteMaterialsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteMaterialsRequest$Outbound, z.ZodTypeDef, DeleteMaterialsRequest>;
    /** @deprecated use `DeleteMaterialsRequest$Outbound` instead. */
    type Outbound = DeleteMaterialsRequest$Outbound;
}
export declare function deleteMaterialsRequestToJSON(deleteMaterialsRequest: DeleteMaterialsRequest): string;
export declare function deleteMaterialsRequestFromJSON(jsonString: string): SafeParseResult<DeleteMaterialsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteMaterialsResponse$inboundSchema: z.ZodType<DeleteMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteMaterialsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteMaterialsResponse$outboundSchema: z.ZodType<DeleteMaterialsResponse$Outbound, z.ZodTypeDef, DeleteMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteMaterialsResponse$ {
    /** @deprecated use `DeleteMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteMaterialsResponse$Outbound, z.ZodTypeDef, DeleteMaterialsResponse>;
    /** @deprecated use `DeleteMaterialsResponse$Outbound` instead. */
    type Outbound = DeleteMaterialsResponse$Outbound;
}
export declare function deleteMaterialsResponseToJSON(deleteMaterialsResponse: DeleteMaterialsResponse): string;
export declare function deleteMaterialsResponseFromJSON(jsonString: string): SafeParseResult<DeleteMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=deletematerials.d.ts.map