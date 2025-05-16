# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-1c79-4fc1-9280-22bdc383a56b",
    jobUuid: "123e4567-0318-4bc3-a694-22bdc6ad56eb",
    queueUuid: "123e4567-87c5-4896-852f-22bdca0a0b4b",
    staffUuid: "123e4567-dc01-4aec-9427-22bdc6f0ec3b",
    allocationDate: "2025-05-01 12:00:00",
    allocationWindowUuid: "123e4567-7cf6-4767-8925-22bdc9e1742b",
    allocatedByStaffUuid: "123e4567-18f9-45ff-bc8f-22bdcdb91f8b",
    allocatedTimestamp: "2025-05-01 12:00:00",
    expiryTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    completionTimestamp: "2025-05-01 12:00:00",
    acceptanceTimestamp: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Allocation                                                     |
| `jobAllocation`                                                                | [components.JobAllocationInput](../../models/components/joballocationinput.md) | :heavy_check_mark:                                                             | Job Allocation fields to update                                                |