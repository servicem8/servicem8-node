# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-3b58-4fa5-a403-233c66923ceb",
    jobUuid: "123e4567-736e-4c45-a91a-233c6db608ab",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-50ac-42b6-b5cb-233c6af0c51b",
    completedDuringCheckinUuid: "123e4567-aeb8-4ee6-b902-233c6175d0db",
    regardingObjectUuid: "123e4567-3e80-4090-8b87-233c6b69398b",
    fulfilledByObjectUuid: "123e4567-ed0d-43e5-8ab2-233c6111c06b",
    assignedToStaffUuids: [
      "123e4567-5f30-4071-8272-233c6a1f22bb",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |