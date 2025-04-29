import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteKnowledgeArticlesRequest = {
    /**
     * UUID of the Knowledge Article
     */
    uuid: string;
};
export type DeleteKnowledgeArticlesResponse = components.Result | components.ErrorT;
/** @internal */
export declare const DeleteKnowledgeArticlesRequest$inboundSchema: z.ZodType<DeleteKnowledgeArticlesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteKnowledgeArticlesRequest$Outbound = {
    uuid: string;
};
/** @internal */
export declare const DeleteKnowledgeArticlesRequest$outboundSchema: z.ZodType<DeleteKnowledgeArticlesRequest$Outbound, z.ZodTypeDef, DeleteKnowledgeArticlesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteKnowledgeArticlesRequest$ {
    /** @deprecated use `DeleteKnowledgeArticlesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteKnowledgeArticlesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteKnowledgeArticlesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteKnowledgeArticlesRequest$Outbound, z.ZodTypeDef, DeleteKnowledgeArticlesRequest>;
    /** @deprecated use `DeleteKnowledgeArticlesRequest$Outbound` instead. */
    type Outbound = DeleteKnowledgeArticlesRequest$Outbound;
}
export declare function deleteKnowledgeArticlesRequestToJSON(deleteKnowledgeArticlesRequest: DeleteKnowledgeArticlesRequest): string;
export declare function deleteKnowledgeArticlesRequestFromJSON(jsonString: string): SafeParseResult<DeleteKnowledgeArticlesRequest, SDKValidationError>;
/** @internal */
export declare const DeleteKnowledgeArticlesResponse$inboundSchema: z.ZodType<DeleteKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteKnowledgeArticlesResponse$Outbound = components.Result$Outbound | components.ErrorT$Outbound;
/** @internal */
export declare const DeleteKnowledgeArticlesResponse$outboundSchema: z.ZodType<DeleteKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, DeleteKnowledgeArticlesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteKnowledgeArticlesResponse$ {
    /** @deprecated use `DeleteKnowledgeArticlesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteKnowledgeArticlesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteKnowledgeArticlesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteKnowledgeArticlesResponse$Outbound, z.ZodTypeDef, DeleteKnowledgeArticlesResponse>;
    /** @deprecated use `DeleteKnowledgeArticlesResponse$Outbound` instead. */
    type Outbound = DeleteKnowledgeArticlesResponse$Outbound;
}
export declare function deleteKnowledgeArticlesResponseToJSON(deleteKnowledgeArticlesResponse: DeleteKnowledgeArticlesResponse): string;
export declare function deleteKnowledgeArticlesResponseFromJSON(jsonString: string): SafeParseResult<DeleteKnowledgeArticlesResponse, SDKValidationError>;
//# sourceMappingURL=deleteknowledgearticles.d.ts.map