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
export declare const JobActive: {
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
export type JobActive = ClosedEnum<typeof JobActive>;
/**
 * (Read-only).
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const QuoteSent: {
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
export type QuoteSent = ClosedEnum<typeof QuoteSent>;
export type RelatedKnowledgeArticle = {
    knowledgeArticleUuid: string;
    relevance: number;
};
export type Job = {
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
    active?: JobActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    createdByStaffUuid?: string | undefined;
    date?: string | undefined;
    companyUuid?: string | undefined;
    jobAddress?: string | undefined;
    billingAddress?: string | undefined;
    status: string;
    jobDescription?: string | undefined;
    /**
     * Email Address
     */
    workDoneDescription?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    /**
     * (Read-only)
     */
    generatedJobId?: string | undefined;
    paymentDate?: string | undefined;
    paymentActionedByUuid?: string | undefined;
    paymentMethod?: string | undefined;
    paymentAmount?: string | undefined;
    totalInvoiceAmount?: string | undefined;
    categoryUuid?: string | undefined;
    paymentNote?: string | undefined;
    geoIsValid?: string | undefined;
    purchaseOrderNumber?: string | undefined;
    invoiceSent?: string | undefined;
    invoiceSentStamp?: string | undefined;
    readyToInvoice?: string | undefined;
    readyToInvoiceStamp?: string | undefined;
    paymentProcessed?: string | undefined;
    paymentProcessedStamp?: string | undefined;
    geoCountry?: string | undefined;
    geoPostcode?: string | undefined;
    geoState?: string | undefined;
    geoCity?: string | undefined;
    geoStreet?: string | undefined;
    geoNumber?: string | undefined;
    queueUuid?: string | undefined;
    queueExpiryDate?: string | undefined;
    queueAssignedStaffUuid?: string | undefined;
    paymentReceived?: string | undefined;
    paymentReceivedStamp?: string | undefined;
    badges?: string | undefined;
    quoteDate?: string | undefined;
    /**
     * (Read-only).
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    quoteSent?: QuoteSent | undefined;
    /**
     * (Read-only)
     */
    quoteSentStamp?: string | undefined;
    workOrderDate?: string | undefined;
    completionDate?: string | undefined;
    completionActionedByUuid?: string | undefined;
    unsuccessfulDate?: string | undefined;
    jobIsScheduledUntilStamp?: string | undefined;
    activeNetworkRequestUuid?: string | undefined;
    relatedKnowledgeArticles?: Array<RelatedKnowledgeArticle> | undefined;
};
export type JobInput = {
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
    active?: JobActive | undefined;
    createdByStaffUuid?: string | undefined;
    date?: string | undefined;
    companyUuid?: string | undefined;
    jobAddress?: string | undefined;
    billingAddress?: string | undefined;
    status: string;
    jobDescription?: string | undefined;
    /**
     * Email Address
     */
    workDoneDescription?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    /**
     * (Read-only)
     */
    generatedJobId?: string | undefined;
    paymentDate?: string | undefined;
    paymentActionedByUuid?: string | undefined;
    paymentMethod?: string | undefined;
    paymentAmount?: string | undefined;
    totalInvoiceAmount?: string | undefined;
    categoryUuid?: string | undefined;
    paymentNote?: string | undefined;
    geoIsValid?: string | undefined;
    purchaseOrderNumber?: string | undefined;
    invoiceSent?: string | undefined;
    invoiceSentStamp?: string | undefined;
    readyToInvoice?: string | undefined;
    readyToInvoiceStamp?: string | undefined;
    paymentProcessed?: string | undefined;
    paymentProcessedStamp?: string | undefined;
    geoCountry?: string | undefined;
    geoPostcode?: string | undefined;
    geoState?: string | undefined;
    geoCity?: string | undefined;
    geoStreet?: string | undefined;
    geoNumber?: string | undefined;
    queueUuid?: string | undefined;
    queueExpiryDate?: string | undefined;
    queueAssignedStaffUuid?: string | undefined;
    paymentReceived?: string | undefined;
    paymentReceivedStamp?: string | undefined;
    badges?: string | undefined;
    quoteDate?: string | undefined;
    /**
     * (Read-only).
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    quoteSent?: QuoteSent | undefined;
    /**
     * (Read-only)
     */
    quoteSentStamp?: string | undefined;
    workOrderDate?: string | undefined;
    completionDate?: string | undefined;
    completionActionedByUuid?: string | undefined;
    unsuccessfulDate?: string | undefined;
    jobIsScheduledUntilStamp?: string | undefined;
    activeNetworkRequestUuid?: string | undefined;
    relatedKnowledgeArticles?: Array<RelatedKnowledgeArticle> | undefined;
};
/** @internal */
export declare const JobActive$inboundSchema: z.ZodNativeEnum<typeof JobActive>;
/** @internal */
export declare const JobActive$outboundSchema: z.ZodNativeEnum<typeof JobActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobActive$ {
    /** @deprecated use `JobActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `JobActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const QuoteSent$inboundSchema: z.ZodNativeEnum<typeof QuoteSent>;
/** @internal */
export declare const QuoteSent$outboundSchema: z.ZodNativeEnum<typeof QuoteSent>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace QuoteSent$ {
    /** @deprecated use `QuoteSent$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `QuoteSent$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const RelatedKnowledgeArticle$inboundSchema: z.ZodType<RelatedKnowledgeArticle, z.ZodTypeDef, unknown>;
/** @internal */
export type RelatedKnowledgeArticle$Outbound = {
    knowledge_article_uuid: string;
    relevance: number;
};
/** @internal */
export declare const RelatedKnowledgeArticle$outboundSchema: z.ZodType<RelatedKnowledgeArticle$Outbound, z.ZodTypeDef, RelatedKnowledgeArticle>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RelatedKnowledgeArticle$ {
    /** @deprecated use `RelatedKnowledgeArticle$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RelatedKnowledgeArticle, z.ZodTypeDef, unknown>;
    /** @deprecated use `RelatedKnowledgeArticle$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RelatedKnowledgeArticle$Outbound, z.ZodTypeDef, RelatedKnowledgeArticle>;
    /** @deprecated use `RelatedKnowledgeArticle$Outbound` instead. */
    type Outbound = RelatedKnowledgeArticle$Outbound;
}
export declare function relatedKnowledgeArticleToJSON(relatedKnowledgeArticle: RelatedKnowledgeArticle): string;
export declare function relatedKnowledgeArticleFromJSON(jsonString: string): SafeParseResult<RelatedKnowledgeArticle, SDKValidationError>;
/** @internal */
export declare const Job$inboundSchema: z.ZodType<Job, z.ZodTypeDef, unknown>;
/** @internal */
export type Job$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    created_by_staff_uuid?: string | undefined;
    date?: string | undefined;
    company_uuid?: string | undefined;
    job_address?: string | undefined;
    billing_address?: string | undefined;
    status: string;
    job_description?: string | undefined;
    work_done_description?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    generated_job_id?: string | undefined;
    payment_date?: string | undefined;
    payment_actioned_by_uuid?: string | undefined;
    payment_method?: string | undefined;
    payment_amount?: string | undefined;
    total_invoice_amount?: string | undefined;
    category_uuid?: string | undefined;
    payment_note?: string | undefined;
    geo_is_valid?: string | undefined;
    purchase_order_number?: string | undefined;
    invoice_sent?: string | undefined;
    invoice_sent_stamp?: string | undefined;
    ready_to_invoice?: string | undefined;
    ready_to_invoice_stamp?: string | undefined;
    payment_processed?: string | undefined;
    payment_processed_stamp?: string | undefined;
    geo_country?: string | undefined;
    geo_postcode?: string | undefined;
    geo_state?: string | undefined;
    geo_city?: string | undefined;
    geo_street?: string | undefined;
    geo_number?: string | undefined;
    queue_uuid?: string | undefined;
    queue_expiry_date?: string | undefined;
    queue_assigned_staff_uuid?: string | undefined;
    payment_received?: string | undefined;
    payment_received_stamp?: string | undefined;
    badges?: string | undefined;
    quote_date?: string | undefined;
    quote_sent?: number | undefined;
    quote_sent_stamp?: string | undefined;
    work_order_date?: string | undefined;
    completion_date?: string | undefined;
    completion_actioned_by_uuid?: string | undefined;
    unsuccessful_date?: string | undefined;
    job_is_scheduled_until_stamp?: string | undefined;
    active_network_request_uuid?: string | undefined;
    related_knowledge_articles?: Array<RelatedKnowledgeArticle$Outbound> | undefined;
};
/** @internal */
export declare const Job$outboundSchema: z.ZodType<Job$Outbound, z.ZodTypeDef, Job>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Job$ {
    /** @deprecated use `Job$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Job, z.ZodTypeDef, unknown>;
    /** @deprecated use `Job$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Job$Outbound, z.ZodTypeDef, Job>;
    /** @deprecated use `Job$Outbound` instead. */
    type Outbound = Job$Outbound;
}
export declare function jobToJSON(job: Job): string;
export declare function jobFromJSON(jsonString: string): SafeParseResult<Job, SDKValidationError>;
/** @internal */
export declare const JobInput$inboundSchema: z.ZodType<JobInput, z.ZodTypeDef, unknown>;
/** @internal */
export type JobInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    created_by_staff_uuid?: string | undefined;
    date?: string | undefined;
    company_uuid?: string | undefined;
    job_address?: string | undefined;
    billing_address?: string | undefined;
    status: string;
    job_description?: string | undefined;
    work_done_description?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    generated_job_id?: string | undefined;
    payment_date?: string | undefined;
    payment_actioned_by_uuid?: string | undefined;
    payment_method?: string | undefined;
    payment_amount?: string | undefined;
    total_invoice_amount?: string | undefined;
    category_uuid?: string | undefined;
    payment_note?: string | undefined;
    geo_is_valid?: string | undefined;
    purchase_order_number?: string | undefined;
    invoice_sent?: string | undefined;
    invoice_sent_stamp?: string | undefined;
    ready_to_invoice?: string | undefined;
    ready_to_invoice_stamp?: string | undefined;
    payment_processed?: string | undefined;
    payment_processed_stamp?: string | undefined;
    geo_country?: string | undefined;
    geo_postcode?: string | undefined;
    geo_state?: string | undefined;
    geo_city?: string | undefined;
    geo_street?: string | undefined;
    geo_number?: string | undefined;
    queue_uuid?: string | undefined;
    queue_expiry_date?: string | undefined;
    queue_assigned_staff_uuid?: string | undefined;
    payment_received?: string | undefined;
    payment_received_stamp?: string | undefined;
    badges?: string | undefined;
    quote_date?: string | undefined;
    quote_sent?: number | undefined;
    quote_sent_stamp?: string | undefined;
    work_order_date?: string | undefined;
    completion_date?: string | undefined;
    completion_actioned_by_uuid?: string | undefined;
    unsuccessful_date?: string | undefined;
    job_is_scheduled_until_stamp?: string | undefined;
    active_network_request_uuid?: string | undefined;
    related_knowledge_articles?: Array<RelatedKnowledgeArticle$Outbound> | undefined;
};
/** @internal */
export declare const JobInput$outboundSchema: z.ZodType<JobInput$Outbound, z.ZodTypeDef, JobInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JobInput$ {
    /** @deprecated use `JobInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JobInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `JobInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JobInput$Outbound, z.ZodTypeDef, JobInput>;
    /** @deprecated use `JobInput$Outbound` instead. */
    type Outbound = JobInput$Outbound;
}
export declare function jobInputToJSON(jobInput: JobInput): string;
export declare function jobInputFromJSON(jsonString: string): SafeParseResult<JobInput, SDKValidationError>;
//# sourceMappingURL=job.d.ts.map