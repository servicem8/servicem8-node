# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-1d34-4acb-b714-2313f6a4e5eb",
    jobUuid: "123e4567-fe02-4710-86f0-2313ffc2a0db",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-3320-474b-9e29-2313f5ed3f9b",
    completedDuringCheckinUuid: "123e4567-f003-47e4-b51d-2313f37544ab",
    regardingObjectUuid: "123e4567-6e28-49b1-9fd4-2313fdbc608b",
    fulfilledByObjectUuid: "123e4567-9074-4896-ba73-2313f5a4456b",
    assignedToStaffUuids: [
      "123e4567-42c3-4704-90e5-2313fb6abd7b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-4814-4a58-9099-2313fe7c5dcb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |