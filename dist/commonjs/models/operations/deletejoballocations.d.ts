import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteJobAllocationsRequest = {
    /**
     * UUID of the Job Allocation
     */
    uuid: string;
};
export type DeleteJobAllocationsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteJobAllocationsRequest$inboundSchema: z.ZodType<DeleteJobAllocationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobAllocationsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteJobAllocationsRequest$outboundSchema: z.ZodType<DeleteJobAllocationsRequest$Outbound, z.ZodTypeDef, DeleteJobAllocationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobAllocationsRequest$ {
    /** @deprecated use `DeleteJobAllocationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobAllocationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobAllocationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobAllocationsRequest$Outbound, z.ZodTypeDef, DeleteJobAllocationsRequest>;
    /** @deprecated use `DeleteJobAllocationsRequest$Outbound` instead. */
    type Outbound = DeleteJobAllocationsRequest$Outbound;
}
export declare function deleteJobAllocationsRequestToJSON(deleteJobAllocationsRequest: DeleteJobAllocationsRequest): string;
export declare function deleteJobAllocationsRequestFromJSON(jsonString: string): SafeParseResult<DeleteJobAllocationsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteJobAllocationsResponse$inboundSchema: z.ZodType<DeleteJobAllocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteJobAllocationsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteJobAllocationsResponse$outboundSchema: z.ZodType<DeleteJobAllocationsResponse$Outbound, z.ZodTypeDef, DeleteJobAllocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteJobAllocationsResponse$ {
    /** @deprecated use `DeleteJobAllocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteJobAllocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteJobAllocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteJobAllocationsResponse$Outbound, z.ZodTypeDef, DeleteJobAllocationsResponse>;
    /** @deprecated use `DeleteJobAllocationsResponse$Outbound` instead. */
    type Outbound = DeleteJobAllocationsResponse$Outbound;
}
export declare function deleteJobAllocationsResponseToJSON(deleteJobAllocationsResponse: DeleteJobAllocationsResponse): string;
export declare function deleteJobAllocationsResponseFromJSON(jsonString: string): SafeParseResult<DeleteJobAllocationsResponse, SDKValidationError>;
//# sourceMappingURL=deletejoballocations.d.ts.map