import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobPaymentsResponse = components.ErrorT | Array<components.JobPayment>;
/** @internal */
export declare const ListJobPaymentsResponse$inboundSchema: z.ZodType<ListJobPaymentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobPaymentsResponse$Outbound = components.ErrorT$Outbound | Array<components.JobPayment$Outbound>;
/** @internal */
export declare const ListJobPaymentsResponse$outboundSchema: z.ZodType<ListJobPaymentsResponse$Outbound, z.ZodTypeDef, ListJobPaymentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobPaymentsResponse$ {
    /** @deprecated use `ListJobPaymentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobPaymentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobPaymentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobPaymentsResponse$Outbound, z.ZodTypeDef, ListJobPaymentsResponse>;
    /** @deprecated use `ListJobPaymentsResponse$Outbound` instead. */
    type Outbound = ListJobPaymentsResponse$Outbound;
}
export declare function listJobPaymentsResponseToJSON(listJobPaymentsResponse: ListJobPaymentsResponse): string;
export declare function listJobPaymentsResponseFromJSON(jsonString: string): SafeParseResult<ListJobPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=listjobpayments.d.ts.map