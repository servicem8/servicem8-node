# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-edee-4deb-b680-22bcb739f39b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-342f-497e-8a00-22bcb465cd4b",
    assignedToStaffUuid: "123e4567-d71c-40a0-9cf1-22bcb3ecdffb",
    uuid: "123e4567-fdd3-45fa-972c-22bcb225f9bb",
    createdByStaffUuid: "123e4567-94e4-4353-821f-22bcba76509b",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |