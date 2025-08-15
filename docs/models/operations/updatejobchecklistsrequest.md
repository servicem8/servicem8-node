# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-cf72-482c-828d-2320a56ddebb",
    jobUuid: "123e4567-7cfb-4916-bfdb-2320a24e84eb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-531b-4dcc-87eb-2320a854df7b",
    completedDuringCheckinUuid: "123e4567-8339-4951-8054-2320a859ca2b",
    regardingObjectUuid: "123e4567-bfa3-4021-92aa-2320ab4efb5b",
    fulfilledByObjectUuid: "123e4567-4d60-440d-9e8c-2320a7ca325b",
    assignedToStaffUuids: [
      "123e4567-fae9-413a-b75f-2320aa4ad33b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-b5a4-4841-9bdc-2320ad4d4a9b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |