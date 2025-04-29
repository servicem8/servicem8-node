import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Categories extends ClientSDK {
    /**
     * List all Categories
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_categories**.
     */
    listCategories(options?: RequestOptions): Promise<operations.ListCategoriesResponse>;
    /**
     * Create a new Category
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_categories**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createCategories(request: components.CategoryInput, options?: RequestOptions): Promise<operations.CreateCategoriesResponse>;
    /**
     * Retrieve a Category
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_categories**.
     */
    getCategories(request: operations.GetCategoriesRequest, options?: RequestOptions): Promise<operations.GetCategoriesResponse>;
    /**
     * Update a Category
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_categories**.
     */
    updateCategories(request: operations.UpdateCategoriesRequest, options?: RequestOptions): Promise<operations.UpdateCategoriesResponse>;
    /**
     * Delete a Category
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_categories**.
     */
    deleteCategories(request: operations.DeleteCategoriesRequest, options?: RequestOptions): Promise<operations.DeleteCategoriesResponse>;
}
//# sourceMappingURL=categories.d.ts.map