import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Clients extends ClientSDK {
    /**
     * List all Clients
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_customers**.
     */
    listClients(options?: RequestOptions): Promise<operations.ListClientsResponse>;
    /**
     * Create a new Client
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customers**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createClients(request: components.CompanyInput, options?: RequestOptions): Promise<operations.CreateClientsResponse>;
    /**
     * Retrieve a Client
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_customers**.
     */
    getClients(request: operations.GetClientsRequest, options?: RequestOptions): Promise<operations.GetClientsResponse>;
    /**
     * Update a Client
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customers**.
     */
    updateClients(request: operations.UpdateClientsRequest, options?: RequestOptions): Promise<operations.UpdateClientsResponse>;
    /**
     * Delete a Client
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customers**.
     */
    deleteClients(request: operations.DeleteClientsRequest, options?: RequestOptions): Promise<operations.DeleteClientsResponse>;
}
//# sourceMappingURL=clients.d.ts.map