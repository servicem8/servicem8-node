# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-bded-4106-8a66-23eb22e395eb",
    jobUuid: "123e4567-9e56-404a-bd39-23eb23d55eeb",
    completedTimestamp: "2026-03-01 12:00:00",
    completedByStaffUuid: "123e4567-ab65-494c-816a-23eb2cd1a7cb",
    completedDuringCheckinUuid: "123e4567-0b27-4b88-8ac7-23eb2b8aaadb",
    regardingObjectUuid: "123e4567-6e64-480c-82dc-23eb2282fc8b",
    fulfilledByObjectUuid: "123e4567-55d8-4cab-879a-23eb2f54749b",
    assignedToStaffUuids: [
      "123e4567-c627-4259-83cb-23eb2202279b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |