import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListTaxRatesResponse = components.ErrorT | Array<components.TaxRate>;
/** @internal */
export declare const ListTaxRatesResponse$inboundSchema: z.ZodType<ListTaxRatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListTaxRatesResponse$Outbound = components.ErrorT$Outbound | Array<components.TaxRate$Outbound>;
/** @internal */
export declare const ListTaxRatesResponse$outboundSchema: z.ZodType<ListTaxRatesResponse$Outbound, z.ZodTypeDef, ListTaxRatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListTaxRatesResponse$ {
    /** @deprecated use `ListTaxRatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListTaxRatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListTaxRatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListTaxRatesResponse$Outbound, z.ZodTypeDef, ListTaxRatesResponse>;
    /** @deprecated use `ListTaxRatesResponse$Outbound` instead. */
    type Outbound = ListTaxRatesResponse$Outbound;
}
export declare function listTaxRatesResponseToJSON(listTaxRatesResponse: ListTaxRatesResponse): string;
export declare function listTaxRatesResponseFromJSON(jsonString: string): SafeParseResult<ListTaxRatesResponse, SDKValidationError>;
//# sourceMappingURL=listtaxrates.d.ts.map