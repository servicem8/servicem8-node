# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-7fba-4431-a230-230a6eecac7b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-f7c3-4ece-b165-230a62994afb",
    assignedToStaffUuid: "123e4567-2425-4be3-ad99-230a6d4f67bb",
    uuid: "123e4567-9d3b-4065-90fa-230a68ade0cb",
    createdByStaffUuid: "123e4567-ef9b-471e-834e-230a6d509a5b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |