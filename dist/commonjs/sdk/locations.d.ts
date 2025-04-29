import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Locations extends ClientSDK {
    /**
     * List all Locations
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_locations**.
     */
    listLocations(options?: RequestOptions): Promise<operations.ListLocationsResponse>;
    /**
     * Create a new Location
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_locations**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createLocations(request: components.LocationInput, options?: RequestOptions): Promise<operations.CreateLocationsResponse>;
    /**
     * Retrieve a Location
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_locations**.
     */
    getLocations(request: operations.GetLocationsRequest, options?: RequestOptions): Promise<operations.GetLocationsResponse>;
    /**
     * Update a Location
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_locations**.
     */
    updateLocations(request: operations.UpdateLocationsRequest, options?: RequestOptions): Promise<operations.UpdateLocationsResponse>;
    /**
     * Delete a Location
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_locations**.
     */
    deleteLocations(request: operations.DeleteLocationsRequest, options?: RequestOptions): Promise<operations.DeleteLocationsResponse>;
}
//# sourceMappingURL=locations.d.ts.map