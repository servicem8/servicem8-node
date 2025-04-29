import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteTaxRatesRequest = {
    /**
     * UUID of the Tax Rate
     */
    uuid: string;
};
export type DeleteTaxRatesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteTaxRatesRequest$inboundSchema: z.ZodType<DeleteTaxRatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTaxRatesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteTaxRatesRequest$outboundSchema: z.ZodType<DeleteTaxRatesRequest$Outbound, z.ZodTypeDef, DeleteTaxRatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteTaxRatesRequest$ {
    /** @deprecated use `DeleteTaxRatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteTaxRatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteTaxRatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteTaxRatesRequest$Outbound, z.ZodTypeDef, DeleteTaxRatesRequest>;
    /** @deprecated use `DeleteTaxRatesRequest$Outbound` instead. */
    type Outbound = DeleteTaxRatesRequest$Outbound;
}
export declare function deleteTaxRatesRequestToJSON(deleteTaxRatesRequest: DeleteTaxRatesRequest): string;
export declare function deleteTaxRatesRequestFromJSON(jsonString: string): SafeParseResult<DeleteTaxRatesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteTaxRatesResponse$inboundSchema: z.ZodType<DeleteTaxRatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteTaxRatesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteTaxRatesResponse$outboundSchema: z.ZodType<DeleteTaxRatesResponse$Outbound, z.ZodTypeDef, DeleteTaxRatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteTaxRatesResponse$ {
    /** @deprecated use `DeleteTaxRatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteTaxRatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteTaxRatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteTaxRatesResponse$Outbound, z.ZodTypeDef, DeleteTaxRatesResponse>;
    /** @deprecated use `DeleteTaxRatesResponse$Outbound` instead. */
    type Outbound = DeleteTaxRatesResponse$Outbound;
}
export declare function deleteTaxRatesResponseToJSON(deleteTaxRatesResponse: DeleteTaxRatesResponse): string;
export declare function deleteTaxRatesResponseFromJSON(jsonString: string): SafeParseResult<DeleteTaxRatesResponse, SDKValidationError>;
//# sourceMappingURL=deletetaxrates.d.ts.map