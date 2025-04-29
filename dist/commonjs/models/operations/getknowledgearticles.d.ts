import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetKnowledgeArticlesRequest = {
    /**
     * UUID of the Knowledge Article
     */
    uuid: string;
};
export type GetKnowledgeArticlesResponse = components.ErrorT | components.KnowledgeArticle;
/** @internal */
export declare const GetKnowledgeArticlesRequest$inboundSchema: z.ZodType<GetKnowledgeArticlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetKnowledgeArticlesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const GetKnowledgeArticlesRequest$outboundSchema: z.ZodType<GetKnowledgeArticlesRequest$Outbound, z.ZodTypeDef, GetKnowledgeArticlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetKnowledgeArticlesRequest$ {
    /** @deprecated use `GetKnowledgeArticlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetKnowledgeArticlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetKnowledgeArticlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetKnowledgeArticlesRequest$Outbound, z.ZodTypeDef, GetKnowledgeArticlesRequest>;
    /** @deprecated use `GetKnowledgeArticlesRequest$Outbound` instead. */
    type Outbound = GetKnowledgeArticlesRequest$Outbound;
}
export declare function getKnowledgeArticlesRequestToJSON(getKnowledgeArticlesRequest: GetKnowledgeArticlesRequest): string;
export declare function getKnowledgeArticlesRequestFromJSON(jsonString: string): SafeParseResult<GetKnowledgeArticlesRequest, SDKValidationError>;
/** @internal */
export declare const GetKnowledgeArticlesResponse$inboundSchema: z.ZodType<GetKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetKnowledgeArticlesResponse$Outbound = components.ErrorT$Outbound | components.KnowledgeArticle$Outbound;
/** @internal */
export declare const GetKnowledgeArticlesResponse$outboundSchema: z.ZodType<GetKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, GetKnowledgeArticlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetKnowledgeArticlesResponse$ {
    /** @deprecated use `GetKnowledgeArticlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetKnowledgeArticlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, GetKnowledgeArticlesResponse>;
    /** @deprecated use `GetKnowledgeArticlesResponse$Outbound` instead. */
    type Outbound = GetKnowledgeArticlesResponse$Outbound;
}
export declare function getKnowledgeArticlesResponseToJSON(getKnowledgeArticlesResponse: GetKnowledgeArticlesResponse): string;
export declare function getKnowledgeArticlesResponseFromJSON(jsonString: string): SafeParseResult<GetKnowledgeArticlesResponse, SDKValidationError>;
//# sourceMappingURL=getknowledgearticles.d.ts.map