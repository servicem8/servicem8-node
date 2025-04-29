import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateVendorsRequest = {
    /**
     * UUID of the Vendor
     */
    uuid: string;
    /**
     * Vendor fields to update
     */
    vendor: components.VendorInput;
};
export type UpdateVendorsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateVendorsRequest$inboundSchema: z.ZodType<UpdateVendorsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateVendorsRequest$Outbound = {
    uuid: string;
    Vendor: components.VendorInput$Outbound;
};
/** @internal */
export declare const UpdateVendorsRequest$outboundSchema: z.ZodType<UpdateVendorsRequest$Outbound, z.ZodTypeDef, UpdateVendorsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateVendorsRequest$ {
    /** @deprecated use `UpdateVendorsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateVendorsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateVendorsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateVendorsRequest$Outbound, z.ZodTypeDef, UpdateVendorsRequest>;
    /** @deprecated use `UpdateVendorsRequest$Outbound` instead. */
    type Outbound = UpdateVendorsRequest$Outbound;
}
export declare function updateVendorsRequestToJSON(updateVendorsRequest: UpdateVendorsRequest): string;
export declare function updateVendorsRequestFromJSON(jsonString: string): SafeParseResult<UpdateVendorsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateVendorsResponse$inboundSchema: z.ZodType<UpdateVendorsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateVendorsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateVendorsResponse$outboundSchema: z.ZodType<UpdateVendorsResponse$Outbound, z.ZodTypeDef, UpdateVendorsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateVendorsResponse$ {
    /** @deprecated use `UpdateVendorsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateVendorsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateVendorsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateVendorsResponse$Outbound, z.ZodTypeDef, UpdateVendorsResponse>;
    /** @deprecated use `UpdateVendorsResponse$Outbound` instead. */
    type Outbound = UpdateVendorsResponse$Outbound;
}
export declare function updateVendorsResponseToJSON(updateVendorsResponse: UpdateVendorsResponse): string;
export declare function updateVendorsResponseFromJSON(jsonString: string): SafeParseResult<UpdateVendorsResponse, SDKValidationError>;
//# sourceMappingURL=updatevendors.d.ts.map