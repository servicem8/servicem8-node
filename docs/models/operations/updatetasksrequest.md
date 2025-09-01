# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-f9eb-41c1-a5fd-23312ab7338b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-e042-433e-af65-23312650743b",
    assignedToStaffUuid: "123e4567-adeb-4ad5-822a-23312e91a59b",
    uuid: "123e4567-a073-4c0b-b873-233126e2173b",
    createdByStaffUuid: "123e4567-10fb-4bd7-89b3-23312b33259b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |