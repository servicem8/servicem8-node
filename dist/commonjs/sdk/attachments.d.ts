import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Attachments extends ClientSDK {
    /**
     * List all Attachments
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listAttachments(options?: RequestOptions): Promise<operations.ListAttachmentsResponse>;
    /**
     * Create a new Attachment
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createAttachments(request: components.AttachmentInput, options?: RequestOptions): Promise<operations.CreateAttachmentsResponse>;
    /**
     * Retrieve an Attachment
     */
    getAttachments(request: operations.GetAttachmentsRequest, options?: RequestOptions): Promise<operations.GetAttachmentsResponse>;
    /**
     * Update an Attachment
     */
    updateAttachments(request: operations.UpdateAttachmentsRequest, options?: RequestOptions): Promise<operations.UpdateAttachmentsResponse>;
    /**
     * Delete an Attachment
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteAttachments(request: operations.DeleteAttachmentsRequest, options?: RequestOptions): Promise<operations.DeleteAttachmentsResponse>;
}
//# sourceMappingURL=attachments.d.ts.map