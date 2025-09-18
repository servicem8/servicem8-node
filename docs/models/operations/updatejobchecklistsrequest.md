# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-329d-49ef-b818-23422bccbc0b",
    jobUuid: "123e4567-7ed2-4a64-b822-2342218c69cb",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-4a43-4055-82fe-23422ee3aa8b",
    completedDuringCheckinUuid: "123e4567-1183-41cd-9026-2342206e9c3b",
    regardingObjectUuid: "123e4567-624a-4f4c-8e99-234223981e5b",
    fulfilledByObjectUuid: "123e4567-208b-4a19-aa5b-234229e7763b",
    assignedToStaffUuids: [
      "123e4567-a7f5-4fa3-baac-23422532933b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |