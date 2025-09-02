# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-4fca-424e-b31a-2331249552ab",
    jobUuid: "123e4567-938a-4689-bee6-233123052a3b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-2e52-4f50-9f75-2331293162fb",
    completedDuringCheckinUuid: "123e4567-4cb3-47d0-bdd0-23312bebfd4b",
    regardingObjectUuid: "123e4567-52e9-4271-bcf4-23312a3c3feb",
    fulfilledByObjectUuid: "123e4567-0f5e-4e58-b892-233126b3164b",
    assignedToStaffUuids: [
      "123e4567-fc38-49c5-8119-2331294beafb",
    ],
    assignedTimestamp: "2025-09-01 12:00:00",
    assignedByStaffUuid: "123e4567-5a13-4de9-9515-2331250690db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |