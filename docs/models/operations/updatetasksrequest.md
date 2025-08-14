# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-2b42-446b-9414-231efa4ef4bb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-130b-4e35-9064-231ef25e5e9b",
    assignedToStaffUuid: "123e4567-1019-4d53-a09a-231ef5ea542b",
    uuid: "123e4567-3209-4985-9450-231ef6f901fb",
    createdByStaffUuid: "123e4567-a189-44b9-8711-231ef7243d6b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |