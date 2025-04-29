import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateJobAllocationsRequest = {
    /**
     * UUID of the Job Allocation
     */
    uuid: string;
    /**
     * Job Allocation fields to update
     */
    jobAllocation: components.JobAllocationInput;
};
export type UpdateJobAllocationsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateJobAllocationsRequest$inboundSchema: z.ZodType<UpdateJobAllocationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobAllocationsRequest$Outbound = {
    uuid: string;
    JobAllocation: components.JobAllocationInput$Outbound;
};
/** @internal */
export declare const UpdateJobAllocationsRequest$outboundSchema: z.ZodType<UpdateJobAllocationsRequest$Outbound, z.ZodTypeDef, UpdateJobAllocationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobAllocationsRequest$ {
    /** @deprecated use `UpdateJobAllocationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobAllocationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobAllocationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobAllocationsRequest$Outbound, z.ZodTypeDef, UpdateJobAllocationsRequest>;
    /** @deprecated use `UpdateJobAllocationsRequest$Outbound` instead. */
    type Outbound = UpdateJobAllocationsRequest$Outbound;
}
export declare function updateJobAllocationsRequestToJSON(updateJobAllocationsRequest: UpdateJobAllocationsRequest): string;
export declare function updateJobAllocationsRequestFromJSON(jsonString: string): SafeParseResult<UpdateJobAllocationsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateJobAllocationsResponse$inboundSchema: z.ZodType<UpdateJobAllocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateJobAllocationsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateJobAllocationsResponse$outboundSchema: z.ZodType<UpdateJobAllocationsResponse$Outbound, z.ZodTypeDef, UpdateJobAllocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateJobAllocationsResponse$ {
    /** @deprecated use `UpdateJobAllocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateJobAllocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateJobAllocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateJobAllocationsResponse$Outbound, z.ZodTypeDef, UpdateJobAllocationsResponse>;
    /** @deprecated use `UpdateJobAllocationsResponse$Outbound` instead. */
    type Outbound = UpdateJobAllocationsResponse$Outbound;
}
export declare function updateJobAllocationsResponseToJSON(updateJobAllocationsResponse: UpdateJobAllocationsResponse): string;
export declare function updateJobAllocationsResponseFromJSON(jsonString: string): SafeParseResult<UpdateJobAllocationsResponse, SDKValidationError>;
//# sourceMappingURL=updatejoballocations.d.ts.map