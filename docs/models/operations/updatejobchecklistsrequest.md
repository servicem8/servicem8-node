# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-a09e-4635-bc56-234d5cbe826b",
    jobUuid: "123e4567-d461-49da-ba79-234d5e0de80b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-0220-4147-8b1c-234d5c6cc94b",
    completedDuringCheckinUuid: "123e4567-d12c-475f-ba1c-234d5c80068b",
    regardingObjectUuid: "123e4567-ceee-4aca-9985-234d5086fa0b",
    fulfilledByObjectUuid: "123e4567-ec13-486e-9922-234d5ad4efdb",
    assignedToStaffUuids: [
      "123e4567-ce1a-4e09-9e1b-234d5846da5b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |