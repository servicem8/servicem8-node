# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-19ee-4acf-9f74-22bb065eaebb",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-3eb7-4f4f-a4e1-22bb051cb1ab",
    assignedToStaffUuid: "123e4567-77fb-45ed-9358-22bb0d2abb0b",
    uuid: "123e4567-dae8-4290-899d-22bb0e0f898b",
    createdByStaffUuid: "123e4567-e475-4efb-a2e7-22bb070ed2bb",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |