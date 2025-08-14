# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-ee6c-45b2-8d04-231ef770d48b",
    jobUuid: "123e4567-51e1-4d64-abaf-231ef3f7702b",
    staffUuid: "123e4567-38a4-44a9-825a-231ef5b665fb",
    startDate: "2025-08-01 12:00:00",
    endDate: "2025-08-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-08-01 12:00:00",
    allocatedByStaffUuid: "123e4567-3b9e-4986-8941-231ef301953b",
    allocatedTimestamp: "2025-08-01 12:00:00",
    materialUuid: "123e4567-bec3-446f-ad99-231efcdde23b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |