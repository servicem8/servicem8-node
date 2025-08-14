# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-cce3-4954-bbb4-231fea6ccc9b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-372e-40c9-84e4-231fe646bf3b",
    assignedToStaffUuid: "123e4567-7642-4885-898c-231fedde747b",
    uuid: "123e4567-f6f2-49aa-8366-231fe0d82f9b",
    createdByStaffUuid: "123e4567-efe5-4b8f-bfdc-231fe4f407eb",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |