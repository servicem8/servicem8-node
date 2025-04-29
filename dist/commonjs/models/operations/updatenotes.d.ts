import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateNotesRequest = {
    /**
     * UUID of the Note
     */
    uuid: string;
    /**
     * Note fields to update
     */
    note: components.NoteInput;
};
export type UpdateNotesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateNotesRequest$inboundSchema: z.ZodType<UpdateNotesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateNotesRequest$Outbound = {
    uuid: string;
    Note: components.NoteInput$Outbound;
};
/** @internal */
export declare const UpdateNotesRequest$outboundSchema: z.ZodType<UpdateNotesRequest$Outbound, z.ZodTypeDef, UpdateNotesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateNotesRequest$ {
    /** @deprecated use `UpdateNotesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateNotesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateNotesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateNotesRequest$Outbound, z.ZodTypeDef, UpdateNotesRequest>;
    /** @deprecated use `UpdateNotesRequest$Outbound` instead. */
    type Outbound = UpdateNotesRequest$Outbound;
}
export declare function updateNotesRequestToJSON(updateNotesRequest: UpdateNotesRequest): string;
export declare function updateNotesRequestFromJSON(jsonString: string): SafeParseResult<UpdateNotesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateNotesResponse$inboundSchema: z.ZodType<UpdateNotesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateNotesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateNotesResponse$outboundSchema: z.ZodType<UpdateNotesResponse$Outbound, z.ZodTypeDef, UpdateNotesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateNotesResponse$ {
    /** @deprecated use `UpdateNotesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateNotesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateNotesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateNotesResponse$Outbound, z.ZodTypeDef, UpdateNotesResponse>;
    /** @deprecated use `UpdateNotesResponse$Outbound` instead. */
    type Outbound = UpdateNotesResponse$Outbound;
}
export declare function updateNotesResponseToJSON(updateNotesResponse: UpdateNotesResponse): string;
export declare function updateNotesResponseFromJSON(jsonString: string): SafeParseResult<UpdateNotesResponse, SDKValidationError>;
//# sourceMappingURL=updatenotes.d.ts.map