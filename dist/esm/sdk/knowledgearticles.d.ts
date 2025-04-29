import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class KnowledgeArticles extends ClientSDK {
    /**
     * List all Knowledge Articles
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_knowledge**.
     */
    listKnowledgeArticles(options?: RequestOptions): Promise<operations.ListKnowledgeArticlesResponse>;
    /**
     * Create a new Knowledge Article
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_knowledge**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createKnowledgeArticles(request: components.KnowledgeArticleInput, options?: RequestOptions): Promise<operations.CreateKnowledgeArticlesResponse>;
    /**
     * Retrieve a Knowledge Article
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_knowledge**.
     */
    getKnowledgeArticles(request: operations.GetKnowledgeArticlesRequest, options?: RequestOptions): Promise<operations.GetKnowledgeArticlesResponse>;
    /**
     * Update a Knowledge Article
     */
    updateKnowledgeArticles(request: operations.UpdateKnowledgeArticlesRequest, options?: RequestOptions): Promise<operations.UpdateKnowledgeArticlesResponse>;
    /**
     * Delete a Knowledge Article
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteKnowledgeArticles(request: operations.DeleteKnowledgeArticlesRequest, options?: RequestOptions): Promise<operations.DeleteKnowledgeArticlesResponse>;
}
//# sourceMappingURL=knowledgearticles.d.ts.map