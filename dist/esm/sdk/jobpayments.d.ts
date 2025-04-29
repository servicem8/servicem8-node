import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class JobPayments extends ClientSDK {
    /**
     * List all Job Payments
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listJobPayments(options?: RequestOptions): Promise<operations.ListJobPaymentsResponse>;
    /**
     * Create a new Job Payment
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createJobPayments(request: components.JobPaymentInput, options?: RequestOptions): Promise<operations.CreateJobPaymentsResponse>;
    /**
     * Retrieve a Job Payment
     */
    getJobPayments(request: operations.GetJobPaymentsRequest, options?: RequestOptions): Promise<operations.GetJobPaymentsResponse>;
    /**
     * Update a Job Payment
     */
    updateJobPayments(request: operations.UpdateJobPaymentsRequest, options?: RequestOptions): Promise<operations.UpdateJobPaymentsResponse>;
    /**
     * Delete a Job Payment
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteJobPayments(request: operations.DeleteJobPaymentsRequest, options?: RequestOptions): Promise<operations.DeleteJobPaymentsResponse>;
}
//# sourceMappingURL=jobpayments.d.ts.map