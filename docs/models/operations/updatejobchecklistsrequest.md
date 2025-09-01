# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-ea27-4de8-be5c-233127d9af7b",
    jobUuid: "123e4567-87a0-4e5a-bbd5-23312cda81ab",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-9d5f-463f-9f49-23312e125a6b",
    completedDuringCheckinUuid: "123e4567-4cfc-4bd6-8ea4-23312cd9438b",
    regardingObjectUuid: "123e4567-f312-4d2b-8800-2331261d479b",
    fulfilledByObjectUuid: "123e4567-72e5-4089-8480-2331250b320b",
    assignedToStaffUuids: [
      "123e4567-1ad2-4354-a6c6-23312a9bbf9b",
    ],
    assignedTimestamp: "2025-09-01 12:00:00",
    assignedByStaffUuid: "123e4567-e53b-4e56-a697-23312192939b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |