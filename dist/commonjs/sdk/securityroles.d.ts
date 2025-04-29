import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class SecurityRoles extends ClientSDK {
    /**
     * List all Security Roles
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listSecurityRoles(options?: RequestOptions): Promise<operations.ListSecurityRolesResponse>;
    /**
     * Create a new Security Role
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createSecurityRoles(request: components.SecurityRoleInput, options?: RequestOptions): Promise<operations.CreateSecurityRolesResponse>;
    /**
     * Retrieve a Security Role
     */
    getSecurityRoles(request: operations.GetSecurityRolesRequest, options?: RequestOptions): Promise<operations.GetSecurityRolesResponse>;
    /**
     * Update a Security Role
     */
    updateSecurityRoles(request: operations.UpdateSecurityRolesRequest, options?: RequestOptions): Promise<operations.UpdateSecurityRolesResponse>;
    /**
     * Delete a Security Role
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteSecurityRoles(request: operations.DeleteSecurityRolesRequest, options?: RequestOptions): Promise<operations.DeleteSecurityRolesResponse>;
}
//# sourceMappingURL=securityroles.d.ts.map