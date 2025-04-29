import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Feedback extends ClientSDK {
    /**
     * List all Feedback
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listFeedback(options?: RequestOptions): Promise<operations.ListFeedbackResponse>;
    /**
     * Create a new Feedback
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createFeedback(request: components.FeedbackInput, options?: RequestOptions): Promise<operations.CreateFeedbackResponse>;
    /**
     * Retrieve a Feedback
     */
    getFeedback(request: operations.GetFeedbackRequest, options?: RequestOptions): Promise<operations.GetFeedbackResponse>;
    /**
     * Update a Feedback
     */
    updateFeedback(request: operations.UpdateFeedbackRequest, options?: RequestOptions): Promise<operations.UpdateFeedbackResponse>;
    /**
     * Delete a Feedback
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteFeedback(request: operations.DeleteFeedbackRequest, options?: RequestOptions): Promise<operations.DeleteFeedbackResponse>;
}
//# sourceMappingURL=feedback.d.ts.map