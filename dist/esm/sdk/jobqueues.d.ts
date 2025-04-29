import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class JobQueues extends ClientSDK {
    /**
     * List all Job Queues
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_queues**.
     */
    listJobQueues(options?: RequestOptions): Promise<operations.ListJobQueuesResponse>;
    /**
     * Create a new Job Queue
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_queues**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobQueues(request: components.QueueInput, options?: RequestOptions): Promise<operations.CreateJobQueuesResponse>;
    /**
     * Retrieve a Job Queue
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_queues**.
     */
    getJobQueues(request: operations.GetJobQueuesRequest, options?: RequestOptions): Promise<operations.GetJobQueuesResponse>;
    /**
     * Update a Job Queue
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_queues**.
     */
    updateJobQueues(request: operations.UpdateJobQueuesRequest, options?: RequestOptions): Promise<operations.UpdateJobQueuesResponse>;
    /**
     * Delete a Job Queue
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_queues**.
     */
    deleteJobQueues(request: operations.DeleteJobQueuesRequest, options?: RequestOptions): Promise<operations.DeleteJobQueuesResponse>;
}
//# sourceMappingURL=jobqueues.d.ts.map