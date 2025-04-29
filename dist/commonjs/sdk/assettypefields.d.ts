import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class AssetTypeFields extends ClientSDK {
    /**
     * List all Asset Type Fields
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     */
    listAssetTypeFields(options?: RequestOptions): Promise<operations.ListAssetTypeFieldsResponse>;
    /**
     * Create a new Asset Type Field
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_assets**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createAssetTypeFields(request: components.AssetTypeFieldInput, options?: RequestOptions): Promise<operations.CreateAssetTypeFieldsResponse>;
    /**
     * Retrieve an Asset Type Field
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_assets**.
     */
    getAssetTypeFields(request: operations.GetAssetTypeFieldsRequest, options?: RequestOptions): Promise<operations.GetAssetTypeFieldsResponse>;
    /**
     * Update an Asset Type Field
     */
    updateAssetTypeFields(request: operations.UpdateAssetTypeFieldsRequest, options?: RequestOptions): Promise<operations.UpdateAssetTypeFieldsResponse>;
    /**
     * Delete an Asset Type Field
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteAssetTypeFields(request: operations.DeleteAssetTypeFieldsRequest, options?: RequestOptions): Promise<operations.DeleteAssetTypeFieldsResponse>;
}
//# sourceMappingURL=assettypefields.d.ts.map