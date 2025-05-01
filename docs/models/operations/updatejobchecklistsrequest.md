# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-44ba-4087-9d1d-22b6c2da850b",
    jobUuid: "123e4567-b74a-4c11-b4ac-22b6cad6430b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-6b8e-4169-b9c7-22b6cfdf19db",
    completedDuringCheckinUuid: "123e4567-3628-464b-a356-22b6cbd288bb",
    regardingObjectUuid: "123e4567-9cd2-4354-8a9c-22b6c796091b",
    fulfilledByObjectUuid: "123e4567-680f-4740-aca6-22b6c3df4c4b",
    assignedToStaffUuids: [
      "123e4567-ef64-44dc-8a0b-22b6c728745b",
    ],
    assignedTimestamp: "2025-05-01 12:00:00",
    assignedByStaffUuid: "123e4567-3a04-4169-aab6-22b6c11cd35b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |