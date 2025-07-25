# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-222d-4b23-9437-230b76f7528b",
    jobUuid: "123e4567-ce4a-4bf8-8059-230b7609915b",
    staffUuid: "123e4567-2e7c-4f72-982a-230b7bd254db",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-f1aa-4493-a287-230b7e725efb",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-df01-4804-b86c-230b73c0699b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |