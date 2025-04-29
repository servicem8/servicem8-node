import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Forms extends ClientSDK {
    /**
     * List all Forms
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listForms(options?: RequestOptions): Promise<operations.ListFormsResponse>;
    /**
     * Create a new Form
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createForms(request: components.FormInput, options?: RequestOptions): Promise<operations.CreateFormsResponse>;
    /**
     * Retrieve a Form
     */
    getForms(request: operations.GetFormsRequest, options?: RequestOptions): Promise<operations.GetFormsResponse>;
    /**
     * Update a Form
     */
    updateForms(request: operations.UpdateFormsRequest, options?: RequestOptions): Promise<operations.UpdateFormsResponse>;
    /**
     * Delete a Form
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteForms(request: operations.DeleteFormsRequest, options?: RequestOptions): Promise<operations.DeleteFormsResponse>;
}
//# sourceMappingURL=forms.d.ts.map