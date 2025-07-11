# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-2c9f-44a5-8470-22fd84c6d6eb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-a11a-40b5-aa7a-22fd82f14c1b",
    assignedToStaffUuid: "123e4567-5d96-4504-9341-22fd8df7b39b",
    uuid: "123e4567-00c3-4b07-9b6a-22fd888a902b",
    createdByStaffUuid: "123e4567-0a30-4625-ad38-22fd80ab7f0b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |