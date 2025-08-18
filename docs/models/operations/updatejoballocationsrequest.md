# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-6e66-4eb8-ac54-23222452285b",
    jobUuid: "123e4567-d3c1-40ea-ac72-232222f7be2b",
    queueUuid: "123e4567-ee86-4a7d-89e2-23222d3e710b",
    staffUuid: "123e4567-05e0-400d-bb7d-23222bc5e7cb",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-911c-48e0-8e4e-23222508eb3b",
    allocatedByStaffUuid: "123e4567-8232-4e83-bbd9-232225c4830b",
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