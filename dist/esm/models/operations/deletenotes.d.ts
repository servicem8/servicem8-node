import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteNotesRequest = {
    /**
     * UUID of the Note
     */
    uuid: string;
};
export type DeleteNotesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteNotesRequest$inboundSchema: z.ZodType<DeleteNotesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteNotesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteNotesRequest$outboundSchema: z.ZodType<DeleteNotesRequest$Outbound, z.ZodTypeDef, DeleteNotesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteNotesRequest$ {
    /** @deprecated use `DeleteNotesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteNotesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteNotesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteNotesRequest$Outbound, z.ZodTypeDef, DeleteNotesRequest>;
    /** @deprecated use `DeleteNotesRequest$Outbound` instead. */
    type Outbound = DeleteNotesRequest$Outbound;
}
export declare function deleteNotesRequestToJSON(deleteNotesRequest: DeleteNotesRequest): string;
export declare function deleteNotesRequestFromJSON(jsonString: string): SafeParseResult<DeleteNotesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteNotesResponse$inboundSchema: z.ZodType<DeleteNotesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteNotesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteNotesResponse$outboundSchema: z.ZodType<DeleteNotesResponse$Outbound, z.ZodTypeDef, DeleteNotesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteNotesResponse$ {
    /** @deprecated use `DeleteNotesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteNotesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteNotesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteNotesResponse$Outbound, z.ZodTypeDef, DeleteNotesResponse>;
    /** @deprecated use `DeleteNotesResponse$Outbound` instead. */
    type Outbound = DeleteNotesResponse$Outbound;
}
export declare function deleteNotesResponseToJSON(deleteNotesResponse: DeleteNotesResponse): string;
export declare function deleteNotesResponseFromJSON(jsonString: string): SafeParseResult<DeleteNotesResponse, SDKValidationError>;
//# sourceMappingURL=deletenotes.d.ts.map