import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteAllocationWindowsRequest = {
    /**
     * UUID of the Allocation Window
     */
    uuid: string;
};
export type DeleteAllocationWindowsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteAllocationWindowsRequest$inboundSchema: z.ZodType<DeleteAllocationWindowsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAllocationWindowsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteAllocationWindowsRequest$outboundSchema: z.ZodType<DeleteAllocationWindowsRequest$Outbound, z.ZodTypeDef, DeleteAllocationWindowsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAllocationWindowsRequest$ {
    /** @deprecated use `DeleteAllocationWindowsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAllocationWindowsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAllocationWindowsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAllocationWindowsRequest$Outbound, z.ZodTypeDef, DeleteAllocationWindowsRequest>;
    /** @deprecated use `DeleteAllocationWindowsRequest$Outbound` instead. */
    type Outbound = DeleteAllocationWindowsRequest$Outbound;
}
export declare function deleteAllocationWindowsRequestToJSON(deleteAllocationWindowsRequest: DeleteAllocationWindowsRequest): string;
export declare function deleteAllocationWindowsRequestFromJSON(jsonString: string): SafeParseResult<DeleteAllocationWindowsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteAllocationWindowsResponse$inboundSchema: z.ZodType<DeleteAllocationWindowsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAllocationWindowsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteAllocationWindowsResponse$outboundSchema: z.ZodType<DeleteAllocationWindowsResponse$Outbound, z.ZodTypeDef, DeleteAllocationWindowsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAllocationWindowsResponse$ {
    /** @deprecated use `DeleteAllocationWindowsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAllocationWindowsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAllocationWindowsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAllocationWindowsResponse$Outbound, z.ZodTypeDef, DeleteAllocationWindowsResponse>;
    /** @deprecated use `DeleteAllocationWindowsResponse$Outbound` instead. */
    type Outbound = DeleteAllocationWindowsResponse$Outbound;
}
export declare function deleteAllocationWindowsResponseToJSON(deleteAllocationWindowsResponse: DeleteAllocationWindowsResponse): string;
export declare function deleteAllocationWindowsResponseFromJSON(jsonString: string): SafeParseResult<DeleteAllocationWindowsResponse, SDKValidationError>;
//# sourceMappingURL=deleteallocationwindows.d.ts.map