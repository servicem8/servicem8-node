import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteEmailTemplatesRequest = {
    /**
     * UUID of the Email Template
     */
    uuid: string;
};
export type DeleteEmailTemplatesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteEmailTemplatesRequest$inboundSchema: z.ZodType<DeleteEmailTemplatesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteEmailTemplatesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteEmailTemplatesRequest$outboundSchema: z.ZodType<DeleteEmailTemplatesRequest$Outbound, z.ZodTypeDef, DeleteEmailTemplatesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteEmailTemplatesRequest$ {
    /** @deprecated use `DeleteEmailTemplatesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteEmailTemplatesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteEmailTemplatesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteEmailTemplatesRequest$Outbound, z.ZodTypeDef, DeleteEmailTemplatesRequest>;
    /** @deprecated use `DeleteEmailTemplatesRequest$Outbound` instead. */
    type Outbound = DeleteEmailTemplatesRequest$Outbound;
}
export declare function deleteEmailTemplatesRequestToJSON(deleteEmailTemplatesRequest: DeleteEmailTemplatesRequest): string;
export declare function deleteEmailTemplatesRequestFromJSON(jsonString: string): SafeParseResult<DeleteEmailTemplatesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteEmailTemplatesResponse$inboundSchema: z.ZodType<DeleteEmailTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteEmailTemplatesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteEmailTemplatesResponse$outboundSchema: z.ZodType<DeleteEmailTemplatesResponse$Outbound, z.ZodTypeDef, DeleteEmailTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteEmailTemplatesResponse$ {
    /** @deprecated use `DeleteEmailTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteEmailTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteEmailTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteEmailTemplatesResponse$Outbound, z.ZodTypeDef, DeleteEmailTemplatesResponse>;
    /** @deprecated use `DeleteEmailTemplatesResponse$Outbound` instead. */
    type Outbound = DeleteEmailTemplatesResponse$Outbound;
}
export declare function deleteEmailTemplatesResponseToJSON(deleteEmailTemplatesResponse: DeleteEmailTemplatesResponse): string;
export declare function deleteEmailTemplatesResponseFromJSON(jsonString: string): SafeParseResult<DeleteEmailTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=deleteemailtemplates.d.ts.map