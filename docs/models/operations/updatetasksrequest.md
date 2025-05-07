# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-e66a-4bfd-b0f9-22bcba92498b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-9e84-4e5a-b9c8-22bcb38f150b",
    assignedToStaffUuid: "123e4567-f1d0-4fec-8951-22bcbdafc19b",
    uuid: "123e4567-8098-4f64-99da-22bcbe28750b",
    createdByStaffUuid: "123e4567-8e04-4f13-9505-22bcbf2a95eb",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |