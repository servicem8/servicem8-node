# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-f1ac-4de0-87ab-22b706c8ad2b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-23f5-44f5-8d1a-22b7001dd96b",
    assignedToStaffUuid: "123e4567-afc2-4a1c-92de-22b7051a56eb",
    uuid: "123e4567-ff07-4fe1-bab9-22b70c8f692b",
    createdByStaffUuid: "123e4567-21e3-41be-b4ea-22b70b68ba0b",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |