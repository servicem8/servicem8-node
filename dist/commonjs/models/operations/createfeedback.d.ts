import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CreateFeedbackResponseResult = components.Result | components.ErrorT;
export type CreateFeedbackResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.Result | components.ErrorT;
};
/** @internal */
export declare const CreateFeedbackResponseResult$inboundSchema: z.ZodType<CreateFeedbackResponseResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFeedbackResponseResult$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const CreateFeedbackResponseResult$outboundSchema: z.ZodType<CreateFeedbackResponseResult$Outbound, z.ZodTypeDef, CreateFeedbackResponseResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateFeedbackResponseResult$ {
    /** @deprecated use `CreateFeedbackResponseResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateFeedbackResponseResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateFeedbackResponseResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateFeedbackResponseResult$Outbound, z.ZodTypeDef, CreateFeedbackResponseResult>;
    /** @deprecated use `CreateFeedbackResponseResult$Outbound` instead. */
    type Outbound = CreateFeedbackResponseResult$Outbound;
}
export declare function createFeedbackResponseResultToJSON(createFeedbackResponseResult: CreateFeedbackResponseResult): string;
export declare function createFeedbackResponseResultFromJSON(jsonString: string): SafeParseResult<CreateFeedbackResponseResult, SDKValidationError>;
/** @internal */
export declare const CreateFeedbackResponse$inboundSchema: z.ZodType<CreateFeedbackResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateFeedbackResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.Result$Outbound | components.ErrorT$Outbound;
};
/** @internal */
export declare const CreateFeedbackResponse$outboundSchema: z.ZodType<CreateFeedbackResponse$Outbound, z.ZodTypeDef, CreateFeedbackResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateFeedbackResponse$ {
    /** @deprecated use `CreateFeedbackResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateFeedbackResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateFeedbackResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateFeedbackResponse$Outbound, z.ZodTypeDef, CreateFeedbackResponse>;
    /** @deprecated use `CreateFeedbackResponse$Outbound` instead. */
    type Outbound = CreateFeedbackResponse$Outbound;
}
export declare function createFeedbackResponseToJSON(createFeedbackResponse: CreateFeedbackResponse): string;
export declare function createFeedbackResponseFromJSON(jsonString: string): SafeParseResult<CreateFeedbackResponse, SDKValidationError>;
//# sourceMappingURL=createfeedback.d.ts.map