import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateEmailTemplatesRequest = {
    /**
     * UUID of the Email Template
     */
    uuid: string;
    /**
     * Email Template fields to update
     */
    emailTemplate: components.EmailTemplateInput;
};
export type UpdateEmailTemplatesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateEmailTemplatesRequest$inboundSchema: z.ZodType<UpdateEmailTemplatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEmailTemplatesRequest$Outbound = {
    uuid: string;
    EmailTemplate: components.EmailTemplateInput$Outbound;
};
/** @internal */
export declare const UpdateEmailTemplatesRequest$outboundSchema: z.ZodType<UpdateEmailTemplatesRequest$Outbound, z.ZodTypeDef, UpdateEmailTemplatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateEmailTemplatesRequest$ {
    /** @deprecated use `UpdateEmailTemplatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateEmailTemplatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateEmailTemplatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateEmailTemplatesRequest$Outbound, z.ZodTypeDef, UpdateEmailTemplatesRequest>;
    /** @deprecated use `UpdateEmailTemplatesRequest$Outbound` instead. */
    type Outbound = UpdateEmailTemplatesRequest$Outbound;
}
export declare function updateEmailTemplatesRequestToJSON(updateEmailTemplatesRequest: UpdateEmailTemplatesRequest): string;
export declare function updateEmailTemplatesRequestFromJSON(jsonString: string): SafeParseResult<UpdateEmailTemplatesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateEmailTemplatesResponse$inboundSchema: z.ZodType<UpdateEmailTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateEmailTemplatesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateEmailTemplatesResponse$outboundSchema: z.ZodType<UpdateEmailTemplatesResponse$Outbound, z.ZodTypeDef, UpdateEmailTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateEmailTemplatesResponse$ {
    /** @deprecated use `UpdateEmailTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateEmailTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateEmailTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateEmailTemplatesResponse$Outbound, z.ZodTypeDef, UpdateEmailTemplatesResponse>;
    /** @deprecated use `UpdateEmailTemplatesResponse$Outbound` instead. */
    type Outbound = UpdateEmailTemplatesResponse$Outbound;
}
export declare function updateEmailTemplatesResponseToJSON(updateEmailTemplatesResponse: UpdateEmailTemplatesResponse): string;
export declare function updateEmailTemplatesResponseFromJSON(jsonString: string): SafeParseResult<UpdateEmailTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=updateemailtemplates.d.ts.map