# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-414b-409d-a0cc-231104c8953b",
    jobUuid: "123e4567-3dcb-4bce-9276-23110867d7cb",
    staffUuid: "123e4567-da0d-470e-9734-231109867e7b",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-ec99-4138-aaa2-23110f57af3b",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-ce03-4320-a78d-231103d9badb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |