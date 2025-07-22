# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-c126-4c22-a133-2308ef9f6e9b",
    jobUuid: "123e4567-e87f-44f6-970c-2308e664f02b",
    queueUuid: "123e4567-3851-4e86-9d60-2308e1620e0b",
    staffUuid: "123e4567-8b22-4453-9889-2308ee810e7b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-1b86-44c9-b810-2308e799bf1b",
    allocatedByStaffUuid: "123e4567-0067-45dd-a3d6-2308ec0a8cab",
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