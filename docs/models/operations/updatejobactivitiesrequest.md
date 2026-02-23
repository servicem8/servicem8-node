# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-4362-4ae7-86c1-23d59d7deddb",
    staffUuid: "123e4567-01f1-4862-8903-23d5951e34eb",
    startDate: "2026-02-01 12:00:00",
    endDate: "2026-02-01 12:00:00",
    hasBeenOpenedTimestamp: "2026-02-01 12:00:00",
    materialUuid: "123e4567-de2c-431e-84b8-23d598e36a3b",
    uuid: "123e4567-ae63-44bf-aa07-23d5940c825b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |