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
export declare const FormFieldActive: {
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
export type FormFieldActive = ClosedEnum<typeof FormFieldActive>;
export type FormField = {
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
    active?: FormFieldActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    formUuid?: string | undefined;
    name?: string | undefined;
    fieldDataJson?: string | undefined;
    sortOrder?: string | undefined;
};
export type FormFieldInput = {
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
    active?: FormFieldActive | undefined;
    formUuid?: string | undefined;
    name?: string | undefined;
    fieldDataJson?: string | undefined;
    sortOrder?: string | undefined;
};
/** @internal */
export declare const FormFieldActive$inboundSchema: z.ZodNativeEnum<typeof FormFieldActive>;
/** @internal */
export declare const FormFieldActive$outboundSchema: z.ZodNativeEnum<typeof FormFieldActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormFieldActive$ {
    /** @deprecated use `FormFieldActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `FormFieldActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const FormField$inboundSchema: z.ZodType<FormField, z.ZodTypeDef, unknown>;
/** @internal */
export type FormField$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    form_uuid?: string | undefined;
    name?: string | undefined;
    field_data_json?: string | undefined;
    sort_order?: string | undefined;
};
/** @internal */
export declare const FormField$outboundSchema: z.ZodType<FormField$Outbound, z.ZodTypeDef, FormField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormField$ {
    /** @deprecated use `FormField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormField, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormField$Outbound, z.ZodTypeDef, FormField>;
    /** @deprecated use `FormField$Outbound` instead. */
    type Outbound = FormField$Outbound;
}
export declare function formFieldToJSON(formField: FormField): string;
export declare function formFieldFromJSON(jsonString: string): SafeParseResult<FormField, SDKValidationError>;
/** @internal */
export declare const FormFieldInput$inboundSchema: z.ZodType<FormFieldInput, z.ZodTypeDef, unknown>;
/** @internal */
export type FormFieldInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    form_uuid?: string | undefined;
    name?: string | undefined;
    field_data_json?: string | undefined;
    sort_order?: string | undefined;
};
/** @internal */
export declare const FormFieldInput$outboundSchema: z.ZodType<FormFieldInput$Outbound, z.ZodTypeDef, FormFieldInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormFieldInput$ {
    /** @deprecated use `FormFieldInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormFieldInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormFieldInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormFieldInput$Outbound, z.ZodTypeDef, FormFieldInput>;
    /** @deprecated use `FormFieldInput$Outbound` instead. */
    type Outbound = FormFieldInput$Outbound;
}
export declare function formFieldInputToJSON(formFieldInput: FormFieldInput): string;
export declare function formFieldInputFromJSON(jsonString: string): SafeParseResult<FormFieldInput, SDKValidationError>;
//# sourceMappingURL=formfield.d.ts.map