# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-99dd-4632-8d04-23184068a2eb",
    jobUuid: "123e4567-c309-4728-869b-23184063b15b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-5a42-4124-9eb7-23184acd8b6b",
    completedDuringCheckinUuid: "123e4567-a20c-4389-935f-23184d0c935b",
    regardingObjectUuid: "123e4567-0c73-48ba-9294-23184f4cdabb",
    fulfilledByObjectUuid: "123e4567-5925-4abe-a06e-2318424be32b",
    assignedToStaffUuids: [
      "123e4567-7ca6-49c4-8224-23184858870b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-935b-459e-962e-231845a9ff2b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |