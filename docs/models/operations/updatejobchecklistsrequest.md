# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-2903-47e1-8346-22fb2a23388b",
    jobUuid: "123e4567-3b5c-43ab-911a-22fb20ef890b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-fe0d-42bc-98e4-22fb296574eb",
    completedDuringCheckinUuid: "123e4567-97e5-47f2-bacc-22fb28bdc82b",
    regardingObjectUuid: "123e4567-c74c-4730-9762-22fb25fe1acb",
    fulfilledByObjectUuid: "123e4567-8813-4d82-9347-22fb29879d8b",
    assignedToStaffUuids: [
      "123e4567-f88c-4253-b269-22fb298ceb3b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-6123-4b58-ad20-22fb22bad95b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |