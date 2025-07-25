# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-eb00-4118-8d51-230b708e126b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-3b47-4904-88cd-230b7783e9fb",
    assignedToStaffUuid: "123e4567-df59-421c-a4f5-230b79ff6d0b",
    uuid: "123e4567-a320-4ea8-9001-230b75e596fb",
    createdByStaffUuid: "123e4567-1993-4db7-b6e9-230b7a8189eb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |