import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobChecklistsResponse = components.ErrorT | Array<components.JobChecklist>;
/** @internal */
export declare const ListJobChecklistsResponse$inboundSchema: z.ZodType<ListJobChecklistsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobChecklistsResponse$Outbound = components.ErrorT$Outbound | Array<components.JobChecklist$Outbound>;
/** @internal */
export declare const ListJobChecklistsResponse$outboundSchema: z.ZodType<ListJobChecklistsResponse$Outbound, z.ZodTypeDef, ListJobChecklistsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobChecklistsResponse$ {
    /** @deprecated use `ListJobChecklistsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobChecklistsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobChecklistsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobChecklistsResponse$Outbound, z.ZodTypeDef, ListJobChecklistsResponse>;
    /** @deprecated use `ListJobChecklistsResponse$Outbound` instead. */
    type Outbound = ListJobChecklistsResponse$Outbound;
}
export declare function listJobChecklistsResponseToJSON(listJobChecklistsResponse: ListJobChecklistsResponse): string;
export declare function listJobChecklistsResponseFromJSON(jsonString: string): SafeParseResult<ListJobChecklistsResponse, SDKValidationError>;
//# sourceMappingURL=listjobchecklists.d.ts.map