# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-5148-4881-aeee-233c6c106d4b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-5131-43dc-b884-233c638bb17b",
    assignedToStaffUuid: "123e4567-9dbd-44b6-b214-233c662a479b",
    uuid: "123e4567-47ed-423a-ae5b-233c6e45790b",
    createdByStaffUuid: "123e4567-2a1a-4b43-ac7d-233c61d0661b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |