# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-2709-488a-af9b-231cfdb4164b",
    jobUuid: "123e4567-b60d-4fe7-ba29-231cfcccb95b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-cc9c-4c06-94a9-231cfaf7ab1b",
    completedDuringCheckinUuid: "123e4567-fa24-4301-aaf0-231cf826da3b",
    regardingObjectUuid: "123e4567-d749-4193-84eb-231cf003caeb",
    fulfilledByObjectUuid: "123e4567-418c-4e85-83e7-231cf14317fb",
    assignedToStaffUuids: [
      "123e4567-46c7-4e00-b71c-231cfe3a8f6b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-9acb-4378-bb64-231cff6863db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |