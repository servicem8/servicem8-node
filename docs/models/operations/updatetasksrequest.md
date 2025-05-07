# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-4f18-435a-a014-22bcbdfe8edb",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-8fb1-4619-802f-22bcbf83122b",
    assignedToStaffUuid: "123e4567-a5e9-423e-a913-22bcb49aa27b",
    uuid: "123e4567-b5d3-4088-9618-22bcbe64dceb",
    createdByStaffUuid: "123e4567-eeba-48c6-a7e2-22bcbc8f330b",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |