import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListFormFieldsResponse = components.ErrorT | Array<components.FormField>;
/** @internal */
export declare const ListFormFieldsResponse$inboundSchema: z.ZodType<ListFormFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFormFieldsResponse$Outbound = components.ErrorT$Outbound | Array<components.FormField$Outbound>;
/** @internal */
export declare const ListFormFieldsResponse$outboundSchema: z.ZodType<ListFormFieldsResponse$Outbound, z.ZodTypeDef, ListFormFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListFormFieldsResponse$ {
    /** @deprecated use `ListFormFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListFormFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListFormFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListFormFieldsResponse$Outbound, z.ZodTypeDef, ListFormFieldsResponse>;
    /** @deprecated use `ListFormFieldsResponse$Outbound` instead. */
    type Outbound = ListFormFieldsResponse$Outbound;
}
export declare function listFormFieldsResponseToJSON(listFormFieldsResponse: ListFormFieldsResponse): string;
export declare function listFormFieldsResponseFromJSON(jsonString: string): SafeParseResult<ListFormFieldsResponse, SDKValidationError>;
//# sourceMappingURL=listformfields.d.ts.map