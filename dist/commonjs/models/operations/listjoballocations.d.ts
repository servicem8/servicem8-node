import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobAllocationsResponse = components.ErrorT | Array<components.JobAllocation>;
/** @internal */
export declare const ListJobAllocationsResponse$inboundSchema: z.ZodType<ListJobAllocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobAllocationsResponse$Outbound = components.ErrorT$Outbound | Array<components.JobAllocation$Outbound>;
/** @internal */
export declare const ListJobAllocationsResponse$outboundSchema: z.ZodType<ListJobAllocationsResponse$Outbound, z.ZodTypeDef, ListJobAllocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobAllocationsResponse$ {
    /** @deprecated use `ListJobAllocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobAllocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobAllocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobAllocationsResponse$Outbound, z.ZodTypeDef, ListJobAllocationsResponse>;
    /** @deprecated use `ListJobAllocationsResponse$Outbound` instead. */
    type Outbound = ListJobAllocationsResponse$Outbound;
}
export declare function listJobAllocationsResponseToJSON(listJobAllocationsResponse: ListJobAllocationsResponse): string;
export declare function listJobAllocationsResponseFromJSON(jsonString: string): SafeParseResult<ListJobAllocationsResponse, SDKValidationError>;
//# sourceMappingURL=listjoballocations.d.ts.map