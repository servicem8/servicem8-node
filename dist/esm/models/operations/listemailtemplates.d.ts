import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListEmailTemplatesResponse = components.ErrorT | Array<components.EmailTemplate>;
/** @internal */
export declare const ListEmailTemplatesResponse$inboundSchema: z.ZodType<ListEmailTemplatesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListEmailTemplatesResponse$Outbound = components.ErrorT$Outbound | Array<components.EmailTemplate$Outbound>;
/** @internal */
export declare const ListEmailTemplatesResponse$outboundSchema: z.ZodType<ListEmailTemplatesResponse$Outbound, z.ZodTypeDef, ListEmailTemplatesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListEmailTemplatesResponse$ {
    /** @deprecated use `ListEmailTemplatesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListEmailTemplatesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListEmailTemplatesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListEmailTemplatesResponse$Outbound, z.ZodTypeDef, ListEmailTemplatesResponse>;
    /** @deprecated use `ListEmailTemplatesResponse$Outbound` instead. */
    type Outbound = ListEmailTemplatesResponse$Outbound;
}
export declare function listEmailTemplatesResponseToJSON(listEmailTemplatesResponse: ListEmailTemplatesResponse): string;
export declare function listEmailTemplatesResponseFromJSON(jsonString: string): SafeParseResult<ListEmailTemplatesResponse, SDKValidationError>;
//# sourceMappingURL=listemailtemplates.d.ts.map