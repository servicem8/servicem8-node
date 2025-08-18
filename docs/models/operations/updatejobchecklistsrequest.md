# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-51b8-429c-b3bb-232223bc88eb",
    jobUuid: "123e4567-3273-40a3-bc0b-2322226d37fb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-b162-4d92-a53b-23222c1e085b",
    completedDuringCheckinUuid: "123e4567-5f6c-46c0-81ee-23222cc1dccb",
    regardingObjectUuid: "123e4567-cde8-44f7-ae8d-2322231dc54b",
    fulfilledByObjectUuid: "123e4567-214b-4396-a48f-23222373fb8b",
    assignedToStaffUuids: [
      "123e4567-b7c9-4f4a-a2f2-2322272e53cb",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-0b12-414e-8e4f-2322201a6c3b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |