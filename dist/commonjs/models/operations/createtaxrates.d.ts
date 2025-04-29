import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateTaxRatesResponseResult = components.Result | components.ErrorT;
export type CreateTaxRatesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateTaxRatesResponseResult$inboundSchema: z.ZodType<CreateTaxRatesResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateTaxRatesResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateTaxRatesResponseResult$outboundSchema: z.ZodType<CreateTaxRatesResponseResult$Outbound, z.ZodTypeDef, CreateTaxRatesResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateTaxRatesResponseResult$ {
    /** @deprecated use `CreateTaxRatesResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateTaxRatesResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateTaxRatesResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateTaxRatesResponseResult$Outbound, z.ZodTypeDef, CreateTaxRatesResponseResult>;
    /** @deprecated use `CreateTaxRatesResponseResult$Outbound` instead. */
    type Outbound = CreateTaxRatesResponseResult$Outbound;
}
export declare function createTaxRatesResponseResultToJSON(createTaxRatesResponseResult: CreateTaxRatesResponseResult): string;
export declare function createTaxRatesResponseResultFromJSON(jsonString: string): SafeParseResult<CreateTaxRatesResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateTaxRatesResponse$inboundSchema: z.ZodType<CreateTaxRatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateTaxRatesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateTaxRatesResponse$outboundSchema: z.ZodType<CreateTaxRatesResponse$Outbound, z.ZodTypeDef, CreateTaxRatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateTaxRatesResponse$ {
    /** @deprecated use `CreateTaxRatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateTaxRatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateTaxRatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateTaxRatesResponse$Outbound, z.ZodTypeDef, CreateTaxRatesResponse>;
    /** @deprecated use `CreateTaxRatesResponse$Outbound` instead. */
    type Outbound = CreateTaxRatesResponse$Outbound;
}
export declare function createTaxRatesResponseToJSON(createTaxRatesResponse: CreateTaxRatesResponse): string;
export declare function createTaxRatesResponseFromJSON(jsonString: string): SafeParseResult<CreateTaxRatesResponse, SDKValidationError>;
//# sourceMappingURL=createtaxrates.d.ts.map