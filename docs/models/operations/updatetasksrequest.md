# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-190c-4a75-80df-22fb23d87a5b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-ae66-4e6c-8fe8-22fb273d35cb",
    assignedToStaffUuid: "123e4567-a95a-4111-852e-22fb258ce97b",
    uuid: "123e4567-08e2-4dc6-a9ed-22fb2737c76b",
    createdByStaffUuid: "123e4567-d7ce-48a1-b420-22fb27529ceb",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |