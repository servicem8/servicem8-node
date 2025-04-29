import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class JobContacts extends ClientSDK {
    /**
     * List all Job Contacts
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_contacts**.
     */
    listJobContacts(options?: RequestOptions): Promise<operations.ListJobContactsResponse>;
    /**
     * Create a new Job Contact
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_contacts**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobContacts(request: components.JobContactInput, options?: RequestOptions): Promise<operations.CreateJobContactsResponse>;
    /**
     * Retrieve a Job Contact
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_contacts**.
     */
    getJobContacts(request: operations.GetJobContactsRequest, options?: RequestOptions): Promise<operations.GetJobContactsResponse>;
    /**
     * Update a Job Contact
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_contacts**.
     */
    updateJobContacts(request: operations.UpdateJobContactsRequest, options?: RequestOptions): Promise<operations.UpdateJobContactsResponse>;
    /**
     * Delete a Job Contact
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_contacts**.
     */
    deleteJobContacts(request: operations.DeleteJobContactsRequest, options?: RequestOptions): Promise<operations.DeleteJobContactsResponse>;
}
//# sourceMappingURL=jobcontacts.d.ts.map