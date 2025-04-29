import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateMaterialsRequest = {
    /**
     * UUID of the Material
     */
    uuid: string;
    /**
     * Material fields to update
     */
    material: components.MaterialInput;
};
export type UpdateMaterialsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateMaterialsRequest$inboundSchema: z.ZodType<UpdateMaterialsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateMaterialsRequest$Outbound = {
    uuid: string;
    Material: components.MaterialInput$Outbound;
};
/** @internal */
export declare const UpdateMaterialsRequest$outboundSchema: z.ZodType<UpdateMaterialsRequest$Outbound, z.ZodTypeDef, UpdateMaterialsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateMaterialsRequest$ {
    /** @deprecated use `UpdateMaterialsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateMaterialsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateMaterialsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateMaterialsRequest$Outbound, z.ZodTypeDef, UpdateMaterialsRequest>;
    /** @deprecated use `UpdateMaterialsRequest$Outbound` instead. */
    type Outbound = UpdateMaterialsRequest$Outbound;
}
export declare function updateMaterialsRequestToJSON(updateMaterialsRequest: UpdateMaterialsRequest): string;
export declare function updateMaterialsRequestFromJSON(jsonString: string): SafeParseResult<UpdateMaterialsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateMaterialsResponse$inboundSchema: z.ZodType<UpdateMaterialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateMaterialsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateMaterialsResponse$outboundSchema: z.ZodType<UpdateMaterialsResponse$Outbound, z.ZodTypeDef, UpdateMaterialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateMaterialsResponse$ {
    /** @deprecated use `UpdateMaterialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateMaterialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateMaterialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateMaterialsResponse$Outbound, z.ZodTypeDef, UpdateMaterialsResponse>;
    /** @deprecated use `UpdateMaterialsResponse$Outbound` instead. */
    type Outbound = UpdateMaterialsResponse$Outbound;
}
export declare function updateMaterialsResponseToJSON(updateMaterialsResponse: UpdateMaterialsResponse): string;
export declare function updateMaterialsResponseFromJSON(jsonString: string): SafeParseResult<UpdateMaterialsResponse, SDKValidationError>;
//# sourceMappingURL=updatematerials.d.ts.map