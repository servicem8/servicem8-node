import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetSMSTemplatesRequest = {
    /**
     * UUID of the SMS Template
     */
    uuid: string;
};
export type GetSMSTemplatesResponse = components.ErrorT | components.SmsTemplate;
/** @internal */
export declare const GetSMSTemplatesRequest$inboundSchema: z.ZodType<GetSMSTemplatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSMSTemplatesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetSMSTemplatesRequest$outboundSchema: z.ZodType<GetSMSTemplatesRequest$Outbound, z.ZodTypeDef, GetSMSTemplatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetSMSTemplatesRequest$ {
    /** @deprecated use `GetSMSTemplatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetSMSTemplatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetSMSTemplatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetSMSTemplatesRequest$Outbound, z.ZodTypeDef, GetSMSTemplatesRequest>;
    /** @deprecated use `GetSMSTemplatesRequest$Outbound` instead. */
    type Outbound = GetSMSTemplatesRequest$Outbound;
}
export declare function getSMSTemplatesRequestToJSON(getSMSTemplatesRequest: GetSMSTemplatesRequest): string;
export declare function getSMSTemplatesRequestFromJSON(jsonString: string): SafeParseResult<GetSMSTemplatesRequest, SDKValidationError>;
/** @internal */
export declare const GetSMSTemplatesResponse$inboundSchema: z.ZodType<GetSMSTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetSMSTemplatesResponse$Outbound = components.ErrorT$Outbound | components.SmsTemplate$Outbound;
/** @internal */
export declare const GetSMSTemplatesResponse$outboundSchema: z.ZodType<GetSMSTemplatesResponse$Outbound, z.ZodTypeDef, GetSMSTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetSMSTemplatesResponse$ {
    /** @deprecated use `GetSMSTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetSMSTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetSMSTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetSMSTemplatesResponse$Outbound, z.ZodTypeDef, GetSMSTemplatesResponse>;
    /** @deprecated use `GetSMSTemplatesResponse$Outbound` instead. */
    type Outbound = GetSMSTemplatesResponse$Outbound;
}
export declare function getSMSTemplatesResponseToJSON(getSMSTemplatesResponse: GetSMSTemplatesResponse): string;
export declare function getSMSTemplatesResponseFromJSON(jsonString: string): SafeParseResult<GetSMSTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=getsmstemplates.d.ts.map