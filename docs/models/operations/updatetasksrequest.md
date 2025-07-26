# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-6cad-43ba-8e04-230c45f2d27b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-6876-4e73-b5f0-230c4cc7405b",
    assignedToStaffUuid: "123e4567-c7a1-4834-8a33-230c4487b74b",
    uuid: "123e4567-1bd1-41e9-b2a4-230c4edb311b",
    createdByStaffUuid: "123e4567-14ab-474c-b8b4-230c40814ebb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |