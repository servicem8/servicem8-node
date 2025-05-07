# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-b781-491f-8cd1-22bcb553a0db",
    jobUuid: "123e4567-4322-42b4-9181-22bcb2e817ab",
    staffUuid: "123e4567-cd03-4ce6-b859-22bcb8bd7b6b",
    startDate: "2025-05-01 12:00:00",
    endDate: "2025-05-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-05-01 12:00:00",
    allocatedByStaffUuid: "123e4567-80b7-4c0b-8e95-22bcb92802db",
    allocatedTimestamp: "2025-05-01 12:00:00",
    materialUuid: "123e4567-3261-47d3-b72b-22bcb08cb9ab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |