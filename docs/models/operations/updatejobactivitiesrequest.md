# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-529e-42a6-b828-23eb20d3922b",
    staffUuid: "123e4567-ef89-4754-8220-23eb29d9041b",
    startDate: "2026-03-01 12:00:00",
    endDate: "2026-03-01 12:00:00",
    hasBeenOpenedTimestamp: "2026-03-01 12:00:00",
    materialUuid: "123e4567-d4ab-481f-890a-23eb281e01db",
    uuid: "123e4567-b200-49eb-baa7-23eb2e22d80b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |