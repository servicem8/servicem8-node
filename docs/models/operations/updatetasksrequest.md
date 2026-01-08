# UpdateTasksRequest

## Example Usage

```typescript
import { UpdateTasksRequest } from "servicem8/models/operations";

let value: UpdateTasksRequest = {
  uuid: "3ae11dd4-7b1b-49ee-aafc-39a9453e472f",
  taskCreate: {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-319d-4513-9895-23b2e61c153b",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-4d6f-454d-889c-23b2e8a0913b",
    assignedToStaffUuid: "123e4567-56ed-424c-9b55-23b2e4acfeeb",
    uuid: "123e4567-9592-4bf3-8fea-23b2e4dfaffb",
    createdByStaffUuid: "123e4567-6ba6-4b01-baac-23b2e517055b",
    createDate: "2026-01-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Task                                               |
| `taskCreate`                                                   | [components.TaskCreate](../../models/components/taskcreate.md) | :heavy_check_mark:                                             | Task fields to update                                          |