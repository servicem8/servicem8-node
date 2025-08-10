# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-8683-4c26-81d7-23184eeb3a5b",
    jobUuid: "123e4567-4f6f-40b6-b438-2318463dbc9b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-cbf1-4dd0-96ea-231841e58e7b",
    completedDuringCheckinUuid: "123e4567-7ce0-4d93-815c-231841284efb",
    regardingObjectUuid: "123e4567-3e5d-4850-8464-23184494dffb",
    fulfilledByObjectUuid: "123e4567-019d-45a9-974d-231843a4d33b",
    assignedToStaffUuids: [
      "123e4567-c53f-4114-ae1e-23184c6c1feb",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-aacd-4a50-b913-2318441be2eb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |