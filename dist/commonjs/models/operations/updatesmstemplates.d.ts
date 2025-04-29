import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateSMSTemplatesRequest = {
    /**
     * UUID of the SMS Template
     */
    uuid: string;
    /**
     * SMS Template fields to update
     */
    smsTemplate: components.SmsTemplateInput;
};
export type UpdateSMSTemplatesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateSMSTemplatesRequest$inboundSchema: z.ZodType<UpdateSMSTemplatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSMSTemplatesRequest$Outbound = {
    uuid: string;
    SmsTemplate: components.SmsTemplateInput$Outbound;
};
/** @internal */
export declare const UpdateSMSTemplatesRequest$outboundSchema: z.ZodType<UpdateSMSTemplatesRequest$Outbound, z.ZodTypeDef, UpdateSMSTemplatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSMSTemplatesRequest$ {
    /** @deprecated use `UpdateSMSTemplatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSMSTemplatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSMSTemplatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSMSTemplatesRequest$Outbound, z.ZodTypeDef, UpdateSMSTemplatesRequest>;
    /** @deprecated use `UpdateSMSTemplatesRequest$Outbound` instead. */
    type Outbound = UpdateSMSTemplatesRequest$Outbound;
}
export declare function updateSMSTemplatesRequestToJSON(updateSMSTemplatesRequest: UpdateSMSTemplatesRequest): string;
export declare function updateSMSTemplatesRequestFromJSON(jsonString: string): SafeParseResult<UpdateSMSTemplatesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateSMSTemplatesResponse$inboundSchema: z.ZodType<UpdateSMSTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSMSTemplatesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateSMSTemplatesResponse$outboundSchema: z.ZodType<UpdateSMSTemplatesResponse$Outbound, z.ZodTypeDef, UpdateSMSTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSMSTemplatesResponse$ {
    /** @deprecated use `UpdateSMSTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSMSTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSMSTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSMSTemplatesResponse$Outbound, z.ZodTypeDef, UpdateSMSTemplatesResponse>;
    /** @deprecated use `UpdateSMSTemplatesResponse$Outbound` instead. */
    type Outbound = UpdateSMSTemplatesResponse$Outbound;
}
export declare function updateSMSTemplatesResponseToJSON(updateSMSTemplatesResponse: UpdateSMSTemplatesResponse): string;
export declare function updateSMSTemplatesResponseFromJSON(jsonString: string): SafeParseResult<UpdateSMSTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=updatesmstemplates.d.ts.map