# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-fed9-4a8f-be1f-230b7b61e87b",
    jobUuid: "123e4567-3069-4e99-a808-230b7316224b",
    queueUuid: "123e4567-e795-4bf6-8bb2-230b701d2f1b",
    staffUuid: "123e4567-9083-4dc0-b2e2-230b79d75b7b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-5c01-427a-9952-230b7b3a846b",
    allocatedByStaffUuid: "123e4567-190b-45cf-8c5c-230b7bd9eecb",
    allocatedTimestamp: "2025-07-01 12:00:00",
    expiryTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    completionTimestamp: "2025-07-01 12:00:00",
    acceptanceTimestamp: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Allocation                                                     |
| `jobAllocation`                                                                | [components.JobAllocationInput](../../models/components/joballocationinput.md) | :heavy_check_mark:                                                             | Job Allocation fields to update                                                |