# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  task: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-6467-4eca-8683-2320af34cfbb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-eb36-4613-9b22-2320a66f422b",
    assignedToStaffUuid: "123e4567-cb63-4275-804b-2320a9b8ec1b",
    uuid: "123e4567-e912-4818-95a7-2320af480abb",
    createdByStaffUuid: "123e4567-fc53-43a0-bce7-2320ac9aa34b",
    createDate: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Task                                             |
| `task`                                                       | [components.TaskInput](../../models/components/taskinput.md) | :heavy_check_mark:                                           | Task fields to update                                        |