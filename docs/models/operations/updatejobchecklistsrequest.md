# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-92c4-435f-97b6-23482f7f0ffb",
    jobUuid: "123e4567-ed14-4418-8357-234829327c6b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-be66-4af7-95eb-23482648746b",
    completedDuringCheckinUuid: "123e4567-267a-48e9-9631-234820f17ffb",
    regardingObjectUuid: "123e4567-420f-4531-b6c6-23482155406b",
    fulfilledByObjectUuid: "123e4567-385c-4c65-b6c5-234825ebf8db",
    assignedToStaffUuids: [
      "123e4567-413c-4a0a-9e35-23482afd848b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |