# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-b692-4f99-8cc1-23482274a71b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-692f-434b-84f0-23482f61a0cb",
    assignedToStaffUuid: "123e4567-c9de-44d3-b40b-23482f92b45b",
    uuid: "123e4567-e917-4a56-b63b-234820050f4b",
    createdByStaffUuid: "123e4567-e04b-49b9-a41a-234822ae652b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |