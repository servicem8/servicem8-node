# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-6e34-45f4-8840-231ef70817db",
    jobUuid: "123e4567-133e-4868-8adc-231efd6271db",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-a358-4969-b894-231ef2f9410b",
    completedDuringCheckinUuid: "123e4567-a5a9-458f-a95b-231ef4b21ddb",
    regardingObjectUuid: "123e4567-a143-47ab-9663-231ef1781dfb",
    fulfilledByObjectUuid: "123e4567-8110-4e73-aa02-231efdef980b",
    assignedToStaffUuids: [
      "123e4567-7d34-4814-8d7c-231efe45917b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-28a4-4223-baf4-231ef8ddcfab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |