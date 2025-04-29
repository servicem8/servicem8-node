import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListJobActivitiesResponse = components.ErrorT | Array<components.JobActivity>;
/** @internal */
export declare const ListJobActivitiesResponse$inboundSchema: z.ZodType<ListJobActivitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListJobActivitiesResponse$Outbound = components.ErrorT$Outbound | Array<components.JobActivity$Outbound>;
/** @internal */
export declare const ListJobActivitiesResponse$outboundSchema: z.ZodType<ListJobActivitiesResponse$Outbound, z.ZodTypeDef, ListJobActivitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListJobActivitiesResponse$ {
    /** @deprecated use `ListJobActivitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListJobActivitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListJobActivitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListJobActivitiesResponse$Outbound, z.ZodTypeDef, ListJobActivitiesResponse>;
    /** @deprecated use `ListJobActivitiesResponse$Outbound` instead. */
    type Outbound = ListJobActivitiesResponse$Outbound;
}
export declare function listJobActivitiesResponseToJSON(listJobActivitiesResponse: ListJobActivitiesResponse): string;
export declare function listJobActivitiesResponseFromJSON(jsonString: string): SafeParseResult<ListJobActivitiesResponse, SDKValidationError>;
//# sourceMappingURL=listjobactivities.d.ts.map