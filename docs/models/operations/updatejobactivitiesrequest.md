# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-146d-4b3b-8201-231fe8d8249b",
    jobUuid: "123e4567-46c2-44aa-8272-231fe389fa9b",
    staffUuid: "123e4567-6fb5-4111-8eef-231feb52e4ab",
    startDate: "2025-08-01 12:00:00",
    endDate: "2025-08-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-08-01 12:00:00",
    allocatedByStaffUuid: "123e4567-061a-4c62-8536-231fe18e06ab",
    allocatedTimestamp: "2025-08-01 12:00:00",
    materialUuid: "123e4567-6516-4a80-8b11-231fe862fd7b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |