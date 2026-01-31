# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |