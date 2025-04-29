import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteAttachmentsRequest = {
    /**
     * UUID of the Attachment
     */
    uuid: string;
};
export type DeleteAttachmentsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteAttachmentsRequest$inboundSchema: z.ZodType<DeleteAttachmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAttachmentsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteAttachmentsRequest$outboundSchema: z.ZodType<DeleteAttachmentsRequest$Outbound, z.ZodTypeDef, DeleteAttachmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAttachmentsRequest$ {
    /** @deprecated use `DeleteAttachmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAttachmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAttachmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAttachmentsRequest$Outbound, z.ZodTypeDef, DeleteAttachmentsRequest>;
    /** @deprecated use `DeleteAttachmentsRequest$Outbound` instead. */
    type Outbound = DeleteAttachmentsRequest$Outbound;
}
export declare function deleteAttachmentsRequestToJSON(deleteAttachmentsRequest: DeleteAttachmentsRequest): string;
export declare function deleteAttachmentsRequestFromJSON(jsonString: string): SafeParseResult<DeleteAttachmentsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteAttachmentsResponse$inboundSchema: z.ZodType<DeleteAttachmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAttachmentsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteAttachmentsResponse$outboundSchema: z.ZodType<DeleteAttachmentsResponse$Outbound, z.ZodTypeDef, DeleteAttachmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAttachmentsResponse$ {
    /** @deprecated use `DeleteAttachmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAttachmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAttachmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAttachmentsResponse$Outbound, z.ZodTypeDef, DeleteAttachmentsResponse>;
    /** @deprecated use `DeleteAttachmentsResponse$Outbound` instead. */
    type Outbound = DeleteAttachmentsResponse$Outbound;
}
export declare function deleteAttachmentsResponseToJSON(deleteAttachmentsResponse: DeleteAttachmentsResponse): string;
export declare function deleteAttachmentsResponseFromJSON(jsonString: string): SafeParseResult<DeleteAttachmentsResponse, SDKValidationError>;
//# sourceMappingURL=deleteattachments.d.ts.map