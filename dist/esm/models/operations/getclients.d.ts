import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetClientsRequest = {
    /**
     * UUID of the Client
     */
    uuid: string;
};
export type GetClientsResponse = components.ErrorT | components.Company;
/** @internal */
export declare const GetClientsRequest$inboundSchema: z.ZodType<GetClientsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetClientsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetClientsRequest$outboundSchema: z.ZodType<GetClientsRequest$Outbound, z.ZodTypeDef, GetClientsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetClientsRequest$ {
    /** @deprecated use `GetClientsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetClientsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetClientsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetClientsRequest$Outbound, z.ZodTypeDef, GetClientsRequest>;
    /** @deprecated use `GetClientsRequest$Outbound` instead. */
    type Outbound = GetClientsRequest$Outbound;
}
export declare function getClientsRequestToJSON(getClientsRequest: GetClientsRequest): string;
export declare function getClientsRequestFromJSON(jsonString: string): SafeParseResult<GetClientsRequest, SDKValidationError>;
/** @internal */
export declare const GetClientsResponse$inboundSchema: z.ZodType<GetClientsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetClientsResponse$Outbound = components.ErrorT$Outbound | components.Company$Outbound;
/** @internal */
export declare const GetClientsResponse$outboundSchema: z.ZodType<GetClientsResponse$Outbound, z.ZodTypeDef, GetClientsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetClientsResponse$ {
    /** @deprecated use `GetClientsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetClientsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetClientsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetClientsResponse$Outbound, z.ZodTypeDef, GetClientsResponse>;
    /** @deprecated use `GetClientsResponse$Outbound` instead. */
    type Outbound = GetClientsResponse$Outbound;
}
export declare function getClientsResponseToJSON(getClientsResponse: GetClientsResponse): string;
export declare function getClientsResponseFromJSON(jsonString: string): SafeParseResult<GetClientsResponse, SDKValidationError>;
//# sourceMappingURL=getclients.d.ts.map