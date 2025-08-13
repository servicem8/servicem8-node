# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-9584-4235-8890-231ef127f94b",
    jobUuid: "123e4567-de2e-42c6-900b-231ef65dc64b",
    queueUuid: "123e4567-6d6b-4396-b5e1-231effea8afb",
    staffUuid: "123e4567-a6f1-4198-9905-231efe66979b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-12a7-4e6c-8591-231ef2c33fdb",
    allocatedByStaffUuid: "123e4567-db03-4899-9c06-231ef4f5a41b",
    allocatedTimestamp: "2025-08-01 12:00:00",
    expiryTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    completionTimestamp: "2025-08-01 12:00:00",
    acceptanceTimestamp: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Allocation                                                     |
| `jobAllocation`                                                                | [components.JobAllocationInput](../../models/components/joballocationinput.md) | :heavy_check_mark:                                                             | Job Allocation fields to update                                                |