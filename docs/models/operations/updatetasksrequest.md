# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-cf18-40b2-a489-233126f6664b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-e5d7-4fc1-8caa-233121fef72b",
    assignedToStaffUuid: "123e4567-4e20-49e7-84aa-2331294aae2b",
    uuid: "123e4567-d6bc-4040-ba39-2331286f885b",
    createdByStaffUuid: "123e4567-921a-4c52-91ff-23312a5af5fb",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |