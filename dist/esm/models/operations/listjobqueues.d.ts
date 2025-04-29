import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobQueuesResponse = components.ErrorT | Array<components.Queue>;
/** @internal */
export declare const ListJobQueuesResponse$inboundSchema: z.ZodType<ListJobQueuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobQueuesResponse$Outbound = components.ErrorT$Outbound | Array<components.Queue$Outbound>;
/** @internal */
export declare const ListJobQueuesResponse$outboundSchema: z.ZodType<ListJobQueuesResponse$Outbound, z.ZodTypeDef, ListJobQueuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobQueuesResponse$ {
    /** @deprecated use `ListJobQueuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobQueuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobQueuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobQueuesResponse$Outbound, z.ZodTypeDef, ListJobQueuesResponse>;
    /** @deprecated use `ListJobQueuesResponse$Outbound` instead. */
    type Outbound = ListJobQueuesResponse$Outbound;
}
export declare function listJobQueuesResponseToJSON(listJobQueuesResponse: ListJobQueuesResponse): string;
export declare function listJobQueuesResponseFromJSON(jsonString: string): SafeParseResult<ListJobQueuesResponse, SDKValidationError>;
//# sourceMappingURL=listjobqueues.d.ts.map