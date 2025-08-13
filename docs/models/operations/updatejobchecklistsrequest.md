# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-1cac-401c-bcb5-231ef269f9cb",
    jobUuid: "123e4567-6f56-4f9b-9290-231efd979deb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-b69d-446f-9e82-231efc1ea53b",
    completedDuringCheckinUuid: "123e4567-fd83-4fab-8461-231efb521d1b",
    regardingObjectUuid: "123e4567-9946-42dc-9837-231ef935ddcb",
    fulfilledByObjectUuid: "123e4567-8e97-491b-80e7-231ef9140f1b",
    assignedToStaffUuids: [
      "123e4567-738f-4be4-81f6-231ef2ddf36b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-55ee-43b4-b5f8-231efbb0cceb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |