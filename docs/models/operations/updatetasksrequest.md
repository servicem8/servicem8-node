# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ce5b-4029-ac72-2313fb48337b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-7584-4e83-9698-2313f0ffa11b",
    assignedToStaffUuid: "123e4567-fe9b-4c23-a3dd-2313f3e3351b",
    uuid: "123e4567-d1b9-48fa-9e50-2313f07399ab",
    createdByStaffUuid: "123e4567-f4ef-4822-ba59-2313fdb3ec5b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |