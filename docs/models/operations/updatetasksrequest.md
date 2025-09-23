# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ae1e-4e5e-8828-234678de3d8b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-c54f-4f1a-a5d1-23467148077b",
    assignedToStaffUuid: "123e4567-f5e2-4516-bb9a-234677f7e7fb",
    uuid: "123e4567-909a-418f-be26-23467997e05b",
    createdByStaffUuid: "123e4567-1917-4694-a7c9-23467aaefa1b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |