import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateClientsRequest = {
    /**
     * UUID of the Client
     */
    uuid: string;
    /**
     * Client fields to update
     */
    company: components.CompanyInput;
};
export type UpdateClientsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateClientsRequest$inboundSchema: z.ZodType<UpdateClientsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateClientsRequest$Outbound = {
    uuid: string;
    Company: components.CompanyInput$Outbound;
};
/** @internal */
export declare const UpdateClientsRequest$outboundSchema: z.ZodType<UpdateClientsRequest$Outbound, z.ZodTypeDef, UpdateClientsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateClientsRequest$ {
    /** @deprecated use `UpdateClientsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateClientsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateClientsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateClientsRequest$Outbound, z.ZodTypeDef, UpdateClientsRequest>;
    /** @deprecated use `UpdateClientsRequest$Outbound` instead. */
    type Outbound = UpdateClientsRequest$Outbound;
}
export declare function updateClientsRequestToJSON(updateClientsRequest: UpdateClientsRequest): string;
export declare function updateClientsRequestFromJSON(jsonString: string): SafeParseResult<UpdateClientsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateClientsResponse$inboundSchema: z.ZodType<UpdateClientsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateClientsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateClientsResponse$outboundSchema: z.ZodType<UpdateClientsResponse$Outbound, z.ZodTypeDef, UpdateClientsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateClientsResponse$ {
    /** @deprecated use `UpdateClientsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateClientsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateClientsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateClientsResponse$Outbound, z.ZodTypeDef, UpdateClientsResponse>;
    /** @deprecated use `UpdateClientsResponse$Outbound` instead. */
    type Outbound = UpdateClientsResponse$Outbound;
}
export declare function updateClientsResponseToJSON(updateClientsResponse: UpdateClientsResponse): string;
export declare function updateClientsResponseFromJSON(jsonString: string): SafeParseResult<UpdateClientsResponse, SDKValidationError>;
//# sourceMappingURL=updateclients.d.ts.map