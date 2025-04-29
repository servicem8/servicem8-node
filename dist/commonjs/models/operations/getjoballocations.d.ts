import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetJobAllocationsRequest = {
    /**
     * UUID of the Job Allocation
     */
    uuid: string;
};
export type GetJobAllocationsResponse = components.ErrorT | components.JobAllocation;
/** @internal */
export declare const GetJobAllocationsRequest$inboundSchema: z.ZodType<GetJobAllocationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobAllocationsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetJobAllocationsRequest$outboundSchema: z.ZodType<GetJobAllocationsRequest$Outbound, z.ZodTypeDef, GetJobAllocationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobAllocationsRequest$ {
    /** @deprecated use `GetJobAllocationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobAllocationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobAllocationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobAllocationsRequest$Outbound, z.ZodTypeDef, GetJobAllocationsRequest>;
    /** @deprecated use `GetJobAllocationsRequest$Outbound` instead. */
    type Outbound = GetJobAllocationsRequest$Outbound;
}
export declare function getJobAllocationsRequestToJSON(getJobAllocationsRequest: GetJobAllocationsRequest): string;
export declare function getJobAllocationsRequestFromJSON(jsonString: string): SafeParseResult<GetJobAllocationsRequest, SDKValidationError>;
/** @internal */
export declare const GetJobAllocationsResponse$inboundSchema: z.ZodType<GetJobAllocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetJobAllocationsResponse$Outbound = components.ErrorT$Outbound | components.JobAllocation$Outbound;
/** @internal */
export declare const GetJobAllocationsResponse$outboundSchema: z.ZodType<GetJobAllocationsResponse$Outbound, z.ZodTypeDef, GetJobAllocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetJobAllocationsResponse$ {
    /** @deprecated use `GetJobAllocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetJobAllocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetJobAllocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetJobAllocationsResponse$Outbound, z.ZodTypeDef, GetJobAllocationsResponse>;
    /** @deprecated use `GetJobAllocationsResponse$Outbound` instead. */
    type Outbound = GetJobAllocationsResponse$Outbound;
}
export declare function getJobAllocationsResponseToJSON(getJobAllocationsResponse: GetJobAllocationsResponse): string;
export declare function getJobAllocationsResponseFromJSON(jsonString: string): SafeParseResult<GetJobAllocationsResponse, SDKValidationError>;
//# sourceMappingURL=getjoballocations.d.ts.map