# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-aacd-427c-8cc1-23d595ea8ecb",
    completedTimestamp: "2026-02-01 12:00:00",
    completedByStaffUuid: "123e4567-e6eb-484f-a8ee-23d59500aeab",
    assignedToStaffUuid: "123e4567-ede4-4d6a-8725-23d59ead20eb",
    uuid: "123e4567-b1de-43e9-9c78-23d597b380eb",
    createdByStaffUuid: "123e4567-c26c-44dd-954d-23d59a4aa53b",
    createDate: "2026-02-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |