# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-2491-4411-a45a-231fe44158cb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-829e-4d2f-bc11-231fea37316b",
    assignedToStaffUuid: "123e4567-3bd5-4f22-ae68-231febb0903b",
    uuid: "123e4567-0d3f-49f2-a0d3-231fe8fb030b",
    createdByStaffUuid: "123e4567-0f22-4648-a7e4-231fedb357eb",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |