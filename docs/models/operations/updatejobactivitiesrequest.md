# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-825b-459e-b123-2329b922c33b",
    jobUuid: "123e4567-5903-4e68-b94c-2329b9cf1b1b",
    staffUuid: "123e4567-705d-406e-97dd-2329be0fdccb",
    startDate: "2025-08-01 12:00:00",
    endDate: "2025-08-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-08-01 12:00:00",
    allocatedByStaffUuid: "123e4567-d0fa-431e-b556-2329ba5b886b",
    allocatedTimestamp: "2025-08-01 12:00:00",
    materialUuid: "123e4567-a899-4f07-a251-2329b60a7a8b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |