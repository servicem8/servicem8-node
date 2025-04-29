import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteLocationsRequest = {
    /**
     * UUID of the Location
     */
    uuid: string;
};
export type DeleteLocationsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteLocationsRequest$inboundSchema: z.ZodType<DeleteLocationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteLocationsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteLocationsRequest$outboundSchema: z.ZodType<DeleteLocationsRequest$Outbound, z.ZodTypeDef, DeleteLocationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteLocationsRequest$ {
    /** @deprecated use `DeleteLocationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteLocationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteLocationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteLocationsRequest$Outbound, z.ZodTypeDef, DeleteLocationsRequest>;
    /** @deprecated use `DeleteLocationsRequest$Outbound` instead. */
    type Outbound = DeleteLocationsRequest$Outbound;
}
export declare function deleteLocationsRequestToJSON(deleteLocationsRequest: DeleteLocationsRequest): string;
export declare function deleteLocationsRequestFromJSON(jsonString: string): SafeParseResult<DeleteLocationsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteLocationsResponse$inboundSchema: z.ZodType<DeleteLocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteLocationsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteLocationsResponse$outboundSchema: z.ZodType<DeleteLocationsResponse$Outbound, z.ZodTypeDef, DeleteLocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteLocationsResponse$ {
    /** @deprecated use `DeleteLocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteLocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteLocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteLocationsResponse$Outbound, z.ZodTypeDef, DeleteLocationsResponse>;
    /** @deprecated use `DeleteLocationsResponse$Outbound` instead. */
    type Outbound = DeleteLocationsResponse$Outbound;
}
export declare function deleteLocationsResponseToJSON(deleteLocationsResponse: DeleteLocationsResponse): string;
export declare function deleteLocationsResponseFromJSON(jsonString: string): SafeParseResult<DeleteLocationsResponse, SDKValidationError>;
//# sourceMappingURL=deletelocations.d.ts.map