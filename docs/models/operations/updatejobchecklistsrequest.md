# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-7ceb-44ea-ace3-22bdcb602e6b",
    jobUuid: "123e4567-27af-4379-8658-22bdc89827cb",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-2957-4df2-9c5d-22bdc3fb37bb",
    completedDuringCheckinUuid: "123e4567-9691-474c-947d-22bdc6dcb0db",
    regardingObjectUuid: "123e4567-60b0-466d-bc11-22bdcde07b2b",
    fulfilledByObjectUuid: "123e4567-fb45-4a0b-9ac8-22bdcba836eb",
    assignedToStaffUuids: [
      "123e4567-02aa-48b5-a924-22bdc229542b",
    ],
    assignedTimestamp: "2025-05-01 12:00:00",
    assignedByStaffUuid: "123e4567-47a1-4a57-a3c1-22bdc2aa0e5b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |