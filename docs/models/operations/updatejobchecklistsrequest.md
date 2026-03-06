# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-c640-41f1-8c11-23eb2e19901b",
    jobUuid: "123e4567-7249-4afb-846b-23eb2eafde0b",
    completedTimestamp: "2026-03-01 12:00:00",
    completedByStaffUuid: "123e4567-56a6-4d1a-b619-23eb2c41119b",
    completedDuringCheckinUuid: "123e4567-f59f-4efc-96d7-23eb2954baeb",
    regardingObjectUuid: "123e4567-8b27-4873-979d-23eb2e104b4b",
    fulfilledByObjectUuid: "123e4567-4578-4e4f-8871-23eb2aec87eb",
    assignedToStaffUuids: [
      "123e4567-af06-4da5-a5b5-23eb2f796c2b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |