import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobPaymentsRequest = {
    /**
     * UUID of the Job Payment
     */
    uuid: string;
};
export type GetJobPaymentsResponse = components.ErrorT | components.JobPayment;
/** @internal */
export declare const GetJobPaymentsRequest$inboundSchema: z.ZodType<GetJobPaymentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobPaymentsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobPaymentsRequest$outboundSchema: z.ZodType<GetJobPaymentsRequest$Outbound, z.ZodTypeDef, GetJobPaymentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobPaymentsRequest$ {
    /** @deprecated use `GetJobPaymentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobPaymentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobPaymentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobPaymentsRequest$Outbound, z.ZodTypeDef, GetJobPaymentsRequest>;
    /** @deprecated use `GetJobPaymentsRequest$Outbound` instead. */
    type Outbound = GetJobPaymentsRequest$Outbound;
}
export declare function getJobPaymentsRequestToJSON(getJobPaymentsRequest: GetJobPaymentsRequest): string;
export declare function getJobPaymentsRequestFromJSON(jsonString: string): SafeParseResult<GetJobPaymentsRequest, SDKValidationError>;
/** @internal */
export declare const GetJobPaymentsResponse$inboundSchema: z.ZodType<GetJobPaymentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobPaymentsResponse$Outbound = components.ErrorT$Outbound | components.JobPayment$Outbound;
/** @internal */
export declare const GetJobPaymentsResponse$outboundSchema: z.ZodType<GetJobPaymentsResponse$Outbound, z.ZodTypeDef, GetJobPaymentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobPaymentsResponse$ {
    /** @deprecated use `GetJobPaymentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobPaymentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobPaymentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobPaymentsResponse$Outbound, z.ZodTypeDef, GetJobPaymentsResponse>;
    /** @deprecated use `GetJobPaymentsResponse$Outbound` instead. */
    type Outbound = GetJobPaymentsResponse$Outbound;
}
export declare function getJobPaymentsResponseToJSON(getJobPaymentsResponse: GetJobPaymentsResponse): string;
export declare function getJobPaymentsResponseFromJSON(jsonString: string): SafeParseResult<GetJobPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=getjobpayments.d.ts.map