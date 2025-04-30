# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-0690-46bd-8631-22b5607a2bdb",
    jobUuid: "123e4567-78b2-4af1-865f-22b56ac8872b",
    completedTimestamp: "2025-04-01 12:00:00",
    completedByStaffUuid: "123e4567-f437-4d44-8319-22b56b38bf9b",
    completedDuringCheckinUuid: "123e4567-a725-45e7-8ac4-22b56f564f8b",
    regardingObjectUuid: "123e4567-00f1-4875-a8a8-22b5655f54ab",
    fulfilledByObjectUuid: "123e4567-2090-4ac2-beb7-22b56997296b",
    assignedToStaffUuids: [
      "123e4567-c5f1-4f0b-9cfc-22b56392678b",
    ],
    assignedTimestamp: "2025-04-01 12:00:00",
    assignedByStaffUuid: "123e4567-3fec-4f6d-9dd3-22b567fb126b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |