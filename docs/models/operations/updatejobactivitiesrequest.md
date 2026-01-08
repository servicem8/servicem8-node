# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-4702-474c-b155-23b2e6b9678b",
    staffUuid: "123e4567-da35-4c27-92cd-23b2ef106ffb",
    startDate: "2026-01-01 12:00:00",
    endDate: "2026-01-01 12:00:00",
    hasBeenOpenedTimestamp: "2026-01-01 12:00:00",
    materialUuid: "123e4567-86e2-4b44-84d8-23b2e4f7944b",
    uuid: "123e4567-2478-4744-8170-23b2e74908db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |