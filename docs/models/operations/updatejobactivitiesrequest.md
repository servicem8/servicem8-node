# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-8b70-438c-b907-23c6f5d95cbb",
    staffUuid: "123e4567-793b-404b-90c2-23c6f99386bb",
    startDate: "2026-01-01 12:00:00",
    endDate: "2026-01-01 12:00:00",
    hasBeenOpenedTimestamp: "2026-01-01 12:00:00",
    materialUuid: "123e4567-e8e5-4bf8-859c-23c6fad1dd4b",
    uuid: "123e4567-ceaf-4215-b28a-23c6ff37198b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |