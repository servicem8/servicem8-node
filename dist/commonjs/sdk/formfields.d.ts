import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class FormFields extends ClientSDK {
    /**
     * List all Form Fields
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listFormFields(options?: RequestOptions): Promise<operations.ListFormFieldsResponse>;
    /**
     * Create a new Form Field
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createFormFields(request: components.FormFieldInput, options?: RequestOptions): Promise<operations.CreateFormFieldsResponse>;
    /**
     * Retrieve a Form Field
     */
    getFormFields(request: operations.GetFormFieldsRequest, options?: RequestOptions): Promise<operations.GetFormFieldsResponse>;
    /**
     * Update a Form Field
     */
    updateFormFields(request: operations.UpdateFormFieldsRequest, options?: RequestOptions): Promise<operations.UpdateFormFieldsResponse>;
    /**
     * Delete a Form Field
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteFormFields(request: operations.DeleteFormFieldsRequest, options?: RequestOptions): Promise<operations.DeleteFormFieldsResponse>;
}
//# sourceMappingURL=formfields.d.ts.map