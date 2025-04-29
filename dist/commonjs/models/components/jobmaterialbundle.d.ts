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
export declare const JobMaterialBundleActive: {
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
export type JobMaterialBundleActive = ClosedEnum<typeof JobMaterialBundleActive>;
export type JobMaterialBundle = {
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
    active?: JobMaterialBundleActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    itemNumber?: string | undefined;
    name?: string | undefined;
    quantity?: string | undefined;
    sortOrder?: number | undefined;
    /**
     * UUID of the MaterialBundle which this JobMaterialBundle was originally created from.
     */
    materialBundleUuid?: string | undefined;
    jobUuid?: string | undefined;
};
export type JobMaterialBundleInput = {
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
    active?: JobMaterialBundleActive | undefined;
    itemNumber?: string | undefined;
    name?: string | undefined;
    quantity?: string | undefined;
    sortOrder?: number | undefined;
    /**
     * UUID of the MaterialBundle which this JobMaterialBundle was originally created from.
     */
    materialBundleUuid?: string | undefined;
    jobUuid?: string | undefined;
};
/** @internal */
export declare const JobMaterialBundleActive$inboundSchema: z.ZodNativeEnum<typeof JobMaterialBundleActive>;
/** @internal */
export declare const JobMaterialBundleActive$outboundSchema: z.ZodNativeEnum<typeof JobMaterialBundleActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobMaterialBundleActive$ {
    /** @deprecated use `JobMaterialBundleActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `JobMaterialBundleActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const JobMaterialBundle$inboundSchema: z.ZodType<JobMaterialBundle, z.ZodTypeDef, unknown>;
/** @internal */
export type JobMaterialBundle$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    item_number?: string | undefined;
    name?: string | undefined;
    quantity?: string | undefined;
    sort_order?: number | undefined;
    material_bundle_uuid?: string | undefined;
    job_uuid?: string | undefined;
};
/** @internal */
export declare const JobMaterialBundle$outboundSchema: z.ZodType<JobMaterialBundle$Outbound, z.ZodTypeDef, JobMaterialBundle>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobMaterialBundle$ {
    /** @deprecated use `JobMaterialBundle$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobMaterialBundle, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobMaterialBundle$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobMaterialBundle$Outbound, z.ZodTypeDef, JobMaterialBundle>;
    /** @deprecated use `JobMaterialBundle$Outbound` instead. */
    type Outbound = JobMaterialBundle$Outbound;
}
export declare function jobMaterialBundleToJSON(jobMaterialBundle: JobMaterialBundle): string;
export declare function jobMaterialBundleFromJSON(jsonString: string): SafeParseResult<JobMaterialBundle, SDKValidationError>;
/** @internal */
export declare const JobMaterialBundleInput$inboundSchema: z.ZodType<JobMaterialBundleInput, z.ZodTypeDef, unknown>;
/** @internal */
export type JobMaterialBundleInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    item_number?: string | undefined;
    name?: string | undefined;
    quantity?: string | undefined;
    sort_order?: number | undefined;
    material_bundle_uuid?: string | undefined;
    job_uuid?: string | undefined;
};
/** @internal */
export declare const JobMaterialBundleInput$outboundSchema: z.ZodType<JobMaterialBundleInput$Outbound, z.ZodTypeDef, JobMaterialBundleInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobMaterialBundleInput$ {
    /** @deprecated use `JobMaterialBundleInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobMaterialBundleInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobMaterialBundleInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobMaterialBundleInput$Outbound, z.ZodTypeDef, JobMaterialBundleInput>;
    /** @deprecated use `JobMaterialBundleInput$Outbound` instead. */
    type Outbound = JobMaterialBundleInput$Outbound;
}
export declare function jobMaterialBundleInputToJSON(jobMaterialBundleInput: JobMaterialBundleInput): string;
export declare function jobMaterialBundleInputFromJSON(jsonString: string): SafeParseResult<JobMaterialBundleInput, SDKValidationError>;
//# sourceMappingURL=jobmaterialbundle.d.ts.map