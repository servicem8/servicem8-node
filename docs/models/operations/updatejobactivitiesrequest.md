# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-274d-4441-bd49-23184aa63e8b",
    jobUuid: "123e4567-650a-4da4-a79a-23184ea94ecb",
    staffUuid: "123e4567-2e2f-41d9-ab88-231845f3388b",
    startDate: "2025-08-01 12:00:00",
    endDate: "2025-08-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-08-01 12:00:00",
    allocatedByStaffUuid: "123e4567-5268-4be8-9ed1-231849079e3b",
    allocatedTimestamp: "2025-08-01 12:00:00",
    materialUuid: "123e4567-787b-414f-a440-23184271224b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |