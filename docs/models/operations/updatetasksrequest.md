# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-b42e-4aa8-a5b6-234d513f00bb",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-cd7a-4e83-b004-234d548dfe3b",
    assignedToStaffUuid: "123e4567-659d-4ae1-a8d2-234d5979ce1b",
    uuid: "123e4567-36a4-4a8f-8d07-234d5fcf8d0b",
    createdByStaffUuid: "123e4567-2a0c-433e-b82e-234d5da67b9b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |