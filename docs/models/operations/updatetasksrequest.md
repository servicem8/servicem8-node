# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-6dce-409a-aa3a-231d2a7b375b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-4b6b-47ec-8d7e-231d2b26271b",
    assignedToStaffUuid: "123e4567-062d-4647-a8b5-231d22b42eeb",
    uuid: "123e4567-8aab-4141-a638-231d2209298b",
    createdByStaffUuid: "123e4567-56b7-4fb5-9eb9-231d29d22aeb",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |