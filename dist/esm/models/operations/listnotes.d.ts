import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListNotesResponse = components.ErrorT | Array<components.Note>;
/** @internal */
export declare const ListNotesResponse$inboundSchema: z.ZodType<ListNotesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListNotesResponse$Outbound = components.ErrorT$Outbound | Array<components.Note$Outbound>;
/** @internal */
export declare const ListNotesResponse$outboundSchema: z.ZodType<ListNotesResponse$Outbound, z.ZodTypeDef, ListNotesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListNotesResponse$ {
    /** @deprecated use `ListNotesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListNotesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListNotesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListNotesResponse$Outbound, z.ZodTypeDef, ListNotesResponse>;
    /** @deprecated use `ListNotesResponse$Outbound` instead. */
    type Outbound = ListNotesResponse$Outbound;
}
export declare function listNotesResponseToJSON(listNotesResponse: ListNotesResponse): string;
export declare function listNotesResponseFromJSON(jsonString: string): SafeParseResult<ListNotesResponse, SDKValidationError>;
//# sourceMappingURL=listnotes.d.ts.map