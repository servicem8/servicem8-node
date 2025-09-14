# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-f053-428c-b8c3-233c62adcc4b",
    staffUuid: "123e4567-6503-4341-accb-233c61c1384b",
    startDate: "2025-09-01 12:00:00",
    endDate: "2025-09-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-09-01 12:00:00",
    materialUuid: "123e4567-bcd2-4033-af9b-233c608d75ab",
    uuid: "123e4567-a1ad-4f9a-9f62-233c6905ef0b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |