import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class CompanyContacts extends ClientSDK {
    /**
     * List all Company Contacts
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_customer_contacts**.
     */
    listCompanyContacts(options?: RequestOptions): Promise<operations.ListCompanyContactsResponse>;
    /**
     * Create a new Company Contact
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customer_contacts**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createCompanyContacts(request: components.CompanyContactInput, options?: RequestOptions): Promise<operations.CreateCompanyContactsResponse>;
    /**
     * Retrieve a Company Contact
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_customer_contacts**.
     */
    getCompanyContacts(request: operations.GetCompanyContactsRequest, options?: RequestOptions): Promise<operations.GetCompanyContactsResponse>;
    /**
     * Update a Company Contact
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customer_contacts**.
     */
    updateCompanyContacts(request: operations.UpdateCompanyContactsRequest, options?: RequestOptions): Promise<operations.UpdateCompanyContactsResponse>;
    /**
     * Delete a Company Contact
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_customer_contacts**.
     */
    deleteCompanyContacts(request: operations.DeleteCompanyContactsRequest, options?: RequestOptions): Promise<operations.DeleteCompanyContactsResponse>;
}
//# sourceMappingURL=companycontacts.d.ts.map