# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ce90-436a-86b4-22bdc62cc73b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-184c-4747-a67c-22bdc8aa44bb",
    assignedToStaffUuid: "123e4567-26d2-495d-83d7-22bdcfe4a42b",
    uuid: "123e4567-0791-40a6-a6af-22bdc0b6d54b",
    createdByStaffUuid: "123e4567-0052-461a-8f8b-22bdc42ba03b",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |