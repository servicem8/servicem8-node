# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-da87-43d7-a5cd-23217dc661bb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-955b-44cb-bbf9-23217f037a8b",
    assignedToStaffUuid: "123e4567-49bf-4c46-8606-232174a475cb",
    uuid: "123e4567-9ac2-4039-b986-23217c392b2b",
    createdByStaffUuid: "123e4567-08a2-4cb2-880a-232173149edb",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |