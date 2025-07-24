# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-86fc-45a5-ac7c-230a65d9ddbb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-86b3-4cd9-b011-230a65fb72db",
    assignedToStaffUuid: "123e4567-96eb-4bf9-a1f6-230a6c5f406b",
    uuid: "123e4567-4106-4491-986e-230a602c3eab",
    createdByStaffUuid: "123e4567-9d5d-4282-8d32-230a6d0bdadb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |