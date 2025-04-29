import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class EmailTemplates extends ClientSDK {
    /**
     * List all Email Templates
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listEmailTemplates(options?: RequestOptions): Promise<operations.ListEmailTemplatesResponse>;
    /**
     * Create a new Email Template
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createEmailTemplates(request: components.EmailTemplateInput, options?: RequestOptions): Promise<operations.CreateEmailTemplatesResponse>;
    /**
     * Retrieve an Email Template
     */
    getEmailTemplates(request: operations.GetEmailTemplatesRequest, options?: RequestOptions): Promise<operations.GetEmailTemplatesResponse>;
    /**
     * Update an Email Template
     */
    updateEmailTemplates(request: operations.UpdateEmailTemplatesRequest, options?: RequestOptions): Promise<operations.UpdateEmailTemplatesResponse>;
    /**
     * Delete an Email Template
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteEmailTemplates(request: operations.DeleteEmailTemplatesRequest, options?: RequestOptions): Promise<operations.DeleteEmailTemplatesResponse>;
}
//# sourceMappingURL=emailtemplates.d.ts.map