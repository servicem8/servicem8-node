import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class AssetTypes extends ClientSDK {
    /**
     * List all Asset Types
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     */
    listAssetTypes(options?: RequestOptions): Promise<operations.ListAssetTypesResponse>;
    /**
     * Create a new Asset Type
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createAssetTypes(request: components.AssetTypeInput, options?: RequestOptions): Promise<operations.CreateAssetTypesResponse>;
    /**
     * Retrieve an Asset Type
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     */
    getAssetTypes(request: operations.GetAssetTypesRequest, options?: RequestOptions): Promise<operations.GetAssetTypesResponse>;
    /**
     * Update an Asset Type
     */
    updateAssetTypes(request: operations.UpdateAssetTypesRequest, options?: RequestOptions): Promise<operations.UpdateAssetTypesResponse>;
    /**
     * Delete an Asset Type
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteAssetTypes(request: operations.DeleteAssetTypesRequest, options?: RequestOptions): Promise<operations.DeleteAssetTypesResponse>;
}
//# sourceMappingURL=assettypes.d.ts.map