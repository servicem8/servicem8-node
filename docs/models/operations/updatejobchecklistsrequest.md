# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-2bec-4c5f-8c3b-233c63bf883b",
    jobUuid: "123e4567-5d46-474d-8d9e-233c6d529f6b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-5845-4cd2-9f21-233c64c00a7b",
    completedDuringCheckinUuid: "123e4567-d284-4b2c-84b8-233c66e5b4ab",
    regardingObjectUuid: "123e4567-65e4-4b31-be0e-233c683a667b",
    fulfilledByObjectUuid: "123e4567-71f3-4e0e-9d3f-233c6c41ea5b",
    assignedToStaffUuids: [
      "123e4567-634f-407c-b835-233c6432879b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |