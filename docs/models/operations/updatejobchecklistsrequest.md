# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-999f-4857-bd78-230c4567933b",
    jobUuid: "123e4567-2969-497d-8c17-230c4dc41b8b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-7d3c-4b3f-b1d7-230c423528fb",
    completedDuringCheckinUuid: "123e4567-273e-40c0-b114-230c410b20cb",
    regardingObjectUuid: "123e4567-b5c2-4f9b-884b-230c424ef73b",
    fulfilledByObjectUuid: "123e4567-6c8c-44bd-b997-230c4bb009db",
    assignedToStaffUuids: [
      "123e4567-cbd2-459f-b5e8-230c49fd5a0b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-dfcd-4f30-84c6-230c42d6a66b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |