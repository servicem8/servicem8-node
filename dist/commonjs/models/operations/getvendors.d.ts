import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetVendorsRequest = {
    /**
     * UUID of the Vendor
     */
    uuid: string;
};
export type GetVendorsResponse = components.ErrorT | components.Vendor;
/** @internal */
export declare const GetVendorsRequest$inboundSchema: z.ZodType<GetVendorsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetVendorsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetVendorsRequest$outboundSchema: z.ZodType<GetVendorsRequest$Outbound, z.ZodTypeDef, GetVendorsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetVendorsRequest$ {
    /** @deprecated use `GetVendorsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetVendorsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetVendorsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetVendorsRequest$Outbound, z.ZodTypeDef, GetVendorsRequest>;
    /** @deprecated use `GetVendorsRequest$Outbound` instead. */
    type Outbound = GetVendorsRequest$Outbound;
}
export declare function getVendorsRequestToJSON(getVendorsRequest: GetVendorsRequest): string;
export declare function getVendorsRequestFromJSON(jsonString: string): SafeParseResult<GetVendorsRequest, SDKValidationError>;
/** @internal */
export declare const GetVendorsResponse$inboundSchema: z.ZodType<GetVendorsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetVendorsResponse$Outbound = components.ErrorT$Outbound | components.Vendor$Outbound;
/** @internal */
export declare const GetVendorsResponse$outboundSchema: z.ZodType<GetVendorsResponse$Outbound, z.ZodTypeDef, GetVendorsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetVendorsResponse$ {
    /** @deprecated use `GetVendorsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetVendorsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetVendorsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetVendorsResponse$Outbound, z.ZodTypeDef, GetVendorsResponse>;
    /** @deprecated use `GetVendorsResponse$Outbound` instead. */
    type Outbound = GetVendorsResponse$Outbound;
}
export declare function getVendorsResponseToJSON(getVendorsResponse: GetVendorsResponse): string;
export declare function getVendorsResponseFromJSON(jsonString: string): SafeParseResult<GetVendorsResponse, SDKValidationError>;
//# sourceMappingURL=getvendors.d.ts.map