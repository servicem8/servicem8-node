# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ade5-4ae8-a904-23110d1e11db",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-c297-4211-803f-231101dd3f2b",
    assignedToStaffUuid: "123e4567-65a0-4403-8b21-23110bd3cfab",
    uuid: "123e4567-2052-4787-89c5-2311040f1a8b",
    createdByStaffUuid: "123e4567-f7c1-4778-9503-23110b26c70b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |