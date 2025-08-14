# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-785f-4f1d-8f84-231fe2a4371b",
    jobUuid: "123e4567-8d0e-4fb1-a361-231fe792c0db",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-63dd-4985-8107-231fe2feaa8b",
    completedDuringCheckinUuid: "123e4567-02a0-49ad-97e9-231fede3864b",
    regardingObjectUuid: "123e4567-319e-4118-ac5f-231fedf8bfdb",
    fulfilledByObjectUuid: "123e4567-b361-499f-a0ea-231fe91c9d3b",
    assignedToStaffUuids: [
      "123e4567-25e8-4818-bc14-231febfef26b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-589e-4077-817b-231fe6c9fb6b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |