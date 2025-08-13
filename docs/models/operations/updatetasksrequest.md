# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-865b-420f-9936-231efa05176b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-3375-4c53-860b-231ef2b756cb",
    assignedToStaffUuid: "123e4567-f403-46ee-bed5-231ef573022b",
    uuid: "123e4567-6a93-4914-bb91-231ef1e7732b",
    createdByStaffUuid: "123e4567-0f12-4490-9dac-231ef2963feb",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |