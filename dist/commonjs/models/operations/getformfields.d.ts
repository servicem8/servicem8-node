import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetFormFieldsRequest = {
    /**
     * UUID of the Form Field
     */
    uuid: string;
};
export type GetFormFieldsResponse = components.ErrorT | components.FormField;
/** @internal */
export declare const GetFormFieldsRequest$inboundSchema: z.ZodType<GetFormFieldsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFormFieldsRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetFormFieldsRequest$outboundSchema: z.ZodType<GetFormFieldsRequest$Outbound, z.ZodTypeDef, GetFormFieldsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetFormFieldsRequest$ {
    /** @deprecated use `GetFormFieldsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetFormFieldsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetFormFieldsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetFormFieldsRequest$Outbound, z.ZodTypeDef, GetFormFieldsRequest>;
    /** @deprecated use `GetFormFieldsRequest$Outbound` instead. */
    type Outbound = GetFormFieldsRequest$Outbound;
}
export declare function getFormFieldsRequestToJSON(getFormFieldsRequest: GetFormFieldsRequest): string;
export declare function getFormFieldsRequestFromJSON(jsonString: string): SafeParseResult<GetFormFieldsRequest, SDKValidationError>;
/** @internal */
export declare const GetFormFieldsResponse$inboundSchema: z.ZodType<GetFormFieldsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFormFieldsResponse$Outbound = components.ErrorT$Outbound | components.FormField$Outbound;
/** @internal */
export declare const GetFormFieldsResponse$outboundSchema: z.ZodType<GetFormFieldsResponse$Outbound, z.ZodTypeDef, GetFormFieldsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetFormFieldsResponse$ {
    /** @deprecated use `GetFormFieldsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetFormFieldsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetFormFieldsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetFormFieldsResponse$Outbound, z.ZodTypeDef, GetFormFieldsResponse>;
    /** @deprecated use `GetFormFieldsResponse$Outbound` instead. */
    type Outbound = GetFormFieldsResponse$Outbound;
}
export declare function getFormFieldsResponseToJSON(getFormFieldsResponse: GetFormFieldsResponse): string;
export declare function getFormFieldsResponseFromJSON(jsonString: string): SafeParseResult<GetFormFieldsResponse, SDKValidationError>;
//# sourceMappingURL=getformfields.d.ts.map