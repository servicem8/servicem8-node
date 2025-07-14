# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-25f3-4b52-a2de-230048f53c1b",
    jobUuid: "123e4567-a602-4abf-91a3-230047f0440b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-d47a-40e9-9647-23004702ef3b",
    completedDuringCheckinUuid: "123e4567-91a0-49d2-8093-23004caf42cb",
    regardingObjectUuid: "123e4567-ca07-4503-9260-23004ad87c6b",
    fulfilledByObjectUuid: "123e4567-7778-427d-a01f-230049ed1eab",
    assignedToStaffUuids: [
      "123e4567-ef5e-41ec-b2e1-23004a35075b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-f597-4fcb-984a-23004a10eedb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |