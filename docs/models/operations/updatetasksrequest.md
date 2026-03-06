# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-d808-459a-8f7e-23eb2bfdf72b",
    completedTimestamp: "2026-03-01 12:00:00",
    completedByStaffUuid: "123e4567-dfd1-439b-b70b-23eb2516b88b",
    assignedToStaffUuid: "123e4567-4a05-45e9-b2aa-23eb2c3ee6fb",
    uuid: "123e4567-3b4a-4356-b727-23eb2947fc3b",
    createdByStaffUuid: "123e4567-5d15-489b-8b1c-23eb2618a76b",
    createDate: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |