import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetAllocationWindowsRequest = {
    /**
     * UUID of the Allocation Window
     */
    uuid: string;
};
export type GetAllocationWindowsResponse = components.ErrorT | components.AllocationWindow;
/** @internal */
export declare const GetAllocationWindowsRequest$inboundSchema: z.ZodType<GetAllocationWindowsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllocationWindowsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetAllocationWindowsRequest$outboundSchema: z.ZodType<GetAllocationWindowsRequest$Outbound, z.ZodTypeDef, GetAllocationWindowsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAllocationWindowsRequest$ {
    /** @deprecated use `GetAllocationWindowsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAllocationWindowsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAllocationWindowsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAllocationWindowsRequest$Outbound, z.ZodTypeDef, GetAllocationWindowsRequest>;
    /** @deprecated use `GetAllocationWindowsRequest$Outbound` instead. */
    type Outbound = GetAllocationWindowsRequest$Outbound;
}
export declare function getAllocationWindowsRequestToJSON(getAllocationWindowsRequest: GetAllocationWindowsRequest): string;
export declare function getAllocationWindowsRequestFromJSON(jsonString: string): SafeParseResult<GetAllocationWindowsRequest, SDKValidationError>;
/** @internal */
export declare const GetAllocationWindowsResponse$inboundSchema: z.ZodType<GetAllocationWindowsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAllocationWindowsResponse$Outbound = components.ErrorT$Outbound | components.AllocationWindow$Outbound;
/** @internal */
export declare const GetAllocationWindowsResponse$outboundSchema: z.ZodType<GetAllocationWindowsResponse$Outbound, z.ZodTypeDef, GetAllocationWindowsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAllocationWindowsResponse$ {
    /** @deprecated use `GetAllocationWindowsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAllocationWindowsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAllocationWindowsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAllocationWindowsResponse$Outbound, z.ZodTypeDef, GetAllocationWindowsResponse>;
    /** @deprecated use `GetAllocationWindowsResponse$Outbound` instead. */
    type Outbound = GetAllocationWindowsResponse$Outbound;
}
export declare function getAllocationWindowsResponseToJSON(getAllocationWindowsResponse: GetAllocationWindowsResponse): string;
export declare function getAllocationWindowsResponseFromJSON(jsonString: string): SafeParseResult<GetAllocationWindowsResponse, SDKValidationError>;
//# sourceMappingURL=getallocationwindows.d.ts.map