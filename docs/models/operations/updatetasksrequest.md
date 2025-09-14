# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-6d18-4f2d-8d67-233c6a55199b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-c53e-4c36-90da-233c6fcd9bbb",
    assignedToStaffUuid: "123e4567-f6c0-494e-8de3-233c69b92a0b",
    uuid: "123e4567-8366-4599-8734-233c683855cb",
    createdByStaffUuid: "123e4567-65fa-4e45-96c8-233c6f92314b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |