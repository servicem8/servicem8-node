# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-6a24-477c-988d-22bdcdc3fd8b",
    jobUuid: "123e4567-89c6-445e-abf5-22bdcedfdf4b",
    staffUuid: "123e4567-2965-4563-b8d3-22bdc00a608b",
    startDate: "2025-05-01 12:00:00",
    endDate: "2025-05-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-05-01 12:00:00",
    allocatedByStaffUuid: "123e4567-5a5e-4233-890a-22bdce6537db",
    allocatedTimestamp: "2025-05-01 12:00:00",
    materialUuid: "123e4567-451a-4ff1-ab0a-22bdc86b323b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |