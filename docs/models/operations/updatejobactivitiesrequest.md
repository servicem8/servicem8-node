# UpdateJobActivitiesRequest

## Example Usage

```typescript
import { UpdateJobActivitiesRequest } from "servicem8/models/operations";

let value: UpdateJobActivitiesRequest = {
  uuid: "eb4aaa37-123b-4044-9b26-0ebf7f5ddba5",
  jobActivity: {
    uuid: "123e4567-1fda-42d1-83c1-22b4dbbc1fcb",
    jobUuid: "123e4567-ca5c-4bae-bc7f-22b4dbd153db",
    staffUuid: "123e4567-4790-4b80-b7cc-22b4d783ffeb",
    startDate: "YYYY-MM-DD HH:MM:SS",
    endDate: "YYYY-MM-DD HH:MM:SS",
    hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
    allocatedByStaffUuid: "123e4567-e4ed-40d8-8e5a-22b4d02fc29b",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    materialUuid: "123e4567-9bf7-4a38-82cb-22b4d4df40cb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Activity                                                   |
| `jobActivity`                                                              | [components.JobActivityInput](../../models/components/jobactivityinput.md) | :heavy_check_mark:                                                         | Job Activity fields to update                                              |