# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-e4e2-4b14-ae1b-23e9376943db",
    staffUuid: "123e4567-60a0-410b-a1c7-23e93cc345bb",
    startDate: "2026-03-01 12:00:00",
    endDate: "2026-03-01 12:00:00",
    hasBeenOpenedTimestamp: "2026-03-01 12:00:00",
    materialUuid: "123e4567-3b8e-4f27-8e11-23e93f22d9bb",
    uuid: "123e4567-6ef1-45c3-944d-23e93f10a65b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |