import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Badges extends ClientSDK {
    /**
     * List all Badges
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_badges**.
     */
    listBadges(options?: RequestOptions): Promise<operations.ListBadgesResponse>;
    /**
     * Create a new Badge
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_badges**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createBadges(request: components.BadgeInput, options?: RequestOptions): Promise<operations.CreateBadgesResponse>;
    /**
     * Retrieve a Badge
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_badges**.
     */
    getBadges(request: operations.GetBadgesRequest, options?: RequestOptions): Promise<operations.GetBadgesResponse>;
    /**
     * Update a Badge
     */
    updateBadges(request: operations.UpdateBadgesRequest, options?: RequestOptions): Promise<operations.UpdateBadgesResponse>;
    /**
     * Delete a Badge
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteBadges(request: operations.DeleteBadgesRequest, options?: RequestOptions): Promise<operations.DeleteBadgesResponse>;
}
//# sourceMappingURL=badges.d.ts.map