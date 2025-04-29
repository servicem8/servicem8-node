import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateClientsResponseResult = components.Result | components.ErrorT;
export type CreateClientsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateClientsResponseResult$inboundSchema: z.ZodType<CreateClientsResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateClientsResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateClientsResponseResult$outboundSchema: z.ZodType<CreateClientsResponseResult$Outbound, z.ZodTypeDef, CreateClientsResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateClientsResponseResult$ {
    /** @deprecated use `CreateClientsResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateClientsResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateClientsResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateClientsResponseResult$Outbound, z.ZodTypeDef, CreateClientsResponseResult>;
    /** @deprecated use `CreateClientsResponseResult$Outbound` instead. */
    type Outbound = CreateClientsResponseResult$Outbound;
}
export declare function createClientsResponseResultToJSON(createClientsResponseResult: CreateClientsResponseResult): string;
export declare function createClientsResponseResultFromJSON(jsonString: string): SafeParseResult<CreateClientsResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateClientsResponse$inboundSchema: z.ZodType<CreateClientsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateClientsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateClientsResponse$outboundSchema: z.ZodType<CreateClientsResponse$Outbound, z.ZodTypeDef, CreateClientsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateClientsResponse$ {
    /** @deprecated use `CreateClientsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateClientsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateClientsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateClientsResponse$Outbound, z.ZodTypeDef, CreateClientsResponse>;
    /** @deprecated use `CreateClientsResponse$Outbound` instead. */
    type Outbound = CreateClientsResponse$Outbound;
}
export declare function createClientsResponseToJSON(createClientsResponse: CreateClientsResponse): string;
export declare function createClientsResponseFromJSON(jsonString: string): SafeParseResult<CreateClientsResponse, SDKValidationError>;
//# sourceMappingURL=createclients.d.ts.map