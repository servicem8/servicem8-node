# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-0181-44a0-82d8-22bb0b81228b",
    jobUuid: "123e4567-b97a-485f-83fd-22bb01b8df7b",
    staffUuid: "123e4567-3f91-473f-9c6b-22bb07604a1b",
    startDate: "2025-05-01 12:00:00",
    endDate: "2025-05-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-05-01 12:00:00",
    allocatedByStaffUuid: "123e4567-5920-420e-94b3-22bb0f80efeb",
    allocatedTimestamp: "2025-05-01 12:00:00",
    materialUuid: "123e4567-1c43-42cf-8fea-22bb0678553b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |