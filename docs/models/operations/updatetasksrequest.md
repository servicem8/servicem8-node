# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-eb7b-44e3-9cdd-231cf44467cb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-2feb-409a-9047-231cfef135eb",
    assignedToStaffUuid: "123e4567-56e3-4a55-ae3c-231cf6e604cb",
    uuid: "123e4567-5e18-478e-8af2-231cf2a37abb",
    createdByStaffUuid: "123e4567-8c2e-480f-b4cd-231cf4d253eb",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |