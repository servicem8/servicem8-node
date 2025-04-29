# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-858b-44ea-99de-22b4dfa3209b",
    jobUuid: "123e4567-f77a-4c4c-bb26-22b4d1b4a46b",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-cd26-49e3-9dcf-22b4d5cfc5bb",
    completedDuringCheckinUuid: "123e4567-4aab-496e-80b2-22b4d76e846b",
    regardingObjectUuid: "123e4567-ccb9-4aac-a257-22b4d59794fb",
    fulfilledByObjectUuid: "123e4567-f027-4ef7-8f83-22b4d124266b",
    assignedToStaffUuids: [
      "123e4567-d16f-4d51-8b3a-22b4d93745eb",
    ],
    assignedTimestamp: "YYYY-MM-DD HH:MM:SS",
    assignedByStaffUuid: "123e4567-b658-4dc6-bbe6-22b4d65d0f4b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |