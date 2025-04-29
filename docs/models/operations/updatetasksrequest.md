# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    uuid: "123e4567-dc43-4493-9ca7-22b4d0090a8b",
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-d2a6-4591-a6dd-22b4d017cefb",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-fb87-4daf-8cb3-22b4dc2a492b",
    assignedToStaffUuid: "123e4567-698c-4d37-8aca-22b4dea21ccb",
    createdByStaffUuid: "123e4567-9b5f-4964-ad21-22b4dd2c51db",
    createDate: "YYYY-MM-DD HH:MM:SS",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |