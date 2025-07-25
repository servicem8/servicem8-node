# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-5dc3-4031-bf46-230b7600494b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-85f4-4db5-a85b-230b75e7ea5b",
    assignedToStaffUuid: "123e4567-10a9-49b9-a332-230b725d9d4b",
    uuid: "123e4567-9f76-4bb1-8e69-230b7cc7a92b",
    createdByStaffUuid: "123e4567-8969-422e-b0b4-230b72e0a5bb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |