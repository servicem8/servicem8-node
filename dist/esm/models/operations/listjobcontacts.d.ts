import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobContactsResponse = components.ErrorT | Array<components.JobContact>;
/** @internal */
export declare const ListJobContactsResponse$inboundSchema: z.ZodType<ListJobContactsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobContactsResponse$Outbound = components.ErrorT$Outbound | Array<components.JobContact$Outbound>;
/** @internal */
export declare const ListJobContactsResponse$outboundSchema: z.ZodType<ListJobContactsResponse$Outbound, z.ZodTypeDef, ListJobContactsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobContactsResponse$ {
    /** @deprecated use `ListJobContactsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobContactsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobContactsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobContactsResponse$Outbound, z.ZodTypeDef, ListJobContactsResponse>;
    /** @deprecated use `ListJobContactsResponse$Outbound` instead. */
    type Outbound = ListJobContactsResponse$Outbound;
}
export declare function listJobContactsResponseToJSON(listJobContactsResponse: ListJobContactsResponse): string;
export declare function listJobContactsResponseFromJSON(jsonString: string): SafeParseResult<ListJobContactsResponse, SDKValidationError>;
//# sourceMappingURL=listjobcontacts.d.ts.map