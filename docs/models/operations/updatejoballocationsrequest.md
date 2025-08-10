# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-2205-4a05-8980-23184693df9b",
    jobUuid: "123e4567-ee46-4d28-8f9d-231849c8c11b",
    queueUuid: "123e4567-7b1f-4245-9c32-231845b10e4b",
    staffUuid: "123e4567-46ec-40a2-bf8d-23184f87cc0b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-dbfa-48d0-bc0e-231842ca1ffb",
    allocatedByStaffUuid: "123e4567-3f08-48dd-8203-23184a4c213b",
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