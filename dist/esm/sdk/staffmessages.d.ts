import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class StaffMessages extends ClientSDK {
    /**
     * List all Staff Messages
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listStaffMessages(options?: RequestOptions): Promise<operations.ListStaffMessagesResponse>;
    /**
     * Create a new Staff Message
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createStaffMessages(request: components.StaffMessageInput, options?: RequestOptions): Promise<operations.CreateStaffMessagesResponse>;
    /**
     * Retrieve a Staff Message
     */
    getStaffMessages(request: operations.GetStaffMessagesRequest, options?: RequestOptions): Promise<operations.GetStaffMessagesResponse>;
    /**
     * Update a Staff Message
     */
    updateStaffMessages(request: operations.UpdateStaffMessagesRequest, options?: RequestOptions): Promise<operations.UpdateStaffMessagesResponse>;
    /**
     * Delete a Staff Message
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteStaffMessages(request: operations.DeleteStaffMessagesRequest, options?: RequestOptions): Promise<operations.DeleteStaffMessagesResponse>;
}
//# sourceMappingURL=staffmessages.d.ts.map