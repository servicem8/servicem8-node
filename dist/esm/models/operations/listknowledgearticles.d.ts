import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ListKnowledgeArticlesResponse = components.ErrorT | Array<components.KnowledgeArticle>;
/** @internal */
export declare const ListKnowledgeArticlesResponse$inboundSchema: z.ZodType<ListKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListKnowledgeArticlesResponse$Outbound = components.ErrorT$Outbound | Array<components.KnowledgeArticle$Outbound>;
/** @internal */
export declare const ListKnowledgeArticlesResponse$outboundSchema: z.ZodType<ListKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, ListKnowledgeArticlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListKnowledgeArticlesResponse$ {
    /** @deprecated use `ListKnowledgeArticlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListKnowledgeArticlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, ListKnowledgeArticlesResponse>;
    /** @deprecated use `ListKnowledgeArticlesResponse$Outbound` instead. */
    type Outbound = ListKnowledgeArticlesResponse$Outbound;
}
export declare function listKnowledgeArticlesResponseToJSON(listKnowledgeArticlesResponse: ListKnowledgeArticlesResponse): string;
export declare function listKnowledgeArticlesResponseFromJSON(jsonString: string): SafeParseResult<ListKnowledgeArticlesResponse, SDKValidationError>;
//# sourceMappingURL=listknowledgearticles.d.ts.map