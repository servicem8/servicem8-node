# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-538c-4a47-b239-234821335e6b",
    staffUuid: "123e4567-f087-41fa-aa26-2348217e07db",
    startDate: "2025-09-01 12:00:00",
    endDate: "2025-09-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-09-01 12:00:00",
    materialUuid: "123e4567-6f27-40aa-870e-234820c9a4cb",
    uuid: "123e4567-3413-4c1d-b026-23482764ddab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |