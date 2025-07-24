# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-f362-4e71-ae35-230a6d0102db",
    jobUuid: "123e4567-d999-40ca-af2f-230a6e46f4fb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-5bce-445f-95cf-230a6d5f60eb",
    completedDuringCheckinUuid: "123e4567-420f-49fe-a68c-230a6f4a115b",
    regardingObjectUuid: "123e4567-0ade-4436-811c-230a62ed91ab",
    fulfilledByObjectUuid: "123e4567-8406-4e38-9ba2-230a67112bbb",
    assignedToStaffUuids: [
      "123e4567-901c-414c-b018-230a6a9503bb",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-84b1-4b1a-8b0d-230a6efcb2ab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |