# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-4961-4ecc-a821-23126dc2586b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-2ca8-4239-935e-231260906deb",
    assignedToStaffUuid: "123e4567-b07c-4339-86a2-23126555021b",
    uuid: "123e4567-a70e-471d-86db-231261194efb",
    createdByStaffUuid: "123e4567-56ff-4268-a9d6-23126d58fc4b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |