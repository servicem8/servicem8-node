import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateAssetsRequest = {
    /**
     * UUID of the Asset
     */
    uuid: string;
    /**
     * Asset fields to update
     */
    asset: components.AssetInput;
};
export type UpdateAssetsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateAssetsRequest$inboundSchema: z.ZodType<UpdateAssetsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAssetsRequest$Outbound = {
    uuid: string;
    Asset: components.AssetInput$Outbound;
};
/** @internal */
export declare const UpdateAssetsRequest$outboundSchema: z.ZodType<UpdateAssetsRequest$Outbound, z.ZodTypeDef, UpdateAssetsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAssetsRequest$ {
    /** @deprecated use `UpdateAssetsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAssetsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAssetsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAssetsRequest$Outbound, z.ZodTypeDef, UpdateAssetsRequest>;
    /** @deprecated use `UpdateAssetsRequest$Outbound` instead. */
    type Outbound = UpdateAssetsRequest$Outbound;
}
export declare function updateAssetsRequestToJSON(updateAssetsRequest: UpdateAssetsRequest): string;
export declare function updateAssetsRequestFromJSON(jsonString: string): SafeParseResult<UpdateAssetsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAssetsResponse$inboundSchema: z.ZodType<UpdateAssetsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAssetsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateAssetsResponse$outboundSchema: z.ZodType<UpdateAssetsResponse$Outbound, z.ZodTypeDef, UpdateAssetsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAssetsResponse$ {
    /** @deprecated use `UpdateAssetsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAssetsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAssetsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAssetsResponse$Outbound, z.ZodTypeDef, UpdateAssetsResponse>;
    /** @deprecated use `UpdateAssetsResponse$Outbound` instead. */
    type Outbound = UpdateAssetsResponse$Outbound;
}
export declare function updateAssetsResponseToJSON(updateAssetsResponse: UpdateAssetsResponse): string;
export declare function updateAssetsResponseFromJSON(jsonString: string): SafeParseResult<UpdateAssetsResponse, SDKValidationError>;
//# sourceMappingURL=updateassets.d.ts.map