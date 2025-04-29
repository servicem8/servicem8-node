import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Bundles extends ClientSDK {
    /**
     * List all Bundles
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listBundles(options?: RequestOptions): Promise<operations.ListBundlesResponse>;
    /**
     * Create a new Bundle
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createBundles(request: components.MaterialBundleInput, options?: RequestOptions): Promise<operations.CreateBundlesResponse>;
    /**
     * Retrieve a Bundle
     */
    getBundles(request: operations.GetBundlesRequest, options?: RequestOptions): Promise<operations.GetBundlesResponse>;
    /**
     * Update a Bundle
     */
    updateBundles(request: operations.UpdateBundlesRequest, options?: RequestOptions): Promise<operations.UpdateBundlesResponse>;
    /**
     * Delete a Bundle
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteBundles(request: operations.DeleteBundlesRequest, options?: RequestOptions): Promise<operations.DeleteBundlesResponse>;
}
//# sourceMappingURL=bundles.d.ts.map