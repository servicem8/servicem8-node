# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-6e3f-40ed-87ea-22b4da51e71b",
    jobUuid: "123e4567-5336-4ee2-8dc4-22b4dc442beb",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-2f9e-4d12-aacb-22b4d22152eb",
    completedDuringCheckinUuid: "123e4567-5b0e-486f-9a75-22b4d1ee0d7b",
    regardingObjectUuid: "123e4567-d249-4a7f-aa18-22b4d707f7bb",
    fulfilledByObjectUuid: "123e4567-6b70-4c7c-a3de-22b4d4c4fbdb",
    assignedToStaffUuids: [
      "123e4567-607f-446b-b71d-22b4d676e55b",
    ],
    assignedTimestamp: "YYYY-MM-DD HH:MM:SS",
    assignedByStaffUuid: "123e4567-0f45-417f-bd89-22b4daa439db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |