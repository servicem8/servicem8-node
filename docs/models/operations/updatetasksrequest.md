# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-5cdc-4516-80c0-230fe4db519b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-59e3-4660-9f1b-230fe69ace7b",
    assignedToStaffUuid: "123e4567-665a-45fe-8e60-230fed66807b",
    uuid: "123e4567-e615-4095-ae22-230fe1690c1b",
    createdByStaffUuid: "123e4567-d052-4ffb-94ce-230fe28b9deb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |