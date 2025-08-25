# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-8c04-40d6-9f92-2329bd805b5b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-28af-4e1d-886d-2329b5ddbbeb",
    assignedToStaffUuid: "123e4567-59a9-468b-98ae-2329baeb389b",
    uuid: "123e4567-bd10-40e1-adb9-2329bef06c0b",
    createdByStaffUuid: "123e4567-40c6-4555-9c38-2329b2bfe28b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |