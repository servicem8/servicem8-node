# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-6c1c-4670-a8bb-231b2541687b",
    jobUuid: "123e4567-6cef-4ae8-9d48-231b2bd750fb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-60c8-455a-adde-231b2f3a9c1b",
    completedDuringCheckinUuid: "123e4567-76ee-4d7b-ab3f-231b2c155e8b",
    regardingObjectUuid: "123e4567-7e01-4708-93e5-231b212eb7eb",
    fulfilledByObjectUuid: "123e4567-870f-4972-bf7f-231b2726661b",
    assignedToStaffUuids: [
      "123e4567-2b1b-43da-b21c-231b21f0be8b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-0c4b-45bd-8728-231b2df23c6b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |