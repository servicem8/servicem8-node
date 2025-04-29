import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListAllocationWindowsResponse = components.ErrorT | Array<components.AllocationWindow>;
/** @internal */
export declare const ListAllocationWindowsResponse$inboundSchema: z.ZodType<ListAllocationWindowsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAllocationWindowsResponse$Outbound = components.ErrorT$Outbound | Array<components.AllocationWindow$Outbound>;
/** @internal */
export declare const ListAllocationWindowsResponse$outboundSchema: z.ZodType<ListAllocationWindowsResponse$Outbound, z.ZodTypeDef, ListAllocationWindowsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAllocationWindowsResponse$ {
    /** @deprecated use `ListAllocationWindowsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAllocationWindowsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAllocationWindowsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAllocationWindowsResponse$Outbound, z.ZodTypeDef, ListAllocationWindowsResponse>;
    /** @deprecated use `ListAllocationWindowsResponse$Outbound` instead. */
    type Outbound = ListAllocationWindowsResponse$Outbound;
}
export declare function listAllocationWindowsResponseToJSON(listAllocationWindowsResponse: ListAllocationWindowsResponse): string;
export declare function listAllocationWindowsResponseFromJSON(jsonString: string): SafeParseResult<ListAllocationWindowsResponse, SDKValidationError>;
//# sourceMappingURL=listallocationwindows.d.ts.map