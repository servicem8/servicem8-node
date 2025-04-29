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
export declare const JobMaterialActive: {
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
export type JobMaterialActive = ClosedEnum<typeof JobMaterialActive>;
export type JobMaterial = {
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
    active?: JobMaterialActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    jobUuid?: string | undefined;
    materialUuid?: string | undefined;
    name?: string | undefined;
    quantity: string;
    price?: string | undefined;
    displayedAmount?: string | undefined;
    displayedAmountIsTaxInclusive?: string | undefined;
    taxRateUuid?: string | undefined;
    sortOrder?: string | undefined;
    cost?: string | undefined;
    displayedCost?: string | undefined;
    /**
     * UUID of a JobMaterialBundle which this JobMaterial belongs to. The default value is blank, which means that the JobMaterial is not part of a JobMaterialBundle.
     */
    jobMaterialBundleUuid?: string | undefined;
};
export type JobMaterialInput = {
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
    active?: JobMaterialActive | undefined;
    jobUuid?: string | undefined;
    materialUuid?: string | undefined;
    name?: string | undefined;
    quantity: string;
    price?: string | undefined;
    displayedAmount?: string | undefined;
    displayedAmountIsTaxInclusive?: string | undefined;
    taxRateUuid?: string | undefined;
    sortOrder?: string | undefined;
    cost?: string | undefined;
    displayedCost?: string | undefined;
    /**
     * UUID of a JobMaterialBundle which this JobMaterial belongs to. The default value is blank, which means that the JobMaterial is not part of a JobMaterialBundle.
     */
    jobMaterialBundleUuid?: string | undefined;
};
/** @internal */
export declare const JobMaterialActive$inboundSchema: z.ZodNativeEnum<typeof JobMaterialActive>;
/** @internal */
export declare const JobMaterialActive$outboundSchema: z.ZodNativeEnum<typeof JobMaterialActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobMaterialActive$ {
    /** @deprecated use `JobMaterialActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `JobMaterialActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const JobMaterial$inboundSchema: z.ZodType<JobMaterial, z.ZodTypeDef, unknown>;
/** @internal */
export type JobMaterial$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    job_uuid?: string | undefined;
    material_uuid?: string | undefined;
    name?: string | undefined;
    quantity: string;
    price?: string | undefined;
    displayed_amount?: string | undefined;
    displayed_amount_is_tax_inclusive?: string | undefined;
    tax_rate_uuid?: string | undefined;
    sort_order?: string | undefined;
    cost?: string | undefined;
    displayed_cost?: string | undefined;
    job_material_bundle_uuid?: string | undefined;
};
/** @internal */
export declare const JobMaterial$outboundSchema: z.ZodType<JobMaterial$Outbound, z.ZodTypeDef, JobMaterial>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobMaterial$ {
    /** @deprecated use `JobMaterial$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobMaterial, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobMaterial$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobMaterial$Outbound, z.ZodTypeDef, JobMaterial>;
    /** @deprecated use `JobMaterial$Outbound` instead. */
    type Outbound = JobMaterial$Outbound;
}
export declare function jobMaterialToJSON(jobMaterial: JobMaterial): string;
export declare function jobMaterialFromJSON(jsonString: string): SafeParseResult<JobMaterial, SDKValidationError>;
/** @internal */
export declare const JobMaterialInput$inboundSchema: z.ZodType<JobMaterialInput, z.ZodTypeDef, unknown>;
/** @internal */
export type JobMaterialInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    job_uuid?: string | undefined;
    material_uuid?: string | undefined;
    name?: string | undefined;
    quantity: string;
    price?: string | undefined;
    displayed_amount?: string | undefined;
    displayed_amount_is_tax_inclusive?: string | undefined;
    tax_rate_uuid?: string | undefined;
    sort_order?: string | undefined;
    cost?: string | undefined;
    displayed_cost?: string | undefined;
    job_material_bundle_uuid?: string | undefined;
};
/** @internal */
export declare const JobMaterialInput$outboundSchema: z.ZodType<JobMaterialInput$Outbound, z.ZodTypeDef, JobMaterialInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobMaterialInput$ {
    /** @deprecated use `JobMaterialInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobMaterialInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobMaterialInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobMaterialInput$Outbound, z.ZodTypeDef, JobMaterialInput>;
    /** @deprecated use `JobMaterialInput$Outbound` instead. */
    type Outbound = JobMaterialInput$Outbound;
}
export declare function jobMaterialInputToJSON(jobMaterialInput: JobMaterialInput): string;
export declare function jobMaterialInputFromJSON(jsonString: string): SafeParseResult<JobMaterialInput, SDKValidationError>;
//# sourceMappingURL=jobmaterial.d.ts.map