import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetLocationsRequest = {
    /**
     * UUID of the Location
     */
    uuid: string;
};
export type GetLocationsResponse = components.ErrorT | components.Location;
/** @internal */
export declare const GetLocationsRequest$inboundSchema: z.ZodType<GetLocationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetLocationsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetLocationsRequest$outboundSchema: z.ZodType<GetLocationsRequest$Outbound, z.ZodTypeDef, GetLocationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetLocationsRequest$ {
    /** @deprecated use `GetLocationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetLocationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetLocationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetLocationsRequest$Outbound, z.ZodTypeDef, GetLocationsRequest>;
    /** @deprecated use `GetLocationsRequest$Outbound` instead. */
    type Outbound = GetLocationsRequest$Outbound;
}
export declare function getLocationsRequestToJSON(getLocationsRequest: GetLocationsRequest): string;
export declare function getLocationsRequestFromJSON(jsonString: string): SafeParseResult<GetLocationsRequest, SDKValidationError>;
/** @internal */
export declare const GetLocationsResponse$inboundSchema: z.ZodType<GetLocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetLocationsResponse$Outbound = components.ErrorT$Outbound | components.Location$Outbound;
/** @internal */
export declare const GetLocationsResponse$outboundSchema: z.ZodType<GetLocationsResponse$Outbound, z.ZodTypeDef, GetLocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetLocationsResponse$ {
    /** @deprecated use `GetLocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetLocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetLocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetLocationsResponse$Outbound, z.ZodTypeDef, GetLocationsResponse>;
    /** @deprecated use `GetLocationsResponse$Outbound` instead. */
    type Outbound = GetLocationsResponse$Outbound;
}
export declare function getLocationsResponseToJSON(getLocationsResponse: GetLocationsResponse): string;
export declare function getLocationsResponseFromJSON(jsonString: string): SafeParseResult<GetLocationsResponse, SDKValidationError>;
//# sourceMappingURL=getlocations.d.ts.map