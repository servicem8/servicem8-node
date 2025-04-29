import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Tasks extends ClientSDK {
    /**
     * List all Tasks
     *
     * @remarks
     *
     * #### Filtering
     * This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_tasks**.
     */
    listTasks(options?: RequestOptions): Promise<operations.ListTasksResponse>;
    /**
     * Create a new Task
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tasks**.
     *
     * #### Record UUID
     * UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.
     */
    createTasks(request: components.TaskInput, options?: RequestOptions): Promise<operations.CreateTasksResponse>;
    /**
     * Retrieve a Task
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **read_tasks**.
     */
    getTasks(request: operations.GetTasksRequest, options?: RequestOptions): Promise<operations.GetTasksResponse>;
    /**
     * Update a Task
     *
     * @remarks
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tasks**.
     */
    updateTasks(request: operations.UpdateTasksRequest, options?: RequestOptions): Promise<operations.UpdateTasksResponse>;
    /**
     * Delete a Task
     *
     * @remarks
     *
     * In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.
     *
     * #### OAuth Scope
     * This endpoint requires the following OAuth scope **manage_tasks**.
     */
    deleteTasks(request: operations.DeleteTasksRequest, options?: RequestOptions): Promise<operations.DeleteTasksResponse>;
}
//# sourceMappingURL=tasks.d.ts.map