# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-c607-4f2d-9c5a-23c6f24754fb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-3794-45f8-84ee-23c6f97be96b",
    assignedToStaffUuid: "123e4567-0d03-4a07-88b3-23c6f6e4f3eb",
    uuid: "123e4567-7949-40b6-aef6-23c6f0af9b2b",
    createdByStaffUuid: "123e4567-ceb0-4f2e-84d2-23c6fa453cfb",
    createDate: "2026-01-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |