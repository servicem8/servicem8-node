import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type UpdateKnowledgeArticlesRequest = {
    /**
     * UUID of the Knowledge Article
     */
    uuid: string;
    /**
     * Knowledge Article fields to update
     */
    knowledgeArticle: components.KnowledgeArticleInput;
};
export type UpdateKnowledgeArticlesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const UpdateKnowledgeArticlesRequest$inboundSchema: z.ZodType<UpdateKnowledgeArticlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateKnowledgeArticlesRequest$Outbound = {
    uuid: string;
    KnowledgeArticle: components.KnowledgeArticleInput$Outbound;
};
/** @internal */
export declare const UpdateKnowledgeArticlesRequest$outboundSchema: z.ZodType<UpdateKnowledgeArticlesRequest$Outbound, z.ZodTypeDef, UpdateKnowledgeArticlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateKnowledgeArticlesRequest$ {
    /** @deprecated use `UpdateKnowledgeArticlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateKnowledgeArticlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateKnowledgeArticlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateKnowledgeArticlesRequest$Outbound, z.ZodTypeDef, UpdateKnowledgeArticlesRequest>;
    /** @deprecated use `UpdateKnowledgeArticlesRequest$Outbound` instead. */
    type Outbound = UpdateKnowledgeArticlesRequest$Outbound;
}
export declare function updateKnowledgeArticlesRequestToJSON(updateKnowledgeArticlesRequest: UpdateKnowledgeArticlesRequest): string;
export declare function updateKnowledgeArticlesRequestFromJSON(jsonString: string): SafeParseResult<UpdateKnowledgeArticlesRequest, SDKValidationError>;
/** @internal */
export declare const UpdateKnowledgeArticlesResponse$inboundSchema: z.ZodType<UpdateKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateKnowledgeArticlesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const UpdateKnowledgeArticlesResponse$outboundSchema: z.ZodType<UpdateKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, UpdateKnowledgeArticlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateKnowledgeArticlesResponse$ {
    /** @deprecated use `UpdateKnowledgeArticlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateKnowledgeArticlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, UpdateKnowledgeArticlesResponse>;
    /** @deprecated use `UpdateKnowledgeArticlesResponse$Outbound` instead. */
    type Outbound = UpdateKnowledgeArticlesResponse$Outbound;
}
export declare function updateKnowledgeArticlesResponseToJSON(updateKnowledgeArticlesResponse: UpdateKnowledgeArticlesResponse): string;
export declare function updateKnowledgeArticlesResponseFromJSON(jsonString: string): SafeParseResult<UpdateKnowledgeArticlesResponse, SDKValidationError>;
//# sourceMappingURL=updateknowledgearticles.d.ts.map