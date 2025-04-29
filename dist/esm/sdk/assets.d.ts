import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Assets extends ClientSDK {
    /**
     * List all Assets
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     */
    listAssets(options?: RequestOptions): Promise<operations.ListAssetsResponse>;
    /**
     * Retrieve an Asset
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     */
    getAssets(request: operations.GetAssetsRequest, options?: RequestOptions): Promise<operations.GetAssetsResponse>;
    /**
     * Update an Asset
     */
    updateAssets(request: operations.UpdateAssetsRequest, options?: RequestOptions): Promise<operations.UpdateAssetsResponse>;
    /**
     * Delete an Asset
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteAssets(request: operations.DeleteAssetsRequest, options?: RequestOptions): Promise<operations.DeleteAssetsResponse>;
}
//# sourceMappingURL=assets.d.ts.map