import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetNotesRequest = {
    /**
     * UUID of the Note
     */
    uuid: string;
};
export type GetNotesResponse = components.ErrorT | components.Note;
/** @internal */
export declare const GetNotesRequest$inboundSchema: z.ZodType<GetNotesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetNotesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetNotesRequest$outboundSchema: z.ZodType<GetNotesRequest$Outbound, z.ZodTypeDef, GetNotesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetNotesRequest$ {
    /** @deprecated use `GetNotesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetNotesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetNotesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetNotesRequest$Outbound, z.ZodTypeDef, GetNotesRequest>;
    /** @deprecated use `GetNotesRequest$Outbound` instead. */
    type Outbound = GetNotesRequest$Outbound;
}
export declare function getNotesRequestToJSON(getNotesRequest: GetNotesRequest): string;
export declare function getNotesRequestFromJSON(jsonString: string): SafeParseResult<GetNotesRequest, SDKValidationError>;
/** @internal */
export declare const GetNotesResponse$inboundSchema: z.ZodType<GetNotesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetNotesResponse$Outbound = components.ErrorT$Outbound | components.Note$Outbound;
/** @internal */
export declare const GetNotesResponse$outboundSchema: z.ZodType<GetNotesResponse$Outbound, z.ZodTypeDef, GetNotesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetNotesResponse$ {
    /** @deprecated use `GetNotesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetNotesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetNotesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetNotesResponse$Outbound, z.ZodTypeDef, GetNotesResponse>;
    /** @deprecated use `GetNotesResponse$Outbound` instead. */
    type Outbound = GetNotesResponse$Outbound;
}
export declare function getNotesResponseToJSON(getNotesResponse: GetNotesResponse): string;
export declare function getNotesResponseFromJSON(jsonString: string): SafeParseResult<GetNotesResponse, SDKValidationError>;
//# sourceMappingURL=getnotes.d.ts.map