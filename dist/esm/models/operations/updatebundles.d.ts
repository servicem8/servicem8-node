import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateBundlesRequest = {
    /**
     * UUID of the Bundle
     */
    uuid: string;
    /**
     * Bundle fields to update
     */
    materialBundle: components.MaterialBundleInput;
};
export type UpdateBundlesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateBundlesRequest$inboundSchema: z.ZodType<UpdateBundlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateBundlesRequest$Outbound = {
    uuid: string;
    MaterialBundle: components.MaterialBundleInput$Outbound;
};
/** @internal */
export declare const UpdateBundlesRequest$outboundSchema: z.ZodType<UpdateBundlesRequest$Outbound, z.ZodTypeDef, UpdateBundlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateBundlesRequest$ {
    /** @deprecated use `UpdateBundlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateBundlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateBundlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateBundlesRequest$Outbound, z.ZodTypeDef, UpdateBundlesRequest>;
    /** @deprecated use `UpdateBundlesRequest$Outbound` instead. */
    type Outbound = UpdateBundlesRequest$Outbound;
}
export declare function updateBundlesRequestToJSON(updateBundlesRequest: UpdateBundlesRequest): string;
export declare function updateBundlesRequestFromJSON(jsonString: string): SafeParseResult<UpdateBundlesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateBundlesResponse$inboundSchema: z.ZodType<UpdateBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateBundlesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateBundlesResponse$outboundSchema: z.ZodType<UpdateBundlesResponse$Outbound, z.ZodTypeDef, UpdateBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateBundlesResponse$ {
    /** @deprecated use `UpdateBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateBundlesResponse$Outbound, z.ZodTypeDef, UpdateBundlesResponse>;
    /** @deprecated use `UpdateBundlesResponse$Outbound` instead. */
    type Outbound = UpdateBundlesResponse$Outbound;
}
export declare function updateBundlesResponseToJSON(updateBundlesResponse: UpdateBundlesResponse): string;
export declare function updateBundlesResponseFromJSON(jsonString: string): SafeParseResult<UpdateBundlesResponse, SDKValidationError>;
//# sourceMappingURL=updatebundles.d.ts.map