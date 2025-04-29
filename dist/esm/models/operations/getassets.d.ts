import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetAssetsRequest = {
    /**
     * UUID of the Asset
     */
    uuid: string;
};
export type GetAssetsResponse = components.ErrorT | components.Asset;
/** @internal */
export declare const GetAssetsRequest$inboundSchema: z.ZodType<GetAssetsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAssetsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetAssetsRequest$outboundSchema: z.ZodType<GetAssetsRequest$Outbound, z.ZodTypeDef, GetAssetsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAssetsRequest$ {
    /** @deprecated use `GetAssetsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAssetsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAssetsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAssetsRequest$Outbound, z.ZodTypeDef, GetAssetsRequest>;
    /** @deprecated use `GetAssetsRequest$Outbound` instead. */
    type Outbound = GetAssetsRequest$Outbound;
}
export declare function getAssetsRequestToJSON(getAssetsRequest: GetAssetsRequest): string;
export declare function getAssetsRequestFromJSON(jsonString: string): SafeParseResult<GetAssetsRequest, SDKValidationError>;
/** @internal */
export declare const GetAssetsResponse$inboundSchema: z.ZodType<GetAssetsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAssetsResponse$Outbound = components.ErrorT$Outbound | components.Asset$Outbound;
/** @internal */
export declare const GetAssetsResponse$outboundSchema: z.ZodType<GetAssetsResponse$Outbound, z.ZodTypeDef, GetAssetsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAssetsResponse$ {
    /** @deprecated use `GetAssetsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAssetsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAssetsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAssetsResponse$Outbound, z.ZodTypeDef, GetAssetsResponse>;
    /** @deprecated use `GetAssetsResponse$Outbound` instead. */
    type Outbound = GetAssetsResponse$Outbound;
}
export declare function getAssetsResponseToJSON(getAssetsResponse: GetAssetsResponse): string;
export declare function getAssetsResponseFromJSON(jsonString: string): SafeParseResult<GetAssetsResponse, SDKValidationError>;
//# sourceMappingURL=getassets.d.ts.map