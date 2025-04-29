import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class JobActivities extends ClientSDK {
    /**
     * List all Job Activities
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     */
    listJobActivities(options?: RequestOptions): Promise<operations.ListJobActivitiesResponse>;
    /**
     * Create a new Job Activity
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobActivities(request: components.JobActivityInput, options?: RequestOptions): Promise<operations.CreateJobActivitiesResponse>;
    /**
     * Retrieve a Job Activity
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     */
    getJobActivities(request: operations.GetJobActivitiesRequest, options?: RequestOptions): Promise<operations.GetJobActivitiesResponse>;
    /**
     * Update a Job Activity
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     */
    updateJobActivities(request: operations.UpdateJobActivitiesRequest, options?: RequestOptions): Promise<operations.UpdateJobActivitiesResponse>;
    /**
     * Delete a Job Activity
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     */
    deleteJobActivities(request: operations.DeleteJobActivitiesRequest, options?: RequestOptions): Promise<operations.DeleteJobActivitiesResponse>;
}
//# sourceMappingURL=jobactivities.d.ts.map