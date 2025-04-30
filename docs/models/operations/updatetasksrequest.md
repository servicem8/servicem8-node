# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    uuid: "123e4567-ece3-44ac-92f9-22b566d83f9b",
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-d851-4442-b179-22b56fd2b45b",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-ac80-4057-adb7-22b56ade3aab",
    assignedToStaffUuid: "123e4567-a976-4d7d-a1c4-22b5673c4d3b",
    createdByStaffUuid: "123e4567-9a07-4eb5-9255-22b56447679b",
    createDate: "YYYY-MM-DD HH:MM:SS",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |