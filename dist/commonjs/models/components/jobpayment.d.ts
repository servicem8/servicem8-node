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
export declare const JobPaymentActive: {
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
export type JobPaymentActive = ClosedEnum<typeof JobPaymentActive>;
/**
 * (Read-only).
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const IsDeposit: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * (Read-only).
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export type IsDeposit = ClosedEnum<typeof IsDeposit>;
export type JobPayment = {
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
    active?: JobPaymentActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    jobUuid?: string | undefined;
    actionedByUuid?: string | undefined;
    timestamp?: string | undefined;
    amount?: string | undefined;
    method?: string | undefined;
    note?: string | undefined;
    attachmentUuid?: string | undefined;
    /**
     * (Read-only).
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    isDeposit?: IsDeposit | undefined;
};
export type JobPaymentInput = {
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
    active?: JobPaymentActive | undefined;
    jobUuid?: string | undefined;
    actionedByUuid?: string | undefined;
    timestamp?: string | undefined;
    amount?: string | undefined;
    method?: string | undefined;
    note?: string | undefined;
    attachmentUuid?: string | undefined;
    /**
     * (Read-only).
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    isDeposit?: IsDeposit | undefined;
};
/** @internal */
export declare const JobPaymentActive$inboundSchema: z.ZodNativeEnum<typeof JobPaymentActive>;
/** @internal */
export declare const JobPaymentActive$outboundSchema: z.ZodNativeEnum<typeof JobPaymentActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobPaymentActive$ {
    /** @deprecated use `JobPaymentActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `JobPaymentActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const IsDeposit$inboundSchema: z.ZodNativeEnum<typeof IsDeposit>;
/** @internal */
export declare const IsDeposit$outboundSchema: z.ZodNativeEnum<typeof IsDeposit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IsDeposit$ {
    /** @deprecated use `IsDeposit$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `IsDeposit$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const JobPayment$inboundSchema: z.ZodType<JobPayment, z.ZodTypeDef, unknown>;
/** @internal */
export type JobPayment$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    job_uuid?: string | undefined;
    actioned_by_uuid?: string | undefined;
    timestamp?: string | undefined;
    amount?: string | undefined;
    method?: string | undefined;
    note?: string | undefined;
    attachment_uuid?: string | undefined;
    is_deposit?: number | undefined;
};
/** @internal */
export declare const JobPayment$outboundSchema: z.ZodType<JobPayment$Outbound, z.ZodTypeDef, JobPayment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobPayment$ {
    /** @deprecated use `JobPayment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobPayment, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobPayment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobPayment$Outbound, z.ZodTypeDef, JobPayment>;
    /** @deprecated use `JobPayment$Outbound` instead. */
    type Outbound = JobPayment$Outbound;
}
export declare function jobPaymentToJSON(jobPayment: JobPayment): string;
export declare function jobPaymentFromJSON(jsonString: string): SafeParseResult<JobPayment, SDKValidationError>;
/** @internal */
export declare const JobPaymentInput$inboundSchema: z.ZodType<JobPaymentInput, z.ZodTypeDef, unknown>;
/** @internal */
export type JobPaymentInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    job_uuid?: string | undefined;
    actioned_by_uuid?: string | undefined;
    timestamp?: string | undefined;
    amount?: string | undefined;
    method?: string | undefined;
    note?: string | undefined;
    attachment_uuid?: string | undefined;
    is_deposit?: number | undefined;
};
/** @internal */
export declare const JobPaymentInput$outboundSchema: z.ZodType<JobPaymentInput$Outbound, z.ZodTypeDef, JobPaymentInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobPaymentInput$ {
    /** @deprecated use `JobPaymentInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobPaymentInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobPaymentInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobPaymentInput$Outbound, z.ZodTypeDef, JobPaymentInput>;
    /** @deprecated use `JobPaymentInput$Outbound` instead. */
    type Outbound = JobPaymentInput$Outbound;
}
export declare function jobPaymentInputToJSON(jobPaymentInput: JobPaymentInput): string;
export declare function jobPaymentInputFromJSON(jsonString: string): SafeParseResult<JobPaymentInput, SDKValidationError>;
//# sourceMappingURL=jobpayment.d.ts.map