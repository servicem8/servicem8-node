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
export declare const KnowledgeArticleActive: {
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
export type KnowledgeArticleActive = ClosedEnum<typeof KnowledgeArticleActive>;
export declare const ObjectName: {
    readonly JobMixed: "Job";
    readonly JobLower: "job";
};
export type ObjectName = ClosedEnum<typeof ObjectName>;
export type Relationship = {
    objectName: ObjectName;
    objectUuid: string;
    objectDescription?: string | undefined;
    createDate?: string | undefined;
};
export type KnowledgeArticle = {
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
    active?: KnowledgeArticleActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    name: string;
    content?: string | undefined;
    articleType?: string | undefined;
    tags?: string | undefined;
    relationships?: Array<Relationship> | undefined;
};
export type KnowledgeArticleInput = {
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
    active?: KnowledgeArticleActive | undefined;
    name: string;
    content?: string | undefined;
    articleType?: string | undefined;
    tags?: string | undefined;
    relationships?: Array<Relationship> | undefined;
};
/** @internal */
export declare const KnowledgeArticleActive$inboundSchema: z.ZodNativeEnum<typeof KnowledgeArticleActive>;
/** @internal */
export declare const KnowledgeArticleActive$outboundSchema: z.ZodNativeEnum<typeof KnowledgeArticleActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace KnowledgeArticleActive$ {
    /** @deprecated use `KnowledgeArticleActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `KnowledgeArticleActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const ObjectName$inboundSchema: z.ZodNativeEnum<typeof ObjectName>;
/** @internal */
export declare const ObjectName$outboundSchema: z.ZodNativeEnum<typeof ObjectName>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ObjectName$ {
    /** @deprecated use `ObjectName$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly JobMixed: "Job";
        readonly JobLower: "job";
    }>;
    /** @deprecated use `ObjectName$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly JobMixed: "Job";
        readonly JobLower: "job";
    }>;
}
/** @internal */
export declare const Relationship$inboundSchema: z.ZodType<Relationship, z.ZodTypeDef, unknown>;
/** @internal */
export type Relationship$Outbound = {
    object_name: string;
    object_uuid: string;
    object_description?: string | undefined;
    create_date?: string | undefined;
};
/** @internal */
export declare const Relationship$outboundSchema: z.ZodType<Relationship$Outbound, z.ZodTypeDef, Relationship>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Relationship$ {
    /** @deprecated use `Relationship$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Relationship, z.ZodTypeDef, unknown>;
    /** @deprecated use `Relationship$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Relationship$Outbound, z.ZodTypeDef, Relationship>;
    /** @deprecated use `Relationship$Outbound` instead. */
    type Outbound = Relationship$Outbound;
}
export declare function relationshipToJSON(relationship: Relationship): string;
export declare function relationshipFromJSON(jsonString: string): SafeParseResult<Relationship, SDKValidationError>;
/** @internal */
export declare const KnowledgeArticle$inboundSchema: z.ZodType<KnowledgeArticle, z.ZodTypeDef, unknown>;
/** @internal */
export type KnowledgeArticle$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    name: string;
    content?: string | undefined;
    article_type?: string | undefined;
    tags?: string | undefined;
    relationships?: Array<Relationship$Outbound> | undefined;
};
/** @internal */
export declare const KnowledgeArticle$outboundSchema: z.ZodType<KnowledgeArticle$Outbound, z.ZodTypeDef, KnowledgeArticle>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace KnowledgeArticle$ {
    /** @deprecated use `KnowledgeArticle$inboundSchema` instead. */
    const inboundSchema: z.ZodType<KnowledgeArticle, z.ZodTypeDef, unknown>;
    /** @deprecated use `KnowledgeArticle$outboundSchema` instead. */
    const outboundSchema: z.ZodType<KnowledgeArticle$Outbound, z.ZodTypeDef, KnowledgeArticle>;
    /** @deprecated use `KnowledgeArticle$Outbound` instead. */
    type Outbound = KnowledgeArticle$Outbound;
}
export declare function knowledgeArticleToJSON(knowledgeArticle: KnowledgeArticle): string;
export declare function knowledgeArticleFromJSON(jsonString: string): SafeParseResult<KnowledgeArticle, SDKValidationError>;
/** @internal */
export declare const KnowledgeArticleInput$inboundSchema: z.ZodType<KnowledgeArticleInput, z.ZodTypeDef, unknown>;
/** @internal */
export type KnowledgeArticleInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    name: string;
    content?: string | undefined;
    article_type?: string | undefined;
    tags?: string | undefined;
    relationships?: Array<Relationship$Outbound> | undefined;
};
/** @internal */
export declare const KnowledgeArticleInput$outboundSchema: z.ZodType<KnowledgeArticleInput$Outbound, z.ZodTypeDef, KnowledgeArticleInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace KnowledgeArticleInput$ {
    /** @deprecated use `KnowledgeArticleInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<KnowledgeArticleInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `KnowledgeArticleInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<KnowledgeArticleInput$Outbound, z.ZodTypeDef, KnowledgeArticleInput>;
    /** @deprecated use `KnowledgeArticleInput$Outbound` instead. */
    type Outbound = KnowledgeArticleInput$Outbound;
}
export declare function knowledgeArticleInputToJSON(knowledgeArticleInput: KnowledgeArticleInput): string;
export declare function knowledgeArticleInputFromJSON(jsonString: string): SafeParseResult<KnowledgeArticleInput, SDKValidationError>;
//# sourceMappingURL=knowledgearticle.d.ts.map