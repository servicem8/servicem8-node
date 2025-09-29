# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-1193-44d6-bef4-2349786942fb",
    jobUuid: "123e4567-24b0-4d49-a010-2349731d724b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-712f-472b-a8a9-23497e21b13b",
    completedDuringCheckinUuid: "123e4567-451a-484a-ae77-23497cbfc79b",
    regardingObjectUuid: "123e4567-95d3-4bb3-897b-234979bec08b",
    fulfilledByObjectUuid: "123e4567-9d2b-4654-a4d7-234978bc8ccb",
    assignedToStaffUuids: [
      "123e4567-1e93-4a76-a08c-2349731fa03b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |