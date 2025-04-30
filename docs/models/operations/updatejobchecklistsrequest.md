# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-a73c-4796-be6f-22b56ee2e18b",
    jobUuid: "123e4567-9363-4d5c-97f2-22b56e79af9b",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-330f-4a8a-96a9-22b564eb1ccb",
    completedDuringCheckinUuid: "123e4567-b558-4260-95cd-22b56dd661fb",
    regardingObjectUuid: "123e4567-e73b-4ed9-964a-22b56cf57e2b",
    fulfilledByObjectUuid: "123e4567-0741-4968-baa3-22b5638fcf7b",
    assignedToStaffUuids: [
      "123e4567-41a6-43fe-bb20-22b561ae7c9b",
    ],
    assignedTimestamp: "YYYY-MM-DD HH:MM:SS",
    assignedByStaffUuid: "123e4567-de6b-4ac8-9a59-22b565ab426b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |