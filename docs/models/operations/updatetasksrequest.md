# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-fb55-436e-96c2-231b25d981db",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-8259-4239-aab4-231b2eb9dffb",
    assignedToStaffUuid: "123e4567-71d8-4f1a-bbfd-231b2abf39fb",
    uuid: "123e4567-03ec-4b16-98c9-231b2fc7c30b",
    createdByStaffUuid: "123e4567-d3ea-42f4-842d-231b299f22db",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |