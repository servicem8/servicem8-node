# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-7cdd-446f-a5ed-234d577de2db",
    staffUuid: "123e4567-97df-4b1a-8d32-234d5fd7a8ab",
    startDate: "2025-09-01 12:00:00",
    endDate: "2025-09-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-09-01 12:00:00",
    materialUuid: "123e4567-8ee0-4dee-b26a-234d5fd0377b",
    uuid: "123e4567-fa59-42fa-8e50-234d5ecabe5b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |