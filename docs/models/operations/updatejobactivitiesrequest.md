# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-4574-4f07-8a7e-23f94f76144b",
    staffUuid: "123e4567-d648-48f1-9223-23f94b0c350b",
    startDate: "2026-03-01 12:00:00",
    endDate: "2026-03-01 12:00:00",
    hasBeenOpenedTimestamp: "2026-03-01 12:00:00",
    materialUuid: "123e4567-24bc-41d2-91d5-23f9493d724b",
    uuid: "123e4567-1330-427d-a253-23f94562fb8b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |