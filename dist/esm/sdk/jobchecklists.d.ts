import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class JobChecklists extends ClientSDK {
    /**
     * List all Job Checklists
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listJobChecklists(options?: RequestOptions): Promise<operations.ListJobChecklistsResponse>;
    /**
     * Create a new Job Checklist
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobChecklists(request: components.JobChecklistInput, options?: RequestOptions): Promise<operations.CreateJobChecklistsResponse>;
    /**
     * Retrieve a Job Checklist
     */
    getJobChecklists(request: operations.GetJobChecklistsRequest, options?: RequestOptions): Promise<operations.GetJobChecklistsResponse>;
    /**
     * Update a Job Checklist
     */
    updateJobChecklists(request: operations.UpdateJobChecklistsRequest, options?: RequestOptions): Promise<operations.UpdateJobChecklistsResponse>;
    /**
     * Delete a Job Checklist
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteJobChecklists(request: operations.DeleteJobChecklistsRequest, options?: RequestOptions): Promise<operations.DeleteJobChecklistsResponse>;
}
//# sourceMappingURL=jobchecklists.d.ts.map