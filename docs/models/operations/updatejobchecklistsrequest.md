# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-cc36-4361-a5ad-23110512934b",
    jobUuid: "123e4567-8573-4aa8-b165-231101916d2b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-862f-42fd-889a-23110d17b99b",
    completedDuringCheckinUuid: "123e4567-0c3f-4f06-b0a6-23110075b43b",
    regardingObjectUuid: "123e4567-4b74-4fbe-bc89-23110d84d80b",
    fulfilledByObjectUuid: "123e4567-68b7-4641-b025-23110238a64b",
    assignedToStaffUuids: [
      "123e4567-591c-42ec-b686-231104ea7aab",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-0759-4f33-b176-23110b8ec22b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |