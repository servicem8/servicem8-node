# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-7949-457c-b35f-230fee22ba5b",
    jobUuid: "123e4567-fcb6-47e5-a98f-230fe5d006ab",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-1bd5-4f45-b250-230fe03be31b",
    completedDuringCheckinUuid: "123e4567-927d-4264-a424-230fea5fb17b",
    regardingObjectUuid: "123e4567-a18e-478f-aaf5-230fe25018eb",
    fulfilledByObjectUuid: "123e4567-d957-4f1c-9812-230fe1d3cbab",
    assignedToStaffUuids: [
      "123e4567-806f-41ec-b2c9-230fe1b1f12b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-f1c3-4cb4-8b15-230fed75d28b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |