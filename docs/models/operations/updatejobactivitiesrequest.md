# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-2b0d-4bdf-b964-233120a5f2eb",
    jobUuid: "123e4567-897a-4552-bbb7-233127c1283b",
    staffUuid: "123e4567-704d-40ab-9158-23312472a96b",
    startDate: "2025-09-01 12:00:00",
    endDate: "2025-09-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-09-01 12:00:00",
    allocatedByStaffUuid: "123e4567-490c-4eb6-80ad-233121f26b9b",
    allocatedTimestamp: "2025-09-01 12:00:00",
    materialUuid: "123e4567-eacb-4e92-8c9e-233125383b2b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |