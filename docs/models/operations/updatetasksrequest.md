# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-aa67-4f20-a01a-23497324c68b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-fe08-4b5d-9c3f-2349704d162b",
    assignedToStaffUuid: "123e4567-10ca-4e3a-9658-23497d7fa6bb",
    uuid: "123e4567-3452-403a-a53e-234973d4075b",
    createdByStaffUuid: "123e4567-09ae-43c1-b4fb-23497d4bbf8b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |