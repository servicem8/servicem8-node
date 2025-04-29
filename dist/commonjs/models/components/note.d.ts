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
export declare const NoteActive: {
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
export type NoteActive = ClosedEnum<typeof NoteActive>;
export type Note = {
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
    active?: NoteActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    relatedObject?: string | undefined;
    relatedObjectUuid?: string | undefined;
    note?: string | undefined;
    actionRequired?: string | undefined;
    actionCompletedByStaffUuid?: string | undefined;
    /**
     * Staff Member who last modified record
     */
    editByStaffUuid?: string | undefined;
    /**
     * Record creation timestamp
     */
    createDate?: string | undefined;
};
export type NoteInput = {
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
    active?: NoteActive | undefined;
    relatedObject?: string | undefined;
    relatedObjectUuid?: string | undefined;
    note?: string | undefined;
    actionRequired?: string | undefined;
    actionCompletedByStaffUuid?: string | undefined;
    /**
     * Record creation timestamp
     */
    createDate?: string | undefined;
};
/** @internal */
export declare const NoteActive$inboundSchema: z.ZodNativeEnum<typeof NoteActive>;
/** @internal */
export declare const NoteActive$outboundSchema: z.ZodNativeEnum<typeof NoteActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NoteActive$ {
    /** @deprecated use `NoteActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `NoteActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Note$inboundSchema: z.ZodType<Note, z.ZodTypeDef, unknown>;
/** @internal */
export type Note$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    related_object?: string | undefined;
    related_object_uuid?: string | undefined;
    note?: string | undefined;
    action_required?: string | undefined;
    action_completed_by_staff_uuid?: string | undefined;
    edit_by_staff_uuid?: string | undefined;
    create_date?: string | undefined;
};
/** @internal */
export declare const Note$outboundSchema: z.ZodType<Note$Outbound, z.ZodTypeDef, Note>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Note$ {
    /** @deprecated use `Note$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Note, z.ZodTypeDef, unknown>;
    /** @deprecated use `Note$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Note$Outbound, z.ZodTypeDef, Note>;
    /** @deprecated use `Note$Outbound` instead. */
    type Outbound = Note$Outbound;
}
export declare function noteToJSON(note: Note): string;
export declare function noteFromJSON(jsonString: string): SafeParseResult<Note, SDKValidationError>;
/** @internal */
export declare const NoteInput$inboundSchema: z.ZodType<NoteInput, z.ZodTypeDef, unknown>;
/** @internal */
export type NoteInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    related_object?: string | undefined;
    related_object_uuid?: string | undefined;
    note?: string | undefined;
    action_required?: string | undefined;
    action_completed_by_staff_uuid?: string | undefined;
    create_date?: string | undefined;
};
/** @internal */
export declare const NoteInput$outboundSchema: z.ZodType<NoteInput$Outbound, z.ZodTypeDef, NoteInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NoteInput$ {
    /** @deprecated use `NoteInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NoteInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `NoteInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NoteInput$Outbound, z.ZodTypeDef, NoteInput>;
    /** @deprecated use `NoteInput$Outbound` instead. */
    type Outbound = NoteInput$Outbound;
}
export declare function noteInputToJSON(noteInput: NoteInput): string;
export declare function noteInputFromJSON(jsonString: string): SafeParseResult<NoteInput, SDKValidationError>;
//# sourceMappingURL=note.d.ts.map