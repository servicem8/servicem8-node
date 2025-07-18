# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-8b93-42b2-afa8-2302f0211bdb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-d770-426b-83ce-2302f687351b",
    assignedToStaffUuid: "123e4567-c86c-4fff-99e6-2302f02a659b",
    uuid: "123e4567-036d-4036-b688-2302f1e5302b",
    createdByStaffUuid: "123e4567-39ff-4481-97fa-2302f0dd6a8b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |