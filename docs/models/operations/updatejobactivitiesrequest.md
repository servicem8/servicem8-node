# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivityCreate: {
    jobUuid: "123e4567-8bda-473b-ba21-23eb26eb734b",
    staffUuid: "123e4567-46b7-4388-80c8-23eb22b5e40b",
    startDate: "2026-03-01 12:00:00",
    endDate: "2026-03-01 12:00:00",
    hasBeenOpenedTimestamp: "2026-03-01 12:00:00",
    materialUuid: "123e4567-3a95-4ced-b16a-23eb2c19ce7b",
    uuid: "123e4567-c564-4586-899f-23eb270c64db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Activity                                                     |
| `jobActivityCreate`                                                          | [components.JobActivityCreate](../../models/components/jobactivitycreate.md) | :heavy_check_mark:                                                           | Job Activity fields to update                                                |