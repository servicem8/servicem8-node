import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListFormsResponse = components.ErrorT | Array<components.Form>;
/** @internal */
export declare const ListFormsResponse$inboundSchema: z.ZodType<ListFormsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFormsResponse$Outbound = components.ErrorT$Outbound | Array<components.Form$Outbound>;
/** @internal */
export declare const ListFormsResponse$outboundSchema: z.ZodType<ListFormsResponse$Outbound, z.ZodTypeDef, ListFormsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListFormsResponse$ {
    /** @deprecated use `ListFormsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListFormsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListFormsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListFormsResponse$Outbound, z.ZodTypeDef, ListFormsResponse>;
    /** @deprecated use `ListFormsResponse$Outbound` instead. */
    type Outbound = ListFormsResponse$Outbound;
}
export declare function listFormsResponseToJSON(listFormsResponse: ListFormsResponse): string;
export declare function listFormsResponseFromJSON(jsonString: string): SafeParseResult<ListFormsResponse, SDKValidationError>;
//# sourceMappingURL=listforms.d.ts.map