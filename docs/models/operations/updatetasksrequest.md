# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-4404-48a4-9169-23e93229f07b",
    completedTimestamp: "2026-03-01 12:00:00",
    completedByStaffUuid: "123e4567-0626-4392-ab54-23e9313abb1b",
    assignedToStaffUuid: "123e4567-49e5-4117-b957-23e93aea4f3b",
    uuid: "123e4567-178a-4568-bfc2-23e93639f8db",
    createdByStaffUuid: "123e4567-1516-404f-bcf4-23e9319b33db",
    createDate: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |