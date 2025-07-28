# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-f8cf-455c-9036-230c4c45cd6b",
    jobUuid: "123e4567-5b3c-4223-9ca0-230c465a0d7b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-e2eb-4bc3-8b08-230c474b11db",
    completedDuringCheckinUuid: "123e4567-c4af-4f66-95ef-230c480cef2b",
    regardingObjectUuid: "123e4567-8255-4d23-bef3-230c4eea24eb",
    fulfilledByObjectUuid: "123e4567-b5f3-4a0b-9d37-230c4ef7b44b",
    assignedToStaffUuids: [
      "123e4567-4849-417a-83d1-230c47543c1b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-ec7c-46ba-a45f-230c47f04f1b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |