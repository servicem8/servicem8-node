import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetBundlesRequest = {
    /**
     * UUID of the Bundle
     */
    uuid: string;
};
export type GetBundlesResponse = components.ErrorT | components.MaterialBundle;
/** @internal */
export declare const GetBundlesRequest$inboundSchema: z.ZodType<GetBundlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBundlesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetBundlesRequest$outboundSchema: z.ZodType<GetBundlesRequest$Outbound, z.ZodTypeDef, GetBundlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetBundlesRequest$ {
    /** @deprecated use `GetBundlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetBundlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetBundlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetBundlesRequest$Outbound, z.ZodTypeDef, GetBundlesRequest>;
    /** @deprecated use `GetBundlesRequest$Outbound` instead. */
    type Outbound = GetBundlesRequest$Outbound;
}
export declare function getBundlesRequestToJSON(getBundlesRequest: GetBundlesRequest): string;
export declare function getBundlesRequestFromJSON(jsonString: string): SafeParseResult<GetBundlesRequest, SDKValidationError>;
/** @internal */
export declare const GetBundlesResponse$inboundSchema: z.ZodType<GetBundlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetBundlesResponse$Outbound = components.ErrorT$Outbound | components.MaterialBundle$Outbound;
/** @internal */
export declare const GetBundlesResponse$outboundSchema: z.ZodType<GetBundlesResponse$Outbound, z.ZodTypeDef, GetBundlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetBundlesResponse$ {
    /** @deprecated use `GetBundlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetBundlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetBundlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetBundlesResponse$Outbound, z.ZodTypeDef, GetBundlesResponse>;
    /** @deprecated use `GetBundlesResponse$Outbound` instead. */
    type Outbound = GetBundlesResponse$Outbound;
}
export declare function getBundlesResponseToJSON(getBundlesResponse: GetBundlesResponse): string;
export declare function getBundlesResponseFromJSON(jsonString: string): SafeParseResult<GetBundlesResponse, SDKValidationError>;
//# sourceMappingURL=getbundles.d.ts.map