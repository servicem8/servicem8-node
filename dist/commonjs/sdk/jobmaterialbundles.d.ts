import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class JobMaterialBundles extends ClientSDK {
    /**
     * List all Job Material Bundles
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listJobMaterialBundles(options?: RequestOptions): Promise<operations.ListJobMaterialBundlesResponse>;
    /**
     * Create a new Job Material Bundle
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobMaterialBundles(request: components.JobMaterialBundleInput, options?: RequestOptions): Promise<operations.CreateJobMaterialBundlesResponse>;
    /**
     * Retrieve a Job Material Bundle
     */
    getJobMaterialBundles(request: operations.GetJobMaterialBundlesRequest, options?: RequestOptions): Promise<operations.GetJobMaterialBundlesResponse>;
    /**
     * Update a Job Material Bundle
     */
    updateJobMaterialBundles(request: operations.UpdateJobMaterialBundlesRequest, options?: RequestOptions): Promise<operations.UpdateJobMaterialBundlesResponse>;
    /**
     * Delete a Job Material Bundle
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteJobMaterialBundles(request: operations.DeleteJobMaterialBundlesRequest, options?: RequestOptions): Promise<operations.DeleteJobMaterialBundlesResponse>;
}
//# sourceMappingURL=jobmaterialbundles.d.ts.map