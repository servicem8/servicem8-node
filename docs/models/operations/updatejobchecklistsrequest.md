# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-3c8c-4c9a-add9-2329b61ecb6b",
    jobUuid: "123e4567-64f2-4054-b87d-2329ba4914fb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-c55a-40d7-ab08-2329be96f7ab",
    completedDuringCheckinUuid: "123e4567-fd09-4ff9-ba4d-2329b42ebb7b",
    regardingObjectUuid: "123e4567-0af8-4b3d-b965-2329b3b532eb",
    fulfilledByObjectUuid: "123e4567-f3b1-440f-9786-2329bef499fb",
    assignedToStaffUuids: [
      "123e4567-749c-4266-9e64-2329b54979db",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-7f41-4701-a203-2329bc7e21eb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |