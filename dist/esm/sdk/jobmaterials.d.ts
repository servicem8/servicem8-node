import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class JobMaterials extends ClientSDK {
    /**
     * List all Job Materials
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_materials**.
     */
    listJobMaterials(options?: RequestOptions): Promise<operations.ListJobMaterialsResponse>;
    /**
     * Create a new Job Material
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobMaterials(request: components.JobMaterialInput, options?: RequestOptions): Promise<operations.CreateJobMaterialsResponse>;
    /**
     * Retrieve a Job Material
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_job_materials**.
     */
    getJobMaterials(request: operations.GetJobMaterialsRequest, options?: RequestOptions): Promise<operations.GetJobMaterialsResponse>;
    /**
     * Update a Job Material
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     */
    updateJobMaterials(request: operations.UpdateJobMaterialsRequest, options?: RequestOptions): Promise<operations.UpdateJobMaterialsResponse>;
    /**
     * Delete a Job Material
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_job_materials**.
     */
    deleteJobMaterials(request: operations.DeleteJobMaterialsRequest, options?: RequestOptions): Promise<operations.DeleteJobMaterialsResponse>;
}
//# sourceMappingURL=jobmaterials.d.ts.map