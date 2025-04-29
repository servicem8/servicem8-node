import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteClientsRequest = {
    /**
     * UUID of the Client
     */
    uuid: string;
};
export type DeleteClientsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteClientsRequest$inboundSchema: z.ZodType<DeleteClientsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteClientsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteClientsRequest$outboundSchema: z.ZodType<DeleteClientsRequest$Outbound, z.ZodTypeDef, DeleteClientsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteClientsRequest$ {
    /** @deprecated use `DeleteClientsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteClientsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteClientsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteClientsRequest$Outbound, z.ZodTypeDef, DeleteClientsRequest>;
    /** @deprecated use `DeleteClientsRequest$Outbound` instead. */
    type Outbound = DeleteClientsRequest$Outbound;
}
export declare function deleteClientsRequestToJSON(deleteClientsRequest: DeleteClientsRequest): string;
export declare function deleteClientsRequestFromJSON(jsonString: string): SafeParseResult<DeleteClientsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteClientsResponse$inboundSchema: z.ZodType<DeleteClientsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteClientsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteClientsResponse$outboundSchema: z.ZodType<DeleteClientsResponse$Outbound, z.ZodTypeDef, DeleteClientsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteClientsResponse$ {
    /** @deprecated use `DeleteClientsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteClientsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteClientsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteClientsResponse$Outbound, z.ZodTypeDef, DeleteClientsResponse>;
    /** @deprecated use `DeleteClientsResponse$Outbound` instead. */
    type Outbound = DeleteClientsResponse$Outbound;
}
export declare function deleteClientsResponseToJSON(deleteClientsResponse: DeleteClientsResponse): string;
export declare function deleteClientsResponseFromJSON(jsonString: string): SafeParseResult<DeleteClientsResponse, SDKValidationError>;
//# sourceMappingURL=deleteclients.d.ts.map