import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetEmailTemplatesRequest = {
    /**
     * UUID of the Email Template
     */
    uuid: string;
};
export type GetEmailTemplatesResponse = components.ErrorT | components.EmailTemplate;
/** @internal */
export declare const GetEmailTemplatesRequest$inboundSchema: z.ZodType<GetEmailTemplatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEmailTemplatesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetEmailTemplatesRequest$outboundSchema: z.ZodType<GetEmailTemplatesRequest$Outbound, z.ZodTypeDef, GetEmailTemplatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetEmailTemplatesRequest$ {
    /** @deprecated use `GetEmailTemplatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetEmailTemplatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetEmailTemplatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetEmailTemplatesRequest$Outbound, z.ZodTypeDef, GetEmailTemplatesRequest>;
    /** @deprecated use `GetEmailTemplatesRequest$Outbound` instead. */
    type Outbound = GetEmailTemplatesRequest$Outbound;
}
export declare function getEmailTemplatesRequestToJSON(getEmailTemplatesRequest: GetEmailTemplatesRequest): string;
export declare function getEmailTemplatesRequestFromJSON(jsonString: string): SafeParseResult<GetEmailTemplatesRequest, SDKValidationError>;
/** @internal */
export declare const GetEmailTemplatesResponse$inboundSchema: z.ZodType<GetEmailTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEmailTemplatesResponse$Outbound = components.ErrorT$Outbound | components.EmailTemplate$Outbound;
/** @internal */
export declare const GetEmailTemplatesResponse$outboundSchema: z.ZodType<GetEmailTemplatesResponse$Outbound, z.ZodTypeDef, GetEmailTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetEmailTemplatesResponse$ {
    /** @deprecated use `GetEmailTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetEmailTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetEmailTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetEmailTemplatesResponse$Outbound, z.ZodTypeDef, GetEmailTemplatesResponse>;
    /** @deprecated use `GetEmailTemplatesResponse$Outbound` instead. */
    type Outbound = GetEmailTemplatesResponse$Outbound;
}
export declare function getEmailTemplatesResponseToJSON(getEmailTemplatesResponse: GetEmailTemplatesResponse): string;
export declare function getEmailTemplatesResponseFromJSON(jsonString: string): SafeParseResult<GetEmailTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=getemailtemplates.d.ts.map