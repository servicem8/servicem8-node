# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-842e-4a79-b5ea-22b560670eab",
    completedTimestamp: "2025-04-01 12:00:00",
    completedByStaffUuid: "123e4567-f2bd-41ec-8d2f-22b56d03e3eb",
    assignedToStaffUuid: "123e4567-fcc2-4a9e-87e5-22b56f800fcb",
    uuid: "123e4567-3b56-4809-9dec-22b56d509b3b",
    createdByStaffUuid: "123e4567-0320-4259-a669-22b56616da8b",
    createDate: "2025-04-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |