# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-4da3-49b2-a38b-230b7e53d0ab",
    jobUuid: "123e4567-69c3-4190-8761-230b7e8ea55b",
    queueUuid: "123e4567-6b28-4ac8-8105-230b7b57298b",
    staffUuid: "123e4567-b2d3-4275-9399-230b7c0df37b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-2298-48d8-9384-230b7fe2cc7b",
    allocatedByStaffUuid: "123e4567-8a5e-47bf-9b94-230b74d8e62b",
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