# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-9acd-46bf-8694-23076f2029db",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-2807-4e43-95f8-23076766daab",
    assignedToStaffUuid: "123e4567-3413-4c11-b1af-23076206421b",
    uuid: "123e4567-dba1-402a-8a37-23076cd5176b",
    createdByStaffUuid: "123e4567-032d-4e27-98b1-230767d746fb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |