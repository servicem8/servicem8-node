# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-de75-4682-8ecc-231b29175f2b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-f8ba-44a8-9459-231b2012511b",
    assignedToStaffUuid: "123e4567-710c-40be-be2a-231b2766669b",
    uuid: "123e4567-0226-4535-b968-231b2e84d88b",
    createdByStaffUuid: "123e4567-3065-45c5-9992-231b2ce79b9b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |