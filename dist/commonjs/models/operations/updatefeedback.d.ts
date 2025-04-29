import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateFeedbackRequest = {
    /**
     * UUID of the Feedback
     */
    uuid: string;
    /**
     * Feedback fields to update
     */
    feedback: components.FeedbackInput;
};
export type UpdateFeedbackResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateFeedbackRequest$inboundSchema: z.ZodType<UpdateFeedbackRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFeedbackRequest$Outbound = {
    uuid: string;
    Feedback: components.FeedbackInput$Outbound;
};
/** @internal */
export declare const UpdateFeedbackRequest$outboundSchema: z.ZodType<UpdateFeedbackRequest$Outbound, z.ZodTypeDef, UpdateFeedbackRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateFeedbackRequest$ {
    /** @deprecated use `UpdateFeedbackRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateFeedbackRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateFeedbackRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateFeedbackRequest$Outbound, z.ZodTypeDef, UpdateFeedbackRequest>;
    /** @deprecated use `UpdateFeedbackRequest$Outbound` instead. */
    type Outbound = UpdateFeedbackRequest$Outbound;
}
export declare function updateFeedbackRequestToJSON(updateFeedbackRequest: UpdateFeedbackRequest): string;
export declare function updateFeedbackRequestFromJSON(jsonString: string): SafeParseResult<UpdateFeedbackRequest, SDKValidationError>;
/** @internal */
export declare const UpdateFeedbackResponse$inboundSchema: z.ZodType<UpdateFeedbackResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateFeedbackResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateFeedbackResponse$outboundSchema: z.ZodType<UpdateFeedbackResponse$Outbound, z.ZodTypeDef, UpdateFeedbackResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateFeedbackResponse$ {
    /** @deprecated use `UpdateFeedbackResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateFeedbackResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateFeedbackResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateFeedbackResponse$Outbound, z.ZodTypeDef, UpdateFeedbackResponse>;
    /** @deprecated use `UpdateFeedbackResponse$Outbound` instead. */
    type Outbound = UpdateFeedbackResponse$Outbound;
}
export declare function updateFeedbackResponseToJSON(updateFeedbackResponse: UpdateFeedbackResponse): string;
export declare function updateFeedbackResponseFromJSON(jsonString: string): SafeParseResult<UpdateFeedbackResponse, SDKValidationError>;
//# sourceMappingURL=updatefeedback.d.ts.map