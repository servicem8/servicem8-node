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
export declare const SmsTemplateActive: {
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
export type SmsTemplateActive = ClosedEnum<typeof SmsTemplateActive>;
export type SmsTemplate = {
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
    active?: SmsTemplateActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name: string;
    message?: string | undefined;
};
export type SmsTemplateInput = {
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
    active?: SmsTemplateActive | undefined;
    name: string;
    message?: string | undefined;
};
/** @internal */
export declare const SmsTemplateActive$inboundSchema: z.ZodNativeEnum<typeof SmsTemplateActive>;
/** @internal */
export declare const SmsTemplateActive$outboundSchema: z.ZodNativeEnum<typeof SmsTemplateActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SmsTemplateActive$ {
    /** @deprecated use `SmsTemplateActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `SmsTemplateActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const SmsTemplate$inboundSchema: z.ZodType<SmsTemplate, z.ZodTypeDef, unknown>;
/** @internal */
export type SmsTemplate$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    message?: string | undefined;
};
/** @internal */
export declare const SmsTemplate$outboundSchema: z.ZodType<SmsTemplate$Outbound, z.ZodTypeDef, SmsTemplate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SmsTemplate$ {
    /** @deprecated use `SmsTemplate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SmsTemplate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SmsTemplate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SmsTemplate$Outbound, z.ZodTypeDef, SmsTemplate>;
    /** @deprecated use `SmsTemplate$Outbound` instead. */
    type Outbound = SmsTemplate$Outbound;
}
export declare function smsTemplateToJSON(smsTemplate: SmsTemplate): string;
export declare function smsTemplateFromJSON(jsonString: string): SafeParseResult<SmsTemplate, SDKValidationError>;
/** @internal */
export declare const SmsTemplateInput$inboundSchema: z.ZodType<SmsTemplateInput, z.ZodTypeDef, unknown>;
/** @internal */
export type SmsTemplateInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    message?: string | undefined;
};
/** @internal */
export declare const SmsTemplateInput$outboundSchema: z.ZodType<SmsTemplateInput$Outbound, z.ZodTypeDef, SmsTemplateInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SmsTemplateInput$ {
    /** @deprecated use `SmsTemplateInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SmsTemplateInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `SmsTemplateInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SmsTemplateInput$Outbound, z.ZodTypeDef, SmsTemplateInput>;
    /** @deprecated use `SmsTemplateInput$Outbound` instead. */
    type Outbound = SmsTemplateInput$Outbound;
}
export declare function smsTemplateInputToJSON(smsTemplateInput: SmsTemplateInput): string;
export declare function smsTemplateInputFromJSON(jsonString: string): SafeParseResult<SmsTemplateInput, SDKValidationError>;
//# sourceMappingURL=smstemplate.d.ts.map