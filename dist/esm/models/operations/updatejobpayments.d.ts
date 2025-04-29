import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobPaymentsRequest = {
    /**
     * UUID of the Job Payment
     */
    uuid: string;
    /**
     * Job Payment fields to update
     */
    jobPayment: components.JobPaymentInput;
};
export type UpdateJobPaymentsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobPaymentsRequest$inboundSchema: z.ZodType<UpdateJobPaymentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobPaymentsRequest$Outbound = {
    uuid: string;
    JobPayment: components.JobPaymentInput$Outbound;
};
/** @internal */
export declare const UpdateJobPaymentsRequest$outboundSchema: z.ZodType<UpdateJobPaymentsRequest$Outbound, z.ZodTypeDef, UpdateJobPaymentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobPaymentsRequest$ {
    /** @deprecated use `UpdateJobPaymentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobPaymentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobPaymentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobPaymentsRequest$Outbound, z.ZodTypeDef, UpdateJobPaymentsRequest>;
    /** @deprecated use `UpdateJobPaymentsRequest$Outbound` instead. */
    type Outbound = UpdateJobPaymentsRequest$Outbound;
}
export declare function updateJobPaymentsRequestToJSON(updateJobPaymentsRequest: UpdateJobPaymentsRequest): string;
export declare function updateJobPaymentsRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobPaymentsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobPaymentsResponse$inboundSchema: z.ZodType<UpdateJobPaymentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobPaymentsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobPaymentsResponse$outboundSchema: z.ZodType<UpdateJobPaymentsResponse$Outbound, z.ZodTypeDef, UpdateJobPaymentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobPaymentsResponse$ {
    /** @deprecated use `UpdateJobPaymentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobPaymentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobPaymentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobPaymentsResponse$Outbound, z.ZodTypeDef, UpdateJobPaymentsResponse>;
    /** @deprecated use `UpdateJobPaymentsResponse$Outbound` instead. */
    type Outbound = UpdateJobPaymentsResponse$Outbound;
}
export declare function updateJobPaymentsResponseToJSON(updateJobPaymentsResponse: UpdateJobPaymentsResponse): string;
export declare function updateJobPaymentsResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=updatejobpayments.d.ts.map