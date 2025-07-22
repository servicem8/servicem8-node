# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-4660-4e80-957e-2308e0e1332b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-f36b-4e2f-904f-2308e28ed7eb",
    assignedToStaffUuid: "123e4567-d1e7-4d36-9e99-2308e7ad1e7b",
    uuid: "123e4567-f8cc-45fb-8df6-2308e5549ecb",
    createdByStaffUuid: "123e4567-4c50-4427-b613-2308ead6303b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |