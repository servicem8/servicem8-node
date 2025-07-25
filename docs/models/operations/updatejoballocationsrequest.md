# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-d3b4-4bd9-b867-230a693878eb",
    jobUuid: "123e4567-8ad3-42eb-8e32-230a6bd6079b",
    queueUuid: "123e4567-a65c-49df-94ae-230a66f2695b",
    staffUuid: "123e4567-e2e0-4ba2-bc86-230a644a435b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-14a6-40e7-bc5c-230a6a0d02fb",
    allocatedByStaffUuid: "123e4567-3411-486e-a20e-230a67e2a75b",
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