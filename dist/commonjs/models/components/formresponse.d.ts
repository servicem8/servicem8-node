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
export declare const FormResponseActive: {
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
export type FormResponseActive = ClosedEnum<typeof FormResponseActive>;
export type FormResponse = {
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
    active?: FormResponseActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    formUuid?: string | undefined;
    staffUuid?: string | undefined;
    regardingObject?: string | undefined;
    regardingObjectUuid?: string | undefined;
    fieldData?: string | undefined;
    timestamp?: string | undefined;
    formByStaffUuid?: string | undefined;
    documentAttachmentUuid?: string | undefined;
    assetUuid?: string | undefined;
};
export type FormResponseInput = {
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
    active?: FormResponseActive | undefined;
    formUuid?: string | undefined;
    staffUuid?: string | undefined;
    regardingObject?: string | undefined;
    regardingObjectUuid?: string | undefined;
    fieldData?: string | undefined;
    timestamp?: string | undefined;
    formByStaffUuid?: string | undefined;
    documentAttachmentUuid?: string | undefined;
    assetUuid?: string | undefined;
};
/** @internal */
export declare const FormResponseActive$inboundSchema: z.ZodNativeEnum<typeof FormResponseActive>;
/** @internal */
export declare const FormResponseActive$outboundSchema: z.ZodNativeEnum<typeof FormResponseActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormResponseActive$ {
    /** @deprecated use `FormResponseActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `FormResponseActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const FormResponse$inboundSchema: z.ZodType<FormResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FormResponse$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    form_uuid?: string | undefined;
    staff_uuid?: string | undefined;
    regarding_object?: string | undefined;
    regarding_object_uuid?: string | undefined;
    field_data?: string | undefined;
    timestamp?: string | undefined;
    form_by_staff_uuid?: string | undefined;
    document_attachment_uuid?: string | undefined;
    asset_uuid?: string | undefined;
};
/** @internal */
export declare const FormResponse$outboundSchema: z.ZodType<FormResponse$Outbound, z.ZodTypeDef, FormResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormResponse$ {
    /** @deprecated use `FormResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormResponse$Outbound, z.ZodTypeDef, FormResponse>;
    /** @deprecated use `FormResponse$Outbound` instead. */
    type Outbound = FormResponse$Outbound;
}
export declare function formResponseToJSON(formResponse: FormResponse): string;
export declare function formResponseFromJSON(jsonString: string): SafeParseResult<FormResponse, SDKValidationError>;
/** @internal */
export declare const FormResponseInput$inboundSchema: z.ZodType<FormResponseInput, z.ZodTypeDef, unknown>;
/** @internal */
export type FormResponseInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    form_uuid?: string | undefined;
    staff_uuid?: string | undefined;
    regarding_object?: string | undefined;
    regarding_object_uuid?: string | undefined;
    field_data?: string | undefined;
    timestamp?: string | undefined;
    form_by_staff_uuid?: string | undefined;
    document_attachment_uuid?: string | undefined;
    asset_uuid?: string | undefined;
};
/** @internal */
export declare const FormResponseInput$outboundSchema: z.ZodType<FormResponseInput$Outbound, z.ZodTypeDef, FormResponseInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormResponseInput$ {
    /** @deprecated use `FormResponseInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormResponseInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormResponseInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormResponseInput$Outbound, z.ZodTypeDef, FormResponseInput>;
    /** @deprecated use `FormResponseInput$Outbound` instead. */
    type Outbound = FormResponseInput$Outbound;
}
export declare function formResponseInputToJSON(formResponseInput: FormResponseInput): string;
export declare function formResponseInputFromJSON(jsonString: string): SafeParseResult<FormResponseInput, SDKValidationError>;
//# sourceMappingURL=formresponse.d.ts.map