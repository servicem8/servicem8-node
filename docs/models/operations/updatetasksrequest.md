# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-e699-48bf-b010-230fe081a49b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-2c9b-4ee4-8690-230fe129c02b",
    assignedToStaffUuid: "123e4567-9759-4edf-be35-230fe9d3657b",
    uuid: "123e4567-4ff3-4cf8-9c1b-230fe572e3db",
    createdByStaffUuid: "123e4567-3517-490b-8845-230fe238b27b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |