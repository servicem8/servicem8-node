# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklistCreate: {
    uuid: "123e4567-a57c-4123-acee-23d59bb6e92b",
    jobUuid: "123e4567-094f-4e64-af3c-23d59122532b",
    completedTimestamp: "2026-02-01 12:00:00",
    completedByStaffUuid: "123e4567-7e9b-4e99-9f6b-23d5928802eb",
    completedDuringCheckinUuid: "123e4567-0673-4b0f-9758-23d59d54640b",
    regardingObjectUuid: "123e4567-40a4-4a42-a635-23d5963e451b",
    fulfilledByObjectUuid: "123e4567-8576-4630-b520-23d59b71eaab",
    assignedToStaffUuids: [
      "123e4567-33ee-4b09-8ddb-23d59327638b",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Checklist                                                      |
| `jobChecklistCreate`                                                           | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md) | :heavy_check_mark:                                                             | Job Checklist fields to update                                                 |