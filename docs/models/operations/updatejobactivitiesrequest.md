# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-f1c4-4a78-993e-22b56d0b4d0b",
    jobUuid: "123e4567-779b-4048-ba0b-22b56149a78b",
    staffUuid: "123e4567-e992-4f5a-b846-22b568947acb",
    startDate: "2025-04-01 12:00:00",
    endDate: "2025-04-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-04-01 12:00:00",
    allocatedByStaffUuid: "123e4567-c473-48c1-9094-22b56ce46d8b",
    allocatedTimestamp: "2025-04-01 12:00:00",
    materialUuid: "123e4567-9ac2-49d6-aa20-22b565be8d1b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |