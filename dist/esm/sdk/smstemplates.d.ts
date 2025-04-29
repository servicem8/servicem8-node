import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class SMSTemplates extends ClientSDK {
    /**
     * List all SMS Templates
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listSMSTemplates(options?: RequestOptions): Promise<operations.ListSMSTemplatesResponse>;
    /**
     * Create a new SMS Template
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createSMSTemplates(request: components.SmsTemplateInput, options?: RequestOptions): Promise<operations.CreateSMSTemplatesResponse>;
    /**
     * Retrieve a SMS Template
     */
    getSMSTemplates(request: operations.GetSMSTemplatesRequest, options?: RequestOptions): Promise<operations.GetSMSTemplatesResponse>;
    /**
     * Update a SMS Template
     */
    updateSMSTemplates(request: operations.UpdateSMSTemplatesRequest, options?: RequestOptions): Promise<operations.UpdateSMSTemplatesResponse>;
    /**
     * Delete a SMS Template
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteSMSTemplates(request: operations.DeleteSMSTemplatesRequest, options?: RequestOptions): Promise<operations.DeleteSMSTemplatesResponse>;
}
//# sourceMappingURL=smstemplates.d.ts.map