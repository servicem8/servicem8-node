# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-07af-45cb-a697-23eb2589289b",
    completedTimestamp: "2026-03-01 12:00:00",
    completedByStaffUuid: "123e4567-5335-458d-9938-23eb29e6ddbb",
    assignedToStaffUuid: "123e4567-7106-4c97-8ef7-23eb298e30db",
    uuid: "123e4567-65d8-420c-b6a3-23eb21f9863b",
    createdByStaffUuid: "123e4567-4d25-43cc-b9f8-23eb23fe680b",
    createDate: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |