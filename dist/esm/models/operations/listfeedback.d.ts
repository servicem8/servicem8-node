import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListFeedbackResponse = components.ErrorT | Array<components.Feedback>;
/** @internal */
export declare const ListFeedbackResponse$inboundSchema: z.ZodType<ListFeedbackResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListFeedbackResponse$Outbound = components.ErrorT$Outbound | Array<components.Feedback$Outbound>;
/** @internal */
export declare const ListFeedbackResponse$outboundSchema: z.ZodType<ListFeedbackResponse$Outbound, z.ZodTypeDef, ListFeedbackResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListFeedbackResponse$ {
    /** @deprecated use `ListFeedbackResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListFeedbackResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListFeedbackResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListFeedbackResponse$Outbound, z.ZodTypeDef, ListFeedbackResponse>;
    /** @deprecated use `ListFeedbackResponse$Outbound` instead. */
    type Outbound = ListFeedbackResponse$Outbound;
}
export declare function listFeedbackResponseToJSON(listFeedbackResponse: ListFeedbackResponse): string;
export declare function listFeedbackResponseFromJSON(jsonString: string): SafeParseResult<ListFeedbackResponse, SDKValidationError>;
//# sourceMappingURL=listfeedback.d.ts.map