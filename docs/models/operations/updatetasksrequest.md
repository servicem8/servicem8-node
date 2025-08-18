# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-befe-4749-8655-2322267c817b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-0e5b-4e53-bb67-232229c425cb",
    assignedToStaffUuid: "123e4567-a78d-4066-a382-2322283a02ab",
    uuid: "123e4567-7a69-4bcf-9558-232225ab0e1b",
    createdByStaffUuid: "123e4567-fad1-476e-a330-232227f6b1eb",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |