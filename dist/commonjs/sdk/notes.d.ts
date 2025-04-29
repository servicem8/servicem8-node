import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Notes extends ClientSDK {
    /**
     * List all Notes
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     */
    listNotes(options?: RequestOptions): Promise<operations.ListNotesResponse>;
    /**
     * Create a new Note
     *
     * @remarks
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createNotes(request: components.NoteInput, options?: RequestOptions): Promise<operations.CreateNotesResponse>;
    /**
     * Retrieve a Note
     */
    getNotes(request: operations.GetNotesRequest, options?: RequestOptions): Promise<operations.GetNotesResponse>;
    /**
     * Update a Note
     */
    updateNotes(request: operations.UpdateNotesRequest, options?: RequestOptions): Promise<operations.UpdateNotesResponse>;
    /**
     * Delete a Note
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     */
    deleteNotes(request: operations.DeleteNotesRequest, options?: RequestOptions): Promise<operations.DeleteNotesResponse>;
}
//# sourceMappingURL=notes.d.ts.map