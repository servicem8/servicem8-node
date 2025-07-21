# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-3834-4743-b7db-2307693e4f6b",
    jobUuid: "123e4567-b878-456e-9f80-230765d2a17b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-c83b-4184-a59d-2307641ab11b",
    completedDuringCheckinUuid: "123e4567-19e6-4afb-a4e5-23076a18594b",
    regardingObjectUuid: "123e4567-688e-474d-9689-23076886e83b",
    fulfilledByObjectUuid: "123e4567-911d-4d06-ab15-23076303081b",
    assignedToStaffUuids: [
      "123e4567-359b-4f1e-9119-2307685b681b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-3f96-4db5-9584-230768d13f0b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |