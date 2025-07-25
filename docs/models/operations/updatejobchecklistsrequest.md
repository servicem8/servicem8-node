# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-eb50-42a8-a043-230a67d8c30b",
    jobUuid: "123e4567-1f3c-418e-a6f9-230a6687c49b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-98a9-4fdf-92a7-230a6974a01b",
    completedDuringCheckinUuid: "123e4567-fe58-4856-94d0-230a63e008ab",
    regardingObjectUuid: "123e4567-9707-4231-be91-230a68cb942b",
    fulfilledByObjectUuid: "123e4567-c9d0-41d3-adf6-230a6bc43a1b",
    assignedToStaffUuids: [
      "123e4567-2b0f-45aa-91c7-230a6a0d089b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-7761-4ee8-aef1-230a606d7a9b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |