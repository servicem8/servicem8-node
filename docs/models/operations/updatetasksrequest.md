# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-f62b-467f-992f-230efb238e4b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-4fb4-43da-8bb4-230efb266a2b",
    assignedToStaffUuid: "123e4567-506d-4f11-8069-230efa689e7b",
    uuid: "123e4567-db75-4d5c-8d71-230ef75a709b",
    createdByStaffUuid: "123e4567-1ce7-4bcc-8cd4-230ef66a55eb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |