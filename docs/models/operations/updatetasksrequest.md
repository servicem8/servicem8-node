# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ad1b-4c7d-8384-2306fe00f88b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-ae1e-4e83-9632-2306f0f84d2b",
    assignedToStaffUuid: "123e4567-e582-452f-ae18-2306f60a55ab",
    uuid: "123e4567-dec4-4567-9ee5-2306f8705beb",
    createdByStaffUuid: "123e4567-8d58-4b9f-87c3-2306f3e4825b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |