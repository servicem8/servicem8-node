# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-099a-4d20-bb91-22fc07a8b35b",
    jobUuid: "123e4567-29d7-4b33-ad29-22fc03391d5b",
    queueUuid: "123e4567-4979-47e3-9ce2-22fc062eb51b",
    staffUuid: "123e4567-6eba-4bf2-8cd9-22fc0cfb094b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-6c0a-4d41-bbbb-22fc0d52130b",
    allocatedByStaffUuid: "123e4567-8151-47ea-b1ff-22fc0eb361ab",
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