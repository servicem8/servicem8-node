# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-e163-4b76-b837-230b76ab11cb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-76a9-42c7-becd-230b7ef192cb",
    assignedToStaffUuid: "123e4567-faf9-40cd-b777-230b7982145b",
    uuid: "123e4567-9319-4acd-95e6-230b78aee19b",
    createdByStaffUuid: "123e4567-c974-441a-a274-230b7e5dbc4b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |