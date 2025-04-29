# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-a1bd-49bb-bdf8-22b4d64a2feb",
    jobUuid: "123e4567-cf75-4525-80d6-22b4d383748b",
    staffUuid: "123e4567-db25-4d06-80fa-22b4d92f9b7b",
    startDate: "YYYY-MM-DD HH:MM:SS",
    endDate: "YYYY-MM-DD HH:MM:SS",
    hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
    allocatedByStaffUuid: "123e4567-fb76-4cd6-98e4-22b4ddb2c40b",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    materialUuid: "123e4567-0f6f-4f02-a47d-22b4d0a0628b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |