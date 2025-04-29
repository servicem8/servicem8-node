import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateTaxRatesRequest = {
    /**
     * UUID of the Tax Rate
     */
    uuid: string;
    /**
     * Tax Rate fields to update
     */
    taxRate: components.TaxRateInput;
};
export type UpdateTaxRatesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateTaxRatesRequest$inboundSchema: z.ZodType<UpdateTaxRatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTaxRatesRequest$Outbound = {
    uuid: string;
    TaxRate: components.TaxRateInput$Outbound;
};
/** @internal */
export declare const UpdateTaxRatesRequest$outboundSchema: z.ZodType<UpdateTaxRatesRequest$Outbound, z.ZodTypeDef, UpdateTaxRatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateTaxRatesRequest$ {
    /** @deprecated use `UpdateTaxRatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateTaxRatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateTaxRatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateTaxRatesRequest$Outbound, z.ZodTypeDef, UpdateTaxRatesRequest>;
    /** @deprecated use `UpdateTaxRatesRequest$Outbound` instead. */
    type Outbound = UpdateTaxRatesRequest$Outbound;
}
export declare function updateTaxRatesRequestToJSON(updateTaxRatesRequest: UpdateTaxRatesRequest): string;
export declare function updateTaxRatesRequestFromJSON(jsonString: string): SafeParseResult<UpdateTaxRatesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateTaxRatesResponse$inboundSchema: z.ZodType<UpdateTaxRatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateTaxRatesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateTaxRatesResponse$outboundSchema: z.ZodType<UpdateTaxRatesResponse$Outbound, z.ZodTypeDef, UpdateTaxRatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateTaxRatesResponse$ {
    /** @deprecated use `UpdateTaxRatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateTaxRatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateTaxRatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateTaxRatesResponse$Outbound, z.ZodTypeDef, UpdateTaxRatesResponse>;
    /** @deprecated use `UpdateTaxRatesResponse$Outbound` instead. */
    type Outbound = UpdateTaxRatesResponse$Outbound;
}
export declare function updateTaxRatesResponseToJSON(updateTaxRatesResponse: UpdateTaxRatesResponse): string;
export declare function updateTaxRatesResponseFromJSON(jsonString: string): SafeParseResult<UpdateTaxRatesResponse, SDKValidationError>;
//# sourceMappingURL=updatetaxrates.d.ts.map