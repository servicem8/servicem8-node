import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Jobs extends ClientSDK {
    /**
     * List all Jobs
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_jobs**.
     */
    listJobs(options?: RequestOptions): Promise<operations.ListJobsResponse>;
    /**
     * Create a new Job
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **create_jobs**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobs(request: components.JobInput, options?: RequestOptions): Promise<operations.CreateJobsResponse>;
    /**
     * Retrieve a Job
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_jobs**.
     */
    getJobs(request: operations.GetJobsRequest, options?: RequestOptions): Promise<operations.GetJobsResponse>;
    /**
     * Update a Job
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_jobs**.
     */
    updateJobs(request: operations.UpdateJobsRequest, options?: RequestOptions): Promise<operations.UpdateJobsResponse>;
    /**
     * Delete a Job
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_jobs**.
     */
    deleteJobs(request: operations.DeleteJobsRequest, options?: RequestOptions): Promise<operations.DeleteJobsResponse>;
}
//# sourceMappingURL=jobs.d.ts.map