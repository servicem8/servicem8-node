import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateAttachmentsRequest = {
    /**
     * UUID of the Attachment
     */
    uuid: string;
    /**
     * Attachment fields to update
     */
    attachment: components.AttachmentInput;
};
export type UpdateAttachmentsResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateAttachmentsRequest$inboundSchema: z.ZodType<UpdateAttachmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttachmentsRequest$Outbound = {
    uuid: string;
    Attachment: components.AttachmentInput$Outbound;
};
/** @internal */
export declare const UpdateAttachmentsRequest$outboundSchema: z.ZodType<UpdateAttachmentsRequest$Outbound, z.ZodTypeDef, UpdateAttachmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAttachmentsRequest$ {
    /** @deprecated use `UpdateAttachmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAttachmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAttachmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAttachmentsRequest$Outbound, z.ZodTypeDef, UpdateAttachmentsRequest>;
    /** @deprecated use `UpdateAttachmentsRequest$Outbound` instead. */
    type Outbound = UpdateAttachmentsRequest$Outbound;
}
export declare function updateAttachmentsRequestToJSON(updateAttachmentsRequest: UpdateAttachmentsRequest): string;
export declare function updateAttachmentsRequestFromJSON(jsonString: string): SafeParseResult<UpdateAttachmentsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateAttachmentsResponse$inboundSchema: z.ZodType<UpdateAttachmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAttachmentsResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateAttachmentsResponse$outboundSchema: z.ZodType<UpdateAttachmentsResponse$Outbound, z.ZodTypeDef, UpdateAttachmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAttachmentsResponse$ {
    /** @deprecated use `UpdateAttachmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAttachmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAttachmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAttachmentsResponse$Outbound, z.ZodTypeDef, UpdateAttachmentsResponse>;
    /** @deprecated use `UpdateAttachmentsResponse$Outbound` instead. */
    type Outbound = UpdateAttachmentsResponse$Outbound;
}
export declare function updateAttachmentsResponseToJSON(updateAttachmentsResponse: UpdateAttachmentsResponse): string;
export declare function updateAttachmentsResponseFromJSON(jsonString: string): SafeParseResult<UpdateAttachmentsResponse, SDKValidationError>;
//# sourceMappingURL=updateattachments.d.ts.map