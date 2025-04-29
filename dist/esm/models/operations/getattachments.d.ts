import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetAttachmentsRequest = {
    /**
     * UUID of the Attachment
     */
    uuid: string;
};
export type GetAttachmentsResponse = components.ErrorT | components.Attachment;
/** @internal */
export declare const GetAttachmentsRequest$inboundSchema: z.ZodType<GetAttachmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAttachmentsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetAttachmentsRequest$outboundSchema: z.ZodType<GetAttachmentsRequest$Outbound, z.ZodTypeDef, GetAttachmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAttachmentsRequest$ {
    /** @deprecated use `GetAttachmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAttachmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAttachmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAttachmentsRequest$Outbound, z.ZodTypeDef, GetAttachmentsRequest>;
    /** @deprecated use `GetAttachmentsRequest$Outbound` instead. */
    type Outbound = GetAttachmentsRequest$Outbound;
}
export declare function getAttachmentsRequestToJSON(getAttachmentsRequest: GetAttachmentsRequest): string;
export declare function getAttachmentsRequestFromJSON(jsonString: string): SafeParseResult<GetAttachmentsRequest, SDKValidationError>;
/** @internal */
export declare const GetAttachmentsResponse$inboundSchema: z.ZodType<GetAttachmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAttachmentsResponse$Outbound = components.ErrorT$Outbound | components.Attachment$Outbound;
/** @internal */
export declare const GetAttachmentsResponse$outboundSchema: z.ZodType<GetAttachmentsResponse$Outbound, z.ZodTypeDef, GetAttachmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAttachmentsResponse$ {
    /** @deprecated use `GetAttachmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAttachmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAttachmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAttachmentsResponse$Outbound, z.ZodTypeDef, GetAttachmentsResponse>;
    /** @deprecated use `GetAttachmentsResponse$Outbound` instead. */
    type Outbound = GetAttachmentsResponse$Outbound;
}
export declare function getAttachmentsResponseToJSON(getAttachmentsResponse: GetAttachmentsResponse): string;
export declare function getAttachmentsResponseFromJSON(jsonString: string): SafeParseResult<GetAttachmentsResponse, SDKValidationError>;
//# sourceMappingURL=getattachments.d.ts.map