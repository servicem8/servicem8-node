# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-3b3a-4674-84a1-23f94ede2f5b",
    completedTimestamp: "2026-03-01 12:00:00",
    completedByStaffUuid: "123e4567-336e-4418-87d5-23f94cf2cf7b",
    assignedToStaffUuid: "123e4567-e2ed-47fc-87b3-23f94dda813b",
    uuid: "123e4567-d970-4552-8da0-23f948fc411b",
    createdByStaffUuid: "123e4567-8efe-42ae-85e6-23f94b87ec5b",
    createDate: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |