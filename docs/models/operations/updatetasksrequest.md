# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-5d38-480e-8f53-22fb218e7dbb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-403c-4e97-b630-22fb236a1b1b",
    assignedToStaffUuid: "123e4567-db74-44dc-bd76-22fb2f1b474b",
    uuid: "123e4567-f459-4835-bc4f-22fb21a508fb",
    createdByStaffUuid: "123e4567-adfc-44ed-a175-22fb28d3ffeb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |