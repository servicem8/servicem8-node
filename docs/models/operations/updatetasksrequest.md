# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-bb83-4a3c-aa9f-231847dc200b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-4842-4e16-b282-231847b2fb3b",
    assignedToStaffUuid: "123e4567-7385-4fda-82ba-2318489c9bcb",
    uuid: "123e4567-8ec4-4e6c-9445-23184f7a20db",
    createdByStaffUuid: "123e4567-c8a7-4ad2-9760-231843845eab",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |