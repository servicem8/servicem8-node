# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-e207-479b-b7cd-23b2e7dcd3cb",
    jobUuid: "123e4567-e95e-46b7-91d1-23b2eca19feb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-bf53-46cf-b48d-23b2ec6381eb",
    completedDuringCheckinUuid: "123e4567-8323-49bd-bad6-23b2e6a0e5cb",
    regardingObjectUuid: "123e4567-5b3d-4450-bb2d-23b2ea64c0eb",
    fulfilledByObjectUuid: "123e4567-43b2-4c8a-be9b-23b2e107a4cb",
    assignedToStaffUuids: [
      "123e4567-d76c-4712-9785-23b2e7f33f5b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |