# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-6022-4c41-ae12-231d2900fe6b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-afcf-46b9-aa78-231d2fdc435b",
    assignedToStaffUuid: "123e4567-8c09-4e2c-b284-231d2d80617b",
    uuid: "123e4567-155c-420e-99bd-231d2538ed2b",
    createdByStaffUuid: "123e4567-96cd-4f04-97cd-231d241d193b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |