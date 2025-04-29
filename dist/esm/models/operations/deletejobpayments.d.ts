import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobPaymentsRequest = {
    /**
     * UUID of the Job Payment
     */
    uuid: string;
};
export type DeleteJobPaymentsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobPaymentsRequest$inboundSchema: z.ZodType<DeleteJobPaymentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobPaymentsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobPaymentsRequest$outboundSchema: z.ZodType<DeleteJobPaymentsRequest$Outbound, z.ZodTypeDef, DeleteJobPaymentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobPaymentsRequest$ {
    /** @deprecated use `DeleteJobPaymentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobPaymentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobPaymentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobPaymentsRequest$Outbound, z.ZodTypeDef, DeleteJobPaymentsRequest>;
    /** @deprecated use `DeleteJobPaymentsRequest$Outbound` instead. */
    type Outbound = DeleteJobPaymentsRequest$Outbound;
}
export declare function deleteJobPaymentsRequestToJSON(deleteJobPaymentsRequest: DeleteJobPaymentsRequest): string;
export declare function deleteJobPaymentsRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobPaymentsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobPaymentsResponse$inboundSchema: z.ZodType<DeleteJobPaymentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobPaymentsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobPaymentsResponse$outboundSchema: z.ZodType<DeleteJobPaymentsResponse$Outbound, z.ZodTypeDef, DeleteJobPaymentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobPaymentsResponse$ {
    /** @deprecated use `DeleteJobPaymentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobPaymentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobPaymentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobPaymentsResponse$Outbound, z.ZodTypeDef, DeleteJobPaymentsResponse>;
    /** @deprecated use `DeleteJobPaymentsResponse$Outbound` instead. */
    type Outbound = DeleteJobPaymentsResponse$Outbound;
}
export declare function deleteJobPaymentsResponseToJSON(deleteJobPaymentsResponse: DeleteJobPaymentsResponse): string;
export declare function deleteJobPaymentsResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=deletejobpayments.d.ts.map