# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-4a09-4513-8d9b-230b7d7ce2ab",
    jobUuid: "123e4567-108a-4410-9f0a-230b7fb809cb",
    queueUuid: "123e4567-6180-43a7-8d9b-230b7cd6a63b",
    staffUuid: "123e4567-8bdf-4b2e-80d4-230b7c9fd30b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-5f9a-454b-b35f-230b7aaf3e8b",
    allocatedByStaffUuid: "123e4567-ac7a-489c-9ccd-230b74f6a5cb",
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