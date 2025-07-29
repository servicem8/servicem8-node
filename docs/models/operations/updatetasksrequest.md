# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-1763-43db-9075-230fecb7731b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-0b26-4246-8a2f-230fe09a485b",
    assignedToStaffUuid: "123e4567-238c-4d1f-a497-230fe7d6ca0b",
    uuid: "123e4567-366d-4254-9824-230fe030c0bb",
    createdByStaffUuid: "123e4567-8216-4f31-81e3-230fe7a98f9b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |