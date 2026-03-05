# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-a403-416e-a206-23e93da4854b",
    jobUuid: "123e4567-475c-4936-834f-23e93d7122fb",
    completedTimestamp: "2026-03-01 12:00:00",
    completedByStaffUuid: "123e4567-0fd6-4f0d-9ef5-23e930f5328b",
    completedDuringCheckinUuid: "123e4567-d280-4a04-8cf1-23e93c882adb",
    regardingObjectUuid: "123e4567-8491-4b90-a64e-23e9325120fb",
    fulfilledByObjectUuid: "123e4567-e744-45d1-8ee7-23e93fe973bb",
    assignedToStaffUuids: [
      "123e4567-fe14-4dc3-b778-23e937ddd5db",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |