# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-03f4-460f-85bf-230129e0471b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-32bd-436d-978e-23012233399b",
    assignedToStaffUuid: "123e4567-7df0-4aa5-8614-23012faca9db",
    uuid: "123e4567-7dd7-47d5-aed8-23012efe97bb",
    createdByStaffUuid: "123e4567-44bf-43b9-96d8-23012660164b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |