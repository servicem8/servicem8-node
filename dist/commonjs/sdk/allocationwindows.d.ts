import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class AllocationWindows extends ClientSDK {
    /**
     * List all Allocation Windows
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listAllocationWindows(options?: RequestOptions): Promise<operations.ListAllocationWindowsResponse>;
    /**
     * Create a new Allocation Window
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createAllocationWindows(request: components.AllocationWindowInput, options?: RequestOptions): Promise<operations.CreateAllocationWindowsResponse>;
    /**
     * Retrieve an Allocation Window
     */
    getAllocationWindows(request: operations.GetAllocationWindowsRequest, options?: RequestOptions): Promise<operations.GetAllocationWindowsResponse>;
    /**
     * Update an Allocation Window
     */
    updateAllocationWindows(request: operations.UpdateAllocationWindowsRequest, options?: RequestOptions): Promise<operations.UpdateAllocationWindowsResponse>;
    /**
     * Delete an Allocation Window
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteAllocationWindows(request: operations.DeleteAllocationWindowsRequest, options?: RequestOptions): Promise<operations.DeleteAllocationWindowsResponse>;
}
//# sourceMappingURL=allocationwindows.d.ts.map