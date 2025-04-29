import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class StaffMembers extends ClientSDK {
    /**
     * List all Staff Members
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_staff**.
     */
    listStaffMembers(options?: RequestOptions): Promise<operations.ListStaffMembersResponse>;
    /**
     * Create a new Staff Member
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_staff**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createStaffMembers(request: components.StaffInput, options?: RequestOptions): Promise<operations.CreateStaffMembersResponse>;
    /**
     * Retrieve a Staff Member
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_staff**.
     */
    getStaffMembers(request: operations.GetStaffMembersRequest, options?: RequestOptions): Promise<operations.GetStaffMembersResponse>;
    /**
     * Update a Staff Member
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_staff**.
     */
    updateStaffMembers(request: operations.UpdateStaffMembersRequest, options?: RequestOptions): Promise<operations.UpdateStaffMembersResponse>;
    /**
     * Delete a Staff Member
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_staff**.
     */
    deleteStaffMembers(request: operations.DeleteStaffMembersRequest, options?: RequestOptions): Promise<operations.DeleteStaffMembersResponse>;
}
//# sourceMappingURL=staffmembers.d.ts.map