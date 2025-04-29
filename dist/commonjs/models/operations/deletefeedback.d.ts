import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteFeedbackRequest = {
    /**
     * UUID of the Feedback
     */
    uuid: string;
};
export type DeleteFeedbackResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteFeedbackRequest$inboundSchema: z.ZodType<DeleteFeedbackRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFeedbackRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteFeedbackRequest$outboundSchema: z.ZodType<DeleteFeedbackRequest$Outbound, z.ZodTypeDef, DeleteFeedbackRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteFeedbackRequest$ {
    /** @deprecated use `DeleteFeedbackRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteFeedbackRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteFeedbackRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteFeedbackRequest$Outbound, z.ZodTypeDef, DeleteFeedbackRequest>;
    /** @deprecated use `DeleteFeedbackRequest$Outbound` instead. */
    type Outbound = DeleteFeedbackRequest$Outbound;
}
export declare function deleteFeedbackRequestToJSON(deleteFeedbackRequest: DeleteFeedbackRequest): string;
export declare function deleteFeedbackRequestFromJSON(jsonString: string): SafeParseResult<DeleteFeedbackRequest, SDKValidationError>;
/** @internal */
export declare const DeleteFeedbackResponse$inboundSchema: z.ZodType<DeleteFeedbackResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteFeedbackResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteFeedbackResponse$outboundSchema: z.ZodType<DeleteFeedbackResponse$Outbound, z.ZodTypeDef, DeleteFeedbackResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteFeedbackResponse$ {
    /** @deprecated use `DeleteFeedbackResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteFeedbackResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteFeedbackResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteFeedbackResponse$Outbound, z.ZodTypeDef, DeleteFeedbackResponse>;
    /** @deprecated use `DeleteFeedbackResponse$Outbound` instead. */
    type Outbound = DeleteFeedbackResponse$Outbound;
}
export declare function deleteFeedbackResponseToJSON(deleteFeedbackResponse: DeleteFeedbackResponse): string;
export declare function deleteFeedbackResponseFromJSON(jsonString: string): SafeParseResult<DeleteFeedbackResponse, SDKValidationError>;
//# sourceMappingURL=deletefeedback.d.ts.map