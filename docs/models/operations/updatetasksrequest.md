# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-d3ca-433b-8584-2308edd8b48b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-44e6-4030-af38-2308ef2f098b",
    assignedToStaffUuid: "123e4567-0b61-4683-9d3d-2308e9eb654b",
    uuid: "123e4567-5e23-4b7b-8962-2308e55826eb",
    createdByStaffUuid: "123e4567-d74c-4f5e-aec4-2308ed1b662b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |