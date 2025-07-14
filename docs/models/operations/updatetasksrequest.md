# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-87ee-4cb8-89cb-23004227596b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-d88b-47da-b7e5-2300455f577b",
    assignedToStaffUuid: "123e4567-8500-4616-9c0f-23004b4962db",
    uuid: "123e4567-b88b-4dea-a60b-2300466f880b",
    createdByStaffUuid: "123e4567-9490-413c-bc93-2300421bb5fb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |