import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetFeedbackRequest = {
    /**
     * UUID of the Feedback
     */
    uuid: string;
};
export type GetFeedbackResponse = components.ErrorT | components.Feedback;
/** @internal */
export declare const GetFeedbackRequest$inboundSchema: z.ZodType<GetFeedbackRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFeedbackRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetFeedbackRequest$outboundSchema: z.ZodType<GetFeedbackRequest$Outbound, z.ZodTypeDef, GetFeedbackRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetFeedbackRequest$ {
    /** @deprecated use `GetFeedbackRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetFeedbackRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetFeedbackRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetFeedbackRequest$Outbound, z.ZodTypeDef, GetFeedbackRequest>;
    /** @deprecated use `GetFeedbackRequest$Outbound` instead. */
    type Outbound = GetFeedbackRequest$Outbound;
}
export declare function getFeedbackRequestToJSON(getFeedbackRequest: GetFeedbackRequest): string;
export declare function getFeedbackRequestFromJSON(jsonString: string): SafeParseResult<GetFeedbackRequest, SDKValidationError>;
/** @internal */
export declare const GetFeedbackResponse$inboundSchema: z.ZodType<GetFeedbackResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetFeedbackResponse$Outbound = components.ErrorT$Outbound | components.Feedback$Outbound;
/** @internal */
export declare const GetFeedbackResponse$outboundSchema: z.ZodType<GetFeedbackResponse$Outbound, z.ZodTypeDef, GetFeedbackResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetFeedbackResponse$ {
    /** @deprecated use `GetFeedbackResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetFeedbackResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetFeedbackResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetFeedbackResponse$Outbound, z.ZodTypeDef, GetFeedbackResponse>;
    /** @deprecated use `GetFeedbackResponse$Outbound` instead. */
    type Outbound = GetFeedbackResponse$Outbound;
}
export declare function getFeedbackResponseToJSON(getFeedbackResponse: GetFeedbackResponse): string;
export declare function getFeedbackResponseFromJSON(jsonString: string): SafeParseResult<GetFeedbackResponse, SDKValidationError>;
//# sourceMappingURL=getfeedback.d.ts.map