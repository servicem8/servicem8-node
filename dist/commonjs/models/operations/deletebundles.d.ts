import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteBundlesRequest = {
    /**
     * UUID of the Bundle
     */
    uuid: string;
};
export type DeleteBundlesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteBundlesRequest$inboundSchema: z.ZodType<DeleteBundlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteBundlesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteBundlesRequest$outboundSchema: z.ZodType<DeleteBundlesRequest$Outbound, z.ZodTypeDef, DeleteBundlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteBundlesRequest$ {
    /** @deprecated use `DeleteBundlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteBundlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteBundlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteBundlesRequest$Outbound, z.ZodTypeDef, DeleteBundlesRequest>;
    /** @deprecated use `DeleteBundlesRequest$Outbound` instead. */
    type Outbound = DeleteBundlesRequest$Outbound;
}
export declare function deleteBundlesRequestToJSON(deleteBundlesRequest: DeleteBundlesRequest): string;
export declare function deleteBundlesRequestFromJSON(jsonString: string): SafeParseResult<DeleteBundlesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteBundlesResponse$inboundSchema: z.ZodType<DeleteBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteBundlesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteBundlesResponse$outboundSchema: z.ZodType<DeleteBundlesResponse$Outbound, z.ZodTypeDef, DeleteBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteBundlesResponse$ {
    /** @deprecated use `DeleteBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteBundlesResponse$Outbound, z.ZodTypeDef, DeleteBundlesResponse>;
    /** @deprecated use `DeleteBundlesResponse$Outbound` instead. */
    type Outbound = DeleteBundlesResponse$Outbound;
}
export declare function deleteBundlesResponseToJSON(deleteBundlesResponse: DeleteBundlesResponse): string;
export declare function deleteBundlesResponseFromJSON(jsonString: string): SafeParseResult<DeleteBundlesResponse, SDKValidationError>;
//# sourceMappingURL=deletebundles.d.ts.map