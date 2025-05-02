# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-d6e5-4885-bcbb-22b70e5c384b",
    jobUuid: "123e4567-f8e5-4c71-a791-22b70f5ea50b",
    staffUuid: "123e4567-768c-4f72-94dd-22b70c8799ab",
    startDate: "2025-05-01 12:00:00",
    endDate: "2025-05-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-05-01 12:00:00",
    allocatedByStaffUuid: "123e4567-4c1e-40f3-b904-22b7094cc81b",
    allocatedTimestamp: "2025-05-01 12:00:00",
    materialUuid: "123e4567-0787-4468-8716-22b709a76bbb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |