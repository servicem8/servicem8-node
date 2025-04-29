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
export declare const AttachmentActive: {
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
export type AttachmentActive = ClosedEnum<typeof AttachmentActive>;
export type Attachment = {
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
    active?: AttachmentActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    relatedObject?: string | undefined;
    relatedObjectUuid?: string | undefined;
    /**
     * The security roles description
     */
    attachmentName?: string | undefined;
    /**
     * Location's name
     */
    fileType?: string | undefined;
    createdByStaffUuid?: string | undefined;
    timestamp?: string | undefined;
    attachmentSource?: string | undefined;
    tags?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    photoWidth?: string | undefined;
    photoHeight?: string | undefined;
    extractedInfo?: string | undefined;
    isFavourite?: string | undefined;
    className?: string | undefined;
    metadata?: string | undefined;
};
export type AttachmentInput = {
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
    active?: AttachmentActive | undefined;
    relatedObject?: string | undefined;
    relatedObjectUuid?: string | undefined;
    /**
     * The security roles description
     */
    attachmentName?: string | undefined;
    /**
     * Location's name
     */
    fileType?: string | undefined;
    createdByStaffUuid?: string | undefined;
    timestamp?: string | undefined;
    attachmentSource?: string | undefined;
    tags?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    photoWidth?: string | undefined;
    photoHeight?: string | undefined;
    extractedInfo?: string | undefined;
    isFavourite?: string | undefined;
    className?: string | undefined;
    metadata?: string | undefined;
};
/** @internal */
export declare const AttachmentActive$inboundSchema: z.ZodNativeEnum<typeof AttachmentActive>;
/** @internal */
export declare const AttachmentActive$outboundSchema: z.ZodNativeEnum<typeof AttachmentActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AttachmentActive$ {
    /** @deprecated use `AttachmentActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `AttachmentActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Attachment$inboundSchema: z.ZodType<Attachment, z.ZodTypeDef, unknown>;
/** @internal */
export type Attachment$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    related_object?: string | undefined;
    related_object_uuid?: string | undefined;
    attachment_name?: string | undefined;
    file_type?: string | undefined;
    created_by_staff_uuid?: string | undefined;
    timestamp?: string | undefined;
    attachment_source?: string | undefined;
    tags?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    photo_width?: string | undefined;
    photo_height?: string | undefined;
    extracted_info?: string | undefined;
    is_favourite?: string | undefined;
    class_name?: string | undefined;
    metadata?: string | undefined;
};
/** @internal */
export declare const Attachment$outboundSchema: z.ZodType<Attachment$Outbound, z.ZodTypeDef, Attachment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Attachment$ {
    /** @deprecated use `Attachment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Attachment, z.ZodTypeDef, unknown>;
    /** @deprecated use `Attachment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Attachment$Outbound, z.ZodTypeDef, Attachment>;
    /** @deprecated use `Attachment$Outbound` instead. */
    type Outbound = Attachment$Outbound;
}
export declare function attachmentToJSON(attachment: Attachment): string;
export declare function attachmentFromJSON(jsonString: string): SafeParseResult<Attachment, SDKValidationError>;
/** @internal */
export declare const AttachmentInput$inboundSchema: z.ZodType<AttachmentInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AttachmentInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    related_object?: string | undefined;
    related_object_uuid?: string | undefined;
    attachment_name?: string | undefined;
    file_type?: string | undefined;
    created_by_staff_uuid?: string | undefined;
    timestamp?: string | undefined;
    attachment_source?: string | undefined;
    tags?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    photo_width?: string | undefined;
    photo_height?: string | undefined;
    extracted_info?: string | undefined;
    is_favourite?: string | undefined;
    class_name?: string | undefined;
    metadata?: string | undefined;
};
/** @internal */
export declare const AttachmentInput$outboundSchema: z.ZodType<AttachmentInput$Outbound, z.ZodTypeDef, AttachmentInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AttachmentInput$ {
    /** @deprecated use `AttachmentInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AttachmentInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AttachmentInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AttachmentInput$Outbound, z.ZodTypeDef, AttachmentInput>;
    /** @deprecated use `AttachmentInput$Outbound` instead. */
    type Outbound = AttachmentInput$Outbound;
}
export declare function attachmentInputToJSON(attachmentInput: AttachmentInput): string;
export declare function attachmentInputFromJSON(jsonString: string): SafeParseResult<AttachmentInput, SDKValidationError>;
//# sourceMappingURL=attachment.d.ts.map