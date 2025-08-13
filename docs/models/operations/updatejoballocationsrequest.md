# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-391b-4f2c-af7a-231ef8f16e5b",
    jobUuid: "123e4567-8781-4539-b4da-231ef7765e6b",
    queueUuid: "123e4567-c14b-4d53-963d-231efc5ca88b",
    staffUuid: "123e4567-a711-4e98-892e-231efccd227b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-3f9b-48ce-8957-231ef98ceb5b",
    allocatedByStaffUuid: "123e4567-1197-431b-a451-231efb5d177b",
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