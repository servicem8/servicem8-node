# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-a9dc-4b86-80ce-231ef82c89ab",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-ba58-4d76-837e-231ef13886db",
    assignedToStaffUuid: "123e4567-b047-4bd4-ad30-231ef895b47b",
    uuid: "123e4567-1971-47ea-8116-231ef9fa578b",
    createdByStaffUuid: "123e4567-e1f7-416f-b60e-231ef5224aeb",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |