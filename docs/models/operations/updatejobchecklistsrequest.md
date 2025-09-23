# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-44f5-4215-a6fa-23467e35247b",
    jobUuid: "123e4567-6f5a-46eb-be44-234672b15f1b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-db4d-45b0-81c9-23467c7ec3bb",
    completedDuringCheckinUuid: "123e4567-f87f-4333-8df1-23467d54ab6b",
    regardingObjectUuid: "123e4567-b1f6-46a7-bac8-23467d802f1b",
    fulfilledByObjectUuid: "123e4567-0dad-48f1-aa69-23467ada4cdb",
    assignedToStaffUuids: [
      "123e4567-2dfe-45cc-a52b-2346785a7f3b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |