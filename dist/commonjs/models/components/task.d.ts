import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export declare const TaskActive: {
    readonly Zero: 0;
    readonly One: 1;
};
/**
 * Record active/deleted flag.
 *
 * @remarks
 *
 * Valid values are [0,1]
 */
export type TaskActive = ClosedEnum<typeof TaskActive>;
export type Task = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: TaskActive | undefined;
    /**
     * Record last modified timestamp
     */
    editDate?: string | undefined;
    dueDate?: string | undefined;
    taskDetails?: string | undefined;
    name: string;
    relatedObject?: string | undefined;
    relatedObjectUuid?: string | undefined;
    taskComplete?: string | undefined;
    completedTimestamp?: string | undefined;
    completedByStaffUuid?: string | undefined;
    assignedToStaffUuid?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    createdByStaffUuid?: string | undefined;
    /**
     * Record creation timestamp
     */
    createDate?: string | undefined;
};
export type TaskInput = {
    /**
     * Record UUID key
     */
    uuid?: string | undefined;
    /**
     * Record active/deleted flag.
     *
     * @remarks
     *
     * Valid values are [0,1]
     */
    active?: TaskActive | undefined;
    dueDate?: string | undefined;
    taskDetails?: string | undefined;
    name: string;
    relatedObject?: string | undefined;
    relatedObjectUuid?: string | undefined;
    taskComplete?: string | undefined;
    completedTimestamp?: string | undefined;
    completedByStaffUuid?: string | undefined;
    assignedToStaffUuid?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    createdByStaffUuid?: string | undefined;
    /**
     * Record creation timestamp
     */
    createDate?: string | undefined;
};
/** @internal */
export declare const TaskActive$inboundSchema: z.ZodNativeEnum<typeof TaskActive>;
/** @internal */
export declare const TaskActive$outboundSchema: z.ZodNativeEnum<typeof TaskActive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActive$ {
    /** @deprecated use `TaskActive$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
    /** @deprecated use `TaskActive$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Zero: 0;
        readonly One: 1;
    }>;
}
/** @internal */
export declare const Task$inboundSchema: z.ZodType<Task, z.ZodTypeDef, unknown>;
/** @internal */
export type Task$Outbound = {
    uuid?: string | undefined;
    active: number;
    edit_date?: string | undefined;
    due_date?: string | undefined;
    task_details?: string | undefined;
    name: string;
    related_object?: string | undefined;
    related_object_uuid?: string | undefined;
    task_complete?: string | undefined;
    completed_timestamp?: string | undefined;
    completed_by_staff_uuid?: string | undefined;
    assigned_to_staff_uuid?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    created_by_staff_uuid?: string | undefined;
    create_date?: string | undefined;
};
/** @internal */
export declare const Task$outboundSchema: z.ZodType<Task$Outbound, z.ZodTypeDef, Task>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Task$ {
    /** @deprecated use `Task$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Task, z.ZodTypeDef, unknown>;
    /** @deprecated use `Task$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Task$Outbound, z.ZodTypeDef, Task>;
    /** @deprecated use `Task$Outbound` instead. */
    type Outbound = Task$Outbound;
}
export declare function taskToJSON(task: Task): string;
export declare function taskFromJSON(jsonString: string): SafeParseResult<Task, SDKValidationError>;
/** @internal */
export declare const TaskInput$inboundSchema: z.ZodType<TaskInput, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskInput$Outbound = {
    uuid?: string | undefined;
    active: number;
    due_date?: string | undefined;
    task_details?: string | undefined;
    name: string;
    related_object?: string | undefined;
    related_object_uuid?: string | undefined;
    task_complete?: string | undefined;
    completed_timestamp?: string | undefined;
    completed_by_staff_uuid?: string | undefined;
    assigned_to_staff_uuid?: string | undefined;
    lng?: number | undefined;
    lat?: number | undefined;
    created_by_staff_uuid?: string | undefined;
    create_date?: string | undefined;
};
/** @internal */
export declare const TaskInput$outboundSchema: z.ZodType<TaskInput$Outbound, z.ZodTypeDef, TaskInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskInput$ {
    /** @deprecated use `TaskInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskInput$Outbound, z.ZodTypeDef, TaskInput>;
    /** @deprecated use `TaskInput$Outbound` instead. */
    type Outbound = TaskInput$Outbound;
}
export declare function taskInputToJSON(taskInput: TaskInput): string;
export declare function taskInputFromJSON(jsonString: string): SafeParseResult<TaskInput, SDKValidationError>;
//# sourceMappingURL=task.d.ts.map