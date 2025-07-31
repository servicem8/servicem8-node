# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-f61e-4d38-a708-230fe1745beb",
    jobUuid: "123e4567-f609-4783-8dbd-230fe3c4d53b",
    staffUuid: "123e4567-26d0-4799-a5f3-230fe55aad1b",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-5788-43db-9974-230fec08981b",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-1b98-4672-aea0-230fe41c933b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |