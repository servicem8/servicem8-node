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
export declare const FormActive: {
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
export type FormActive = ClosedEnum<typeof FormActive>;
export declare const FormFieldType: {
    readonly Text: "Text";
};
export type FormFieldType = ClosedEnum<typeof FormFieldType>;
export type TemplateField = {
    name: string;
    fieldType: FormFieldType;
    value: string;
    sortOrder: number;
};
export type Form = {
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
    active?: FormActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name?: string | undefined;
    documentTemplateUuid?: string | undefined;
    canBeUsedIndependently?: string | undefined;
    badgeMandatoryState?: string | undefined;
    templateFields?: Array<TemplateField> | undefined;
};
export type FormInput = {
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
    active?: FormActive | undefined;
    name?: string | undefined;
    documentTemplateUuid?: string | undefined;
    canBeUsedIndependently?: string | undefined;
    badgeMandatoryState?: string | undefined;
    templateFields?: Array<TemplateField> | undefined;
};
/** @internal */
export declare const FormActive$inboundSchema: z.ZodNativeEnum<typeof FormActive>;
/** @internal */
export declare const FormActive$outboundSchema: z.ZodNativeEnum<typeof FormActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormActive$ {
    /** @deprecated use `FormActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `FormActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const FormFieldType$inboundSchema: z.ZodNativeEnum<typeof FormFieldType>;
/** @internal */
export declare const FormFieldType$outboundSchema: z.ZodNativeEnum<typeof FormFieldType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormFieldType$ {
    /** @deprecated use `FormFieldType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Text: "Text";
    }>;
    /** @deprecated use `FormFieldType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Text: "Text";
    }>;
}
/** @internal */
export declare const TemplateField$inboundSchema: z.ZodType<TemplateField, z.ZodTypeDef, unknown>;
/** @internal */
export type TemplateField$Outbound = {
    name: string;
    fieldType: string;
    value: string;
    sortOrder: number;
};
/** @internal */
export declare const TemplateField$outboundSchema: z.ZodType<TemplateField$Outbound, z.ZodTypeDef, TemplateField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TemplateField$ {
    /** @deprecated use `TemplateField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TemplateField, z.ZodTypeDef, unknown>;
    /** @deprecated use `TemplateField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TemplateField$Outbound, z.ZodTypeDef, TemplateField>;
    /** @deprecated use `TemplateField$Outbound` instead. */
    type Outbound = TemplateField$Outbound;
}
export declare function templateFieldToJSON(templateField: TemplateField): string;
export declare function templateFieldFromJSON(jsonString: string): SafeParseResult<TemplateField, SDKValidationError>;
/** @internal */
export declare const Form$inboundSchema: z.ZodType<Form, z.ZodTypeDef, unknown>;
/** @internal */
export type Form$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name?: string | undefined;
    document_template_uuid?: string | undefined;
    can_be_used_independently?: string | undefined;
    badge_mandatory_state?: string | undefined;
    template_fields?: Array<TemplateField$Outbound> | undefined;
};
/** @internal */
export declare const Form$outboundSchema: z.ZodType<Form$Outbound, z.ZodTypeDef, Form>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Form$ {
    /** @deprecated use `Form$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Form, z.ZodTypeDef, unknown>;
    /** @deprecated use `Form$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Form$Outbound, z.ZodTypeDef, Form>;
    /** @deprecated use `Form$Outbound` instead. */
    type Outbound = Form$Outbound;
}
export declare function formToJSON(form: Form): string;
export declare function formFromJSON(jsonString: string): SafeParseResult<Form, SDKValidationError>;
/** @internal */
export declare const FormInput$inboundSchema: z.ZodType<FormInput, z.ZodTypeDef, unknown>;
/** @internal */
export type FormInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name?: string | undefined;
    document_template_uuid?: string | undefined;
    can_be_used_independently?: string | undefined;
    badge_mandatory_state?: string | undefined;
    template_fields?: Array<TemplateField$Outbound> | undefined;
};
/** @internal */
export declare const FormInput$outboundSchema: z.ZodType<FormInput$Outbound, z.ZodTypeDef, FormInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormInput$ {
    /** @deprecated use `FormInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormInput$Outbound, z.ZodTypeDef, FormInput>;
    /** @deprecated use `FormInput$Outbound` instead. */
    type Outbound = FormInput$Outbound;
}
export declare function formInputToJSON(formInput: FormInput): string;
export declare function formInputFromJSON(jsonString: string): SafeParseResult<FormInput, SDKValidationError>;
//# sourceMappingURL=form.d.ts.map