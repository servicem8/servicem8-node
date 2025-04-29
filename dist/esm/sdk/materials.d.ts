import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Materials extends ClientSDK {
    /**
     * List all Materials
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_inventory**.
     */
    listMaterials(options?: RequestOptions): Promise<operations.ListMaterialsResponse>;
    /**
     * Create a new Material
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createMaterials(request: components.MaterialInput, options?: RequestOptions): Promise<operations.CreateMaterialsResponse>;
    /**
     * Retrieve a Material
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_inventory**.
     */
    getMaterials(request: operations.GetMaterialsRequest, options?: RequestOptions): Promise<operations.GetMaterialsResponse>;
    /**
     * Update a Material
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     */
    updateMaterials(request: operations.UpdateMaterialsRequest, options?: RequestOptions): Promise<operations.UpdateMaterialsResponse>;
    /**
     * Delete a Material
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_inventory**.
     */
    deleteMaterials(request: operations.DeleteMaterialsRequest, options?: RequestOptions): Promise<operations.DeleteMaterialsResponse>;
}
//# sourceMappingURL=materials.d.ts.map