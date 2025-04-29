import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListFormResponsesResponse = components.ErrorT | Array<components.FormResponse>;
/** @internal */
export declare const ListFormResponsesResponse$inboundSchema: z.ZodType<ListFormResponsesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFormResponsesResponse$Outbound = components.ErrorT$Outbound | Array<components.FormResponse$Outbound>;
/** @internal */
export declare const ListFormResponsesResponse$outboundSchema: z.ZodType<ListFormResponsesResponse$Outbound, z.ZodTypeDef, ListFormResponsesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListFormResponsesResponse$ {
    /** @deprecated use `ListFormResponsesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListFormResponsesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListFormResponsesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListFormResponsesResponse$Outbound, z.ZodTypeDef, ListFormResponsesResponse>;
    /** @deprecated use `ListFormResponsesResponse$Outbound` instead. */
    type Outbound = ListFormResponsesResponse$Outbound;
}
export declare function listFormResponsesResponseToJSON(listFormResponsesResponse: ListFormResponsesResponse): string;
export declare function listFormResponsesResponseFromJSON(jsonString: string): SafeParseResult<ListFormResponsesResponse, SDKValidationError>;
//# sourceMappingURL=listformresponses.d.ts.map