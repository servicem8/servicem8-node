# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-d3ee-4651-a51a-230ef7c4228b",
    jobUuid: "123e4567-38fd-4545-82a3-230efbbfe2fb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-569f-4db7-ac6d-230efe6e95fb",
    completedDuringCheckinUuid: "123e4567-ea0d-4b48-bbaa-230ef65c19db",
    regardingObjectUuid: "123e4567-9a38-4181-8219-230ef7ee3bfb",
    fulfilledByObjectUuid: "123e4567-2b2e-47d7-84f4-230ef957faeb",
    assignedToStaffUuids: [
      "123e4567-d0c8-45d0-96c0-230ef64568db",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-6368-49f4-b8fa-230efe24887b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |