import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateAllocationWindowsRequest = {
    /**
     * UUID of the Allocation Window
     */
    uuid: string;
    /**
     * Allocation Window fields to update
     */
    allocationWindow: components.AllocationWindowInput;
};
export type UpdateAllocationWindowsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateAllocationWindowsRequest$inboundSchema: z.ZodType<UpdateAllocationWindowsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAllocationWindowsRequest$Outbound = {
    uuid: string;
    AllocationWindow: components.AllocationWindowInput$Outbound;
};
/** @internal */
export declare const UpdateAllocationWindowsRequest$outboundSchema: z.ZodType<UpdateAllocationWindowsRequest$Outbound, z.ZodTypeDef, UpdateAllocationWindowsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAllocationWindowsRequest$ {
    /** @deprecated use `UpdateAllocationWindowsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAllocationWindowsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAllocationWindowsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAllocationWindowsRequest$Outbound, z.ZodTypeDef, UpdateAllocationWindowsRequest>;
    /** @deprecated use `UpdateAllocationWindowsRequest$Outbound` instead. */
    type Outbound = UpdateAllocationWindowsRequest$Outbound;
}
export declare function updateAllocationWindowsRequestToJSON(updateAllocationWindowsRequest: UpdateAllocationWindowsRequest): string;
export declare function updateAllocationWindowsRequestFromJSON(jsonString: string): SafeParseResult<UpdateAllocationWindowsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAllocationWindowsResponse$inboundSchema: z.ZodType<UpdateAllocationWindowsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAllocationWindowsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateAllocationWindowsResponse$outboundSchema: z.ZodType<UpdateAllocationWindowsResponse$Outbound, z.ZodTypeDef, UpdateAllocationWindowsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAllocationWindowsResponse$ {
    /** @deprecated use `UpdateAllocationWindowsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAllocationWindowsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAllocationWindowsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAllocationWindowsResponse$Outbound, z.ZodTypeDef, UpdateAllocationWindowsResponse>;
    /** @deprecated use `UpdateAllocationWindowsResponse$Outbound` instead. */
    type Outbound = UpdateAllocationWindowsResponse$Outbound;
}
export declare function updateAllocationWindowsResponseToJSON(updateAllocationWindowsResponse: UpdateAllocationWindowsResponse): string;
export declare function updateAllocationWindowsResponseFromJSON(jsonString: string): SafeParseResult<UpdateAllocationWindowsResponse, SDKValidationError>;
//# sourceMappingURL=updateallocationwindows.d.ts.map