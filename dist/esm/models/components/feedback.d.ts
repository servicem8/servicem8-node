import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const FeedbackActive: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export type FeedbackActive = ClosedEnum<typeof FeedbackActive>;
export type Feedback = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: FeedbackActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    timestamp?: string | undefined;
    relatedObject?: string | undefined;
    relatedObjectUuid?: string | undefined;
    rating?: string | undefined;
    comment?: string | undefined;
};
export type FeedbackInput = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: FeedbackActive | undefined;
    timestamp?: string | undefined;
    relatedObject?: string | undefined;
    relatedObjectUuid?: string | undefined;
    rating?: string | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const FeedbackActive$inboundSchema: z.ZodNativeEnum<typeof FeedbackActive>;
/** @internal */
export declare const FeedbackActive$outboundSchema: z.ZodNativeEnum<typeof FeedbackActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeedbackActive$ {
    /** @deprecated use `FeedbackActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `FeedbackActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Feedback$inboundSchema: z.ZodType<Feedback, z.ZodTypeDef, unknown>;
/** @internal */
export type Feedback$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    timestamp?: string | undefined;
    related_object?: string | undefined;
    related_object_uuid?: string | undefined;
    rating?: string | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const Feedback$outboundSchema: z.ZodType<Feedback$Outbound, z.ZodTypeDef, Feedback>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Feedback$ {
    /** @deprecated use `Feedback$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Feedback, z.ZodTypeDef, unknown>;
    /** @deprecated use `Feedback$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Feedback$Outbound, z.ZodTypeDef, Feedback>;
    /** @deprecated use `Feedback$Outbound` instead. */
    type Outbound = Feedback$Outbound;
}
export declare function feedbackToJSON(feedback: Feedback): string;
export declare function feedbackFromJSON(jsonString: string): SafeParseResult<Feedback, SDKValidationError>;
/** @internal */
export declare const FeedbackInput$inboundSchema: z.ZodType<FeedbackInput, z.ZodTypeDef, unknown>;
/** @internal */
export type FeedbackInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    timestamp?: string | undefined;
    related_object?: string | undefined;
    related_object_uuid?: string | undefined;
    rating?: string | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const FeedbackInput$outboundSchema: z.ZodType<FeedbackInput$Outbound, z.ZodTypeDef, FeedbackInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeedbackInput$ {
    /** @deprecated use `FeedbackInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeedbackInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeedbackInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeedbackInput$Outbound, z.ZodTypeDef, FeedbackInput>;
    /** @deprecated use `FeedbackInput$Outbound` instead. */
    type Outbound = FeedbackInput$Outbound;
}
export declare function feedbackInputToJSON(feedbackInput: FeedbackInput): string;
export declare function feedbackInputFromJSON(jsonString: string): SafeParseResult<FeedbackInput, SDKValidationError>;
//# sourceMappingURL=feedback.d.ts.map