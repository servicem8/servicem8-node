# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-908b-4ba9-83d8-231fe750801b",
    jobUuid: "123e4567-82ce-4036-9798-231feca6966b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-d61e-4d9c-9b91-231fe23cde1b",
    completedDuringCheckinUuid: "123e4567-124a-44ad-9bd4-231fecbc8bab",
    regardingObjectUuid: "123e4567-1e53-436a-92d6-231fe66e584b",
    fulfilledByObjectUuid: "123e4567-be8a-4ad6-95e7-231fe412f95b",
    assignedToStaffUuids: [
      "123e4567-b71d-472a-8d72-231fea253d1b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-d01c-4a86-b9cb-231fefa7e82b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |