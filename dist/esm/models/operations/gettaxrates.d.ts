import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetTaxRatesRequest = {
    /**
     * UUID of the Tax Rate
     */
    uuid: string;
};
export type GetTaxRatesResponse = components.ErrorT | components.TaxRate;
/** @internal */
export declare const GetTaxRatesRequest$inboundSchema: z.ZodType<GetTaxRatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTaxRatesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetTaxRatesRequest$outboundSchema: z.ZodType<GetTaxRatesRequest$Outbound, z.ZodTypeDef, GetTaxRatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetTaxRatesRequest$ {
    /** @deprecated use `GetTaxRatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetTaxRatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetTaxRatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetTaxRatesRequest$Outbound, z.ZodTypeDef, GetTaxRatesRequest>;
    /** @deprecated use `GetTaxRatesRequest$Outbound` instead. */
    type Outbound = GetTaxRatesRequest$Outbound;
}
export declare function getTaxRatesRequestToJSON(getTaxRatesRequest: GetTaxRatesRequest): string;
export declare function getTaxRatesRequestFromJSON(jsonString: string): SafeParseResult<GetTaxRatesRequest, SDKValidationError>;
/** @internal */
export declare const GetTaxRatesResponse$inboundSchema: z.ZodType<GetTaxRatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTaxRatesResponse$Outbound = components.ErrorT$Outbound | components.TaxRate$Outbound;
/** @internal */
export declare const GetTaxRatesResponse$outboundSchema: z.ZodType<GetTaxRatesResponse$Outbound, z.ZodTypeDef, GetTaxRatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetTaxRatesResponse$ {
    /** @deprecated use `GetTaxRatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetTaxRatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetTaxRatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetTaxRatesResponse$Outbound, z.ZodTypeDef, GetTaxRatesResponse>;
    /** @deprecated use `GetTaxRatesResponse$Outbound` instead. */
    type Outbound = GetTaxRatesResponse$Outbound;
}
export declare function getTaxRatesResponseToJSON(getTaxRatesResponse: GetTaxRatesResponse): string;
export declare function getTaxRatesResponseFromJSON(jsonString: string): SafeParseResult<GetTaxRatesResponse, SDKValidationError>;
//# sourceMappingURL=gettaxrates.d.ts.map