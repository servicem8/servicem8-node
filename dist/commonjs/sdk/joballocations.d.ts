import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class JobAllocations extends ClientSDK {
    /**
     * List all Job Allocations
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     */
    listJobAllocations(options?: RequestOptions): Promise<operations.ListJobAllocationsResponse>;
    /**
     * Create a new Job Allocation
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_schedule**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobAllocations(request: components.JobAllocationInput, options?: RequestOptions): Promise<operations.CreateJobAllocationsResponse>;
    /**
     * Retrieve a Job Allocation
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_schedule**.
     */
    getJobAllocations(request: operations.GetJobAllocationsRequest, options?: RequestOptions): Promise<operations.GetJobAllocationsResponse>;
    /**
     * Update a Job Allocation
     */
    updateJobAllocations(request: operations.UpdateJobAllocationsRequest, options?: RequestOptions): Promise<operations.UpdateJobAllocationsResponse>;
    /**
     * Delete a Job Allocation
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteJobAllocations(request: operations.DeleteJobAllocationsRequest, options?: RequestOptions): Promise<operations.DeleteJobAllocationsResponse>;
}
//# sourceMappingURL=joballocations.d.ts.map