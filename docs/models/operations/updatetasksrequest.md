# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-62dc-46b7-b75c-23184e661ccb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-b396-4f0d-8518-231846db3d6b",
    assignedToStaffUuid: "123e4567-5405-46e9-a5e9-231845c227eb",
    uuid: "123e4567-b8d6-4a26-9f8f-23184bd0050b",
    createdByStaffUuid: "123e4567-7a46-422a-8413-23184417461b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |