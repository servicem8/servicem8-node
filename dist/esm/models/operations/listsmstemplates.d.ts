import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListSMSTemplatesResponse = components.ErrorT | Array<components.SmsTemplate>;
/** @internal */
export declare const ListSMSTemplatesResponse$inboundSchema: z.ZodType<ListSMSTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSMSTemplatesResponse$Outbound = components.ErrorT$Outbound | Array<components.SmsTemplate$Outbound>;
/** @internal */
export declare const ListSMSTemplatesResponse$outboundSchema: z.ZodType<ListSMSTemplatesResponse$Outbound, z.ZodTypeDef, ListSMSTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListSMSTemplatesResponse$ {
    /** @deprecated use `ListSMSTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListSMSTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListSMSTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListSMSTemplatesResponse$Outbound, z.ZodTypeDef, ListSMSTemplatesResponse>;
    /** @deprecated use `ListSMSTemplatesResponse$Outbound` instead. */
    type Outbound = ListSMSTemplatesResponse$Outbound;
}
export declare function listSMSTemplatesResponseToJSON(listSMSTemplatesResponse: ListSMSTemplatesResponse): string;
export declare function listSMSTemplatesResponseFromJSON(jsonString: string): SafeParseResult<ListSMSTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=listsmstemplates.d.ts.map