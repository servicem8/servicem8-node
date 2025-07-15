# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-38d7-46f7-95f5-23004c88dd1b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-9801-4614-a246-230041ea594b",
    assignedToStaffUuid: "123e4567-9b51-453d-a000-2300478c32db",
    uuid: "123e4567-65e9-4aa0-9b2d-23004a1d872b",
    createdByStaffUuid: "123e4567-6f1b-419c-bba9-230049629bab",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |