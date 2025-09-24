# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-e8df-4289-87d5-23482a7ba53b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-b847-4d24-9d19-23482d4afeab",
    assignedToStaffUuid: "123e4567-dd18-4fd8-98c9-234823caae5b",
    uuid: "123e4567-00af-4ae5-a4d8-23482a5679fb",
    createdByStaffUuid: "123e4567-a509-4155-8003-234825a17b7b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |