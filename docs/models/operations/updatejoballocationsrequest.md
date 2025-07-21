# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-c5b1-4176-ab83-2306f7cf5e1b",
    jobUuid: "123e4567-5a63-4e65-8b44-2306f08077fb",
    queueUuid: "123e4567-8553-42e1-b6d8-2306ff3cb63b",
    staffUuid: "123e4567-8da4-4d3e-bd7e-2306f0b1ebbb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-615e-4da0-880e-2306f42460eb",
    allocatedByStaffUuid: "123e4567-0259-47cd-989b-2306f1dc9c8b",
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