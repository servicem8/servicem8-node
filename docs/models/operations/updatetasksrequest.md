# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-5f0e-4f6f-82b3-231ef9a3993b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-dacd-4ce9-9a7e-231ef3d5c30b",
    assignedToStaffUuid: "123e4567-e014-4b31-9281-231ef113800b",
    uuid: "123e4567-028c-4e68-a7c4-231ef55a0fbb",
    createdByStaffUuid: "123e4567-3890-4384-a467-231ef3d2647b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |