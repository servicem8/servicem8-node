import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListAttachmentsResponse = components.ErrorT | Array<components.Attachment>;
/** @internal */
export declare const ListAttachmentsResponse$inboundSchema: z.ZodType<ListAttachmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAttachmentsResponse$Outbound = components.ErrorT$Outbound | Array<components.Attachment$Outbound>;
/** @internal */
export declare const ListAttachmentsResponse$outboundSchema: z.ZodType<ListAttachmentsResponse$Outbound, z.ZodTypeDef, ListAttachmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAttachmentsResponse$ {
    /** @deprecated use `ListAttachmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAttachmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAttachmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAttachmentsResponse$Outbound, z.ZodTypeDef, ListAttachmentsResponse>;
    /** @deprecated use `ListAttachmentsResponse$Outbound` instead. */
    type Outbound = ListAttachmentsResponse$Outbound;
}
export declare function listAttachmentsResponseToJSON(listAttachmentsResponse: ListAttachmentsResponse): string;
export declare function listAttachmentsResponseFromJSON(jsonString: string): SafeParseResult<ListAttachmentsResponse, SDKValidationError>;
//# sourceMappingURL=listattachments.d.ts.map