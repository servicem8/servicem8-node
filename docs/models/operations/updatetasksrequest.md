# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-638f-4d1e-888c-2342221dcd6b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-0598-49ec-9e29-2342202659cb",
    assignedToStaffUuid: "123e4567-6b2b-4120-b3c1-234221cf6b7b",
    uuid: "123e4567-1dec-4d9d-973c-2342288f892b",
    createdByStaffUuid: "123e4567-8dee-42f5-81ec-234228984b8b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |