# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-52f0-47a1-a813-234973a30a8b",
    staffUuid: "123e4567-eb95-42e6-911e-23497beb4b1b",
    startDate: "2025-09-01 12:00:00",
    endDate: "2025-09-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-09-01 12:00:00",
    materialUuid: "123e4567-c8f5-4e4d-80fc-23497c7b3acb",
    uuid: "123e4567-83fd-422f-8765-23497ad60b9b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |