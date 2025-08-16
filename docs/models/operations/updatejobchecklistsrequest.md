# UpdateJobChecklistsRequest

## Example Usage

```typescript
import { UpdateJobChecklistsRequest } from "servicem8/models/operations";

let value: UpdateJobChecklistsRequest = {
  uuid: "5e7f0491-d1f8-419b-aa52-18ad94c91066",
  jobChecklist: {
    uuid: "123e4567-9a10-4646-8aaa-2321783e855b",
    jobUuid: "123e4567-a8b0-4115-96a2-23217edb723b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-fbbb-45ba-bc7f-232179d792fb",
    completedDuringCheckinUuid: "123e4567-ea67-4066-8dbf-2321724a36cb",
    regardingObjectUuid: "123e4567-8900-40ee-8fe7-232178b8497b",
    fulfilledByObjectUuid: "123e4567-90f5-458c-a6ae-23217e475cab",
    assignedToStaffUuids: [
      "123e4567-8abd-4712-8241-23217ddbf95b",
    ],
    assignedTimestamp: "2025-08-01 12:00:00",
    assignedByStaffUuid: "123e4567-af50-4ab5-8697-23217fda32fb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Checklist                                                    |
| `jobChecklist`                                                               | [components.JobChecklistInput](../../models/components/jobchecklistinput.md) | :heavy_check_mark:                                                           | Job Checklist fields to update                                               |