# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-d500-4887-8428-2308ed6b93eb",
    jobUuid: "123e4567-de35-4dc4-b01e-2308e3ace0bb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-2b86-42b5-9c43-2308e152d9db",
    completedDuringCheckinUuid: "123e4567-a2d7-42ca-ad5b-2308ee619ffb",
    regardingObjectUuid: "123e4567-bcf0-497e-94b4-2308eba6725b",
    fulfilledByObjectUuid: "123e4567-3e49-4515-89ae-2308ed8ee20b",
    assignedToStaffUuids: [
      "123e4567-8a19-47c2-9c56-2308e77e10db",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-508b-44db-9f14-2308e322131b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |