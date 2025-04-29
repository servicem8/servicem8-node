import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteSMSTemplatesRequest = {
    /**
     * UUID of the SMS Template
     */
    uuid: string;
};
export type DeleteSMSTemplatesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteSMSTemplatesRequest$inboundSchema: z.ZodType<DeleteSMSTemplatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSMSTemplatesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteSMSTemplatesRequest$outboundSchema: z.ZodType<DeleteSMSTemplatesRequest$Outbound, z.ZodTypeDef, DeleteSMSTemplatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteSMSTemplatesRequest$ {
    /** @deprecated use `DeleteSMSTemplatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteSMSTemplatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteSMSTemplatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteSMSTemplatesRequest$Outbound, z.ZodTypeDef, DeleteSMSTemplatesRequest>;
    /** @deprecated use `DeleteSMSTemplatesRequest$Outbound` instead. */
    type Outbound = DeleteSMSTemplatesRequest$Outbound;
}
export declare function deleteSMSTemplatesRequestToJSON(deleteSMSTemplatesRequest: DeleteSMSTemplatesRequest): string;
export declare function deleteSMSTemplatesRequestFromJSON(jsonString: string): SafeParseResult<DeleteSMSTemplatesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteSMSTemplatesResponse$inboundSchema: z.ZodType<DeleteSMSTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSMSTemplatesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteSMSTemplatesResponse$outboundSchema: z.ZodType<DeleteSMSTemplatesResponse$Outbound, z.ZodTypeDef, DeleteSMSTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteSMSTemplatesResponse$ {
    /** @deprecated use `DeleteSMSTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteSMSTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteSMSTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteSMSTemplatesResponse$Outbound, z.ZodTypeDef, DeleteSMSTemplatesResponse>;
    /** @deprecated use `DeleteSMSTemplatesResponse$Outbound` instead. */
    type Outbound = DeleteSMSTemplatesResponse$Outbound;
}
export declare function deleteSMSTemplatesResponseToJSON(deleteSMSTemplatesResponse: DeleteSMSTemplatesResponse): string;
export declare function deleteSMSTemplatesResponseFromJSON(jsonString: string): SafeParseResult<DeleteSMSTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=deletesmstemplates.d.ts.map