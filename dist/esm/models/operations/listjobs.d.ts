import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobsResponse = components.ErrorT | Array<components.Job>;
/** @internal */
export declare const ListJobsResponse$inboundSchema: z.ZodType<ListJobsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobsResponse$Outbound = components.ErrorT$Outbound | Array<components.Job$Outbound>;
/** @internal */
export declare const ListJobsResponse$outboundSchema: z.ZodType<ListJobsResponse$Outbound, z.ZodTypeDef, ListJobsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobsResponse$ {
    /** @deprecated use `ListJobsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobsResponse$Outbound, z.ZodTypeDef, ListJobsResponse>;
    /** @deprecated use `ListJobsResponse$Outbound` instead. */
    type Outbound = ListJobsResponse$Outbound;
}
export declare function listJobsResponseToJSON(listJobsResponse: ListJobsResponse): string;
export declare function listJobsResponseFromJSON(jsonString: string): SafeParseResult<ListJobsResponse, SDKValidationError>;
//# sourceMappingURL=listjobs.d.ts.map