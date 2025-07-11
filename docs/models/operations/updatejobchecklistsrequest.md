# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-f617-4e18-87f1-22fd81c5ee7b",
    jobUuid: "123e4567-ee87-4cf0-9aa1-22fd8cfec26b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-25ac-40d3-b05c-22fd8e6f2f1b",
    completedDuringCheckinUuid: "123e4567-6bbc-420a-95d0-22fd85dd957b",
    regardingObjectUuid: "123e4567-3280-419a-b05c-22fd8dec44fb",
    fulfilledByObjectUuid: "123e4567-393b-45f4-8a90-22fd8b68a4ab",
    assignedToStaffUuids: [
      "123e4567-2888-410d-b6b8-22fd803b0afb",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-a7a7-49c2-b438-22fd8501ec4b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |