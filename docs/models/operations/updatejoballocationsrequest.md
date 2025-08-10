# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-61c6-4cc5-b5f8-231b25c8d58b",
    jobUuid: "123e4567-b095-4b88-9bec-231b2e087dab",
    queueUuid: "123e4567-3b0d-48f0-aba9-231b22dde22b",
    staffUuid: "123e4567-ff2c-448d-aaac-231b277edbcb",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-9c82-4dfe-ad16-231b2dc81b8b",
    allocatedByStaffUuid: "123e4567-eef7-457f-8f4b-231b278c870b",
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