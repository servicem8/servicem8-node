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
export declare const EmailTemplateActive: {
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
export type EmailTemplateActive = ClosedEnum<typeof EmailTemplateActive>;
export type EmailTemplate = {
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
    active?: EmailTemplateActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name: string;
    subject?: string | undefined;
    message?: string | undefined;
};
export type EmailTemplateInput = {
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
    active?: EmailTemplateActive | undefined;
    name: string;
    subject?: string | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const EmailTemplateActive$inboundSchema: z.ZodNativeEnum<typeof EmailTemplateActive>;
/** @internal */
export declare const EmailTemplateActive$outboundSchema: z.ZodNativeEnum<typeof EmailTemplateActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmailTemplateActive$ {
    /** @deprecated use `EmailTemplateActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `EmailTemplateActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const EmailTemplate$inboundSchema: z.ZodType<EmailTemplate, z.ZodTypeDef, unknown>;
/** @internal */
export type EmailTemplate$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    subject?: string | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const EmailTemplate$outboundSchema: z.ZodType<EmailTemplate$Outbound, z.ZodTypeDef, EmailTemplate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmailTemplate$ {
    /** @deprecated use `EmailTemplate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmailTemplate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmailTemplate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmailTemplate$Outbound, z.ZodTypeDef, EmailTemplate>;
    /** @deprecated use `EmailTemplate$Outbound` instead. */
    type Outbound = EmailTemplate$Outbound;
}
export declare function emailTemplateToJSON(emailTemplate: EmailTemplate): string;
export declare function emailTemplateFromJSON(jsonString: string): SafeParseResult<EmailTemplate, SDKValidationError>;
/** @internal */
export declare const EmailTemplateInput$inboundSchema: z.ZodType<EmailTemplateInput, z.ZodTypeDef, unknown>;
/** @internal */
export type EmailTemplateInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    subject?: string | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const EmailTemplateInput$outboundSchema: z.ZodType<EmailTemplateInput$Outbound, z.ZodTypeDef, EmailTemplateInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmailTemplateInput$ {
    /** @deprecated use `EmailTemplateInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmailTemplateInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmailTemplateInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmailTemplateInput$Outbound, z.ZodTypeDef, EmailTemplateInput>;
    /** @deprecated use `EmailTemplateInput$Outbound` instead. */
    type Outbound = EmailTemplateInput$Outbound;
}
export declare function emailTemplateInputToJSON(emailTemplateInput: EmailTemplateInput): string;
export declare function emailTemplateInputFromJSON(jsonString: string): SafeParseResult<EmailTemplateInput, SDKValidationError>;
//# sourceMappingURL=emailtemplate.d.ts.map