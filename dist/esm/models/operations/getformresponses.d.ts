import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetFormResponsesRequest = {
    /**
     * UUID of the Form Response
     */
    uuid: string;
};
export type GetFormResponsesResponse = components.ErrorT | components.FormResponse;
/** @internal */
export declare const GetFormResponsesRequest$inboundSchema: z.ZodType<GetFormResponsesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFormResponsesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetFormResponsesRequest$outboundSchema: z.ZodType<GetFormResponsesRequest$Outbound, z.ZodTypeDef, GetFormResponsesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetFormResponsesRequest$ {
    /** @deprecated use `GetFormResponsesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetFormResponsesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetFormResponsesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetFormResponsesRequest$Outbound, z.ZodTypeDef, GetFormResponsesRequest>;
    /** @deprecated use `GetFormResponsesRequest$Outbound` instead. */
    type Outbound = GetFormResponsesRequest$Outbound;
}
export declare function getFormResponsesRequestToJSON(getFormResponsesRequest: GetFormResponsesRequest): string;
export declare function getFormResponsesRequestFromJSON(jsonString: string): SafeParseResult<GetFormResponsesRequest, SDKValidationError>;
/** @internal */
export declare const GetFormResponsesResponse$inboundSchema: z.ZodType<GetFormResponsesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFormResponsesResponse$Outbound = components.ErrorT$Outbound | components.FormResponse$Outbound;
/** @internal */
export declare const GetFormResponsesResponse$outboundSchema: z.ZodType<GetFormResponsesResponse$Outbound, z.ZodTypeDef, GetFormResponsesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetFormResponsesResponse$ {
    /** @deprecated use `GetFormResponsesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetFormResponsesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetFormResponsesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetFormResponsesResponse$Outbound, z.ZodTypeDef, GetFormResponsesResponse>;
    /** @deprecated use `GetFormResponsesResponse$Outbound` instead. */
    type Outbound = GetFormResponsesResponse$Outbound;
}
export declare function getFormResponsesResponseToJSON(getFormResponsesResponse: GetFormResponsesResponse): string;
export declare function getFormResponsesResponseFromJSON(jsonString: string): SafeParseResult<GetFormResponsesResponse, SDKValidationError>;
//# sourceMappingURL=getformresponses.d.ts.map