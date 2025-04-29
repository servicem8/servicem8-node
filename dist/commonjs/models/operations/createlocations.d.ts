import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateLocationsResponseResult = components.Result | components.ErrorT;
export type CreateLocationsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateLocationsResponseResult$inboundSchema: z.ZodType<CreateLocationsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateLocationsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateLocationsResponseResult$outboundSchema: z.ZodType<CreateLocationsResponseResult$Outbound, z.ZodTypeDef, CreateLocationsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateLocationsResponseResult$ {
    /** @deprecated use `CreateLocationsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateLocationsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateLocationsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateLocationsResponseResult$Outbound, z.ZodTypeDef, CreateLocationsResponseResult>;
    /** @deprecated use `CreateLocationsResponseResult$Outbound` instead. */
    type Outbound = CreateLocationsResponseResult$Outbound;
}
export declare function createLocationsResponseResultToJSON(createLocationsResponseResult: CreateLocationsResponseResult): string;
export declare function createLocationsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateLocationsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateLocationsResponse$inboundSchema: z.ZodType<CreateLocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateLocationsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateLocationsResponse$outboundSchema: z.ZodType<CreateLocationsResponse$Outbound, z.ZodTypeDef, CreateLocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateLocationsResponse$ {
    /** @deprecated use `CreateLocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateLocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateLocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateLocationsResponse$Outbound, z.ZodTypeDef, CreateLocationsResponse>;
    /** @deprecated use `CreateLocationsResponse$Outbound` instead. */
    type Outbound = CreateLocationsResponse$Outbound;
}
export declare function createLocationsResponseToJSON(createLocationsResponse: CreateLocationsResponse): string;
export declare function createLocationsResponseFromJSON(jsonString: string): SafeParseResult<CreateLocationsResponse, SDKValidationError>;
//# sourceMappingURL=createlocations.d.ts.map