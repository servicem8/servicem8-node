# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-94a9-4b32-9a0b-231fe173cf2b",
    jobUuid: "123e4567-bb2e-4ebf-89e9-231fedfe2f9b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-ba9f-4adb-b209-231fe616570b",
    completedDuringCheckinUuid: "123e4567-a069-4589-8301-231fe4008abb",
    regardingObjectUuid: "123e4567-d957-444e-ae41-231fe671917b",
    fulfilledByObjectUuid: "123e4567-b3dd-49da-a903-231fe1bbd62b",
    assignedToStaffUuids: [
      "123e4567-34b4-4031-83d0-231fea476a4b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-0a21-438c-9868-231fe25489ab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |