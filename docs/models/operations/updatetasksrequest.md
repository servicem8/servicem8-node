# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-9c28-4605-b24b-22fc029870eb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-1067-451f-9cfd-22fc028f3b4b",
    assignedToStaffUuid: "123e4567-326f-4226-a4d2-22fc04079e3b",
    uuid: "123e4567-3f82-4af5-9612-22fc01694f6b",
    createdByStaffUuid: "123e4567-9e6d-477e-b2e5-22fc0bd51b0b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |