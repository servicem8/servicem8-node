# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-81db-4f15-b649-22b6cba4ec9b",
    jobUuid: "123e4567-784e-48ff-b702-22b6c06b0c1b",
    staffUuid: "123e4567-502c-4b27-9f92-22b6c1a6c1bb",
    startDate: "2025-05-01 12:00:00",
    endDate: "2025-05-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-05-01 12:00:00",
    allocatedByStaffUuid: "123e4567-7f46-4dce-b1ad-22b6c33a14cb",
    allocatedTimestamp: "2025-05-01 12:00:00",
    materialUuid: "123e4567-9263-4118-aa3a-22b6c33db5ab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |