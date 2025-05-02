# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-c3d7-45e9-8ca3-22b6cddc963b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-a742-4107-890a-22b6c49c500b",
    assignedToStaffUuid: "123e4567-ffbd-4a58-b94b-22b6c7efc05b",
    uuid: "123e4567-8495-469a-a485-22b6c3d5ba1b",
    createdByStaffUuid: "123e4567-0f3e-4277-bef2-22b6cb0f68db",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |