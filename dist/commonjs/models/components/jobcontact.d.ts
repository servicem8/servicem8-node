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
export declare const JobContactActive: {
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
export type JobContactActive = ClosedEnum<typeof JobContactActive>;
export type JobContact = {
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
    active?: JobContactActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    jobUuid?: string | undefined;
    first?: string | undefined;
    last?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    type?: string | undefined;
    isPrimaryContact?: string | undefined;
};
export type JobContactInput = {
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
    active?: JobContactActive | undefined;
    jobUuid?: string | undefined;
    first?: string | undefined;
    last?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    type?: string | undefined;
    isPrimaryContact?: string | undefined;
};
/** @internal */
export declare const JobContactActive$inboundSchema: z.ZodNativeEnum<typeof JobContactActive>;
/** @internal */
export declare const JobContactActive$outboundSchema: z.ZodNativeEnum<typeof JobContactActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobContactActive$ {
    /** @deprecated use `JobContactActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `JobContactActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const JobContact$inboundSchema: z.ZodType<JobContact, z.ZodTypeDef, unknown>;
/** @internal */
export type JobContact$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    job_uuid?: string | undefined;
    first?: string | undefined;
    last?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    type?: string | undefined;
    is_primary_contact?: string | undefined;
};
/** @internal */
export declare const JobContact$outboundSchema: z.ZodType<JobContact$Outbound, z.ZodTypeDef, JobContact>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobContact$ {
    /** @deprecated use `JobContact$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobContact, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobContact$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobContact$Outbound, z.ZodTypeDef, JobContact>;
    /** @deprecated use `JobContact$Outbound` instead. */
    type Outbound = JobContact$Outbound;
}
export declare function jobContactToJSON(jobContact: JobContact): string;
export declare function jobContactFromJSON(jsonString: string): SafeParseResult<JobContact, SDKValidationError>;
/** @internal */
export declare const JobContactInput$inboundSchema: z.ZodType<JobContactInput, z.ZodTypeDef, unknown>;
/** @internal */
export type JobContactInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    job_uuid?: string | undefined;
    first?: string | undefined;
    last?: string | undefined;
    phone?: string | undefined;
    mobile?: string | undefined;
    email?: string | undefined;
    type?: string | undefined;
    is_primary_contact?: string | undefined;
};
/** @internal */
export declare const JobContactInput$outboundSchema: z.ZodType<JobContactInput$Outbound, z.ZodTypeDef, JobContactInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobContactInput$ {
    /** @deprecated use `JobContactInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobContactInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobContactInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobContactInput$Outbound, z.ZodTypeDef, JobContactInput>;
    /** @deprecated use `JobContactInput$Outbound` instead. */
    type Outbound = JobContactInput$Outbound;
}
export declare function jobContactInputToJSON(jobContactInput: JobContactInput): string;
export declare function jobContactInputFromJSON(jsonString: string): SafeParseResult<JobContactInput, SDKValidationError>;
//# sourceMappingURL=jobcontact.d.ts.map