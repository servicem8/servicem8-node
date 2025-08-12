# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-d4f1-42a7-8d0d-231d20b1c78b",
    jobUuid: "123e4567-41f5-4452-a62a-231d26571a3b",
    staffUuid: "123e4567-80e7-4b9d-88aa-231d2a8fb26b",
    startDate: "2025-08-01 12:00:00",
    endDate: "2025-08-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-08-01 12:00:00",
    allocatedByStaffUuid: "123e4567-acac-462d-a136-231d2988ed4b",
    allocatedTimestamp: "2025-08-01 12:00:00",
    materialUuid: "123e4567-ccea-4b33-9253-231d2042dd5b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |