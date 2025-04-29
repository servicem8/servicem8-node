import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListTasksResponse = components.ErrorT | Array<components.Task>;
/** @internal */
export declare const ListTasksResponse$inboundSchema: z.ZodType<ListTasksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListTasksResponse$Outbound = components.ErrorT$Outbound | Array<components.Task$Outbound>;
/** @internal */
export declare const ListTasksResponse$outboundSchema: z.ZodType<ListTasksResponse$Outbound, z.ZodTypeDef, ListTasksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListTasksResponse$ {
    /** @deprecated use `ListTasksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListTasksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListTasksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListTasksResponse$Outbound, z.ZodTypeDef, ListTasksResponse>;
    /** @deprecated use `ListTasksResponse$Outbound` instead. */
    type Outbound = ListTasksResponse$Outbound;
}
export declare function listTasksResponseToJSON(listTasksResponse: ListTasksResponse): string;
export declare function listTasksResponseFromJSON(jsonString: string): SafeParseResult<ListTasksResponse, SDKValidationError>;
//# sourceMappingURL=listtasks.d.ts.map