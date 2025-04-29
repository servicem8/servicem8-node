import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class FormResponses extends ClientSDK {
    /**
     * List all Form Responses
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listFormResponses(options?: RequestOptions): Promise<operations.ListFormResponsesResponse>;
    /**
     * Create a new Form Response
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createFormResponses(request: components.FormResponseInput, options?: RequestOptions): Promise<operations.CreateFormResponsesResponse>;
    /**
     * Retrieve a Form Response
     */
    getFormResponses(request: operations.GetFormResponsesRequest, options?: RequestOptions): Promise<operations.GetFormResponsesResponse>;
    /**
     * Update a Form Response
     */
    updateFormResponses(request: operations.UpdateFormResponsesRequest, options?: RequestOptions): Promise<operations.UpdateFormResponsesResponse>;
    /**
     * Delete a Form Response
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteFormResponses(request: operations.DeleteFormResponsesRequest, options?: RequestOptions): Promise<operations.DeleteFormResponsesResponse>;
}
//# sourceMappingURL=formresponses.d.ts.map