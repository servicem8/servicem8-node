import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateLocationsRequest = {
    /**
     * UUID of the Location
     */
    uuid: string;
    /**
     * Location fields to update
     */
    location: components.LocationInput;
};
export type UpdateLocationsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateLocationsRequest$inboundSchema: z.ZodType<UpdateLocationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateLocationsRequest$Outbound = {
    uuid: string;
    Location: components.LocationInput$Outbound;
};
/** @internal */
export declare const UpdateLocationsRequest$outboundSchema: z.ZodType<UpdateLocationsRequest$Outbound, z.ZodTypeDef, UpdateLocationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateLocationsRequest$ {
    /** @deprecated use `UpdateLocationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateLocationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateLocationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateLocationsRequest$Outbound, z.ZodTypeDef, UpdateLocationsRequest>;
    /** @deprecated use `UpdateLocationsRequest$Outbound` instead. */
    type Outbound = UpdateLocationsRequest$Outbound;
}
export declare function updateLocationsRequestToJSON(updateLocationsRequest: UpdateLocationsRequest): string;
export declare function updateLocationsRequestFromJSON(jsonString: string): SafeParseResult<UpdateLocationsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateLocationsResponse$inboundSchema: z.ZodType<UpdateLocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateLocationsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateLocationsResponse$outboundSchema: z.ZodType<UpdateLocationsResponse$Outbound, z.ZodTypeDef, UpdateLocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateLocationsResponse$ {
    /** @deprecated use `UpdateLocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateLocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateLocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateLocationsResponse$Outbound, z.ZodTypeDef, UpdateLocationsResponse>;
    /** @deprecated use `UpdateLocationsResponse$Outbound` instead. */
    type Outbound = UpdateLocationsResponse$Outbound;
}
export declare function updateLocationsResponseToJSON(updateLocationsResponse: UpdateLocationsResponse): string;
export declare function updateLocationsResponseFromJSON(jsonString: string): SafeParseResult<UpdateLocationsResponse, SDKValidationError>;
//# sourceMappingURL=updatelocations.d.ts.map