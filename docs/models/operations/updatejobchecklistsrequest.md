# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-8901-4545-b557-2348270e1c7b",
    jobUuid: "123e4567-4a4f-47fb-90a1-23482287a90b",
    completedTimestamp: "2025-09-01 12:00:00",
    completedByStaffUuid: "123e4567-2a3c-4019-847f-23482cf8506b",
    completedDuringCheckinUuid: "123e4567-d90b-4953-abbb-23482e96257b",
    regardingObjectUuid: "123e4567-f85a-49bc-aa19-23482012249b",
    fulfilledByObjectUuid: "123e4567-ccf8-4c75-9da8-2348286ccc6b",
    assignedToStaffUuids: [
      "123e4567-5c44-4d55-a2cc-23482810e62b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |