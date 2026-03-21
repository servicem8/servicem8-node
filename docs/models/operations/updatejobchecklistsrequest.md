# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-f6f8-442c-855c-23f9441d6deb",
    jobUuid: "123e4567-b762-456b-82d3-23f94e60c49b",
    completedTimestamp: "2026-03-01 12:00:00",
    completedByStaffUuid: "123e4567-62bb-4adb-b51b-23f94f4af34b",
    completedDuringCheckinUuid: "123e4567-63bf-4a2b-8484-23f94ad7edfb",
    regardingObjectUuid: "123e4567-b215-40b6-a7a7-23f9459bba4b",
    fulfilledByObjectUuid: "123e4567-669e-403f-bbaf-23f9480ddffb",
    assignedToStaffUuids: [
      "123e4567-311d-4c6b-bd47-23f948a9ab4b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |