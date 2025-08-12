# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-e23f-4da0-b4e2-231d2701720b",
    jobUuid: "123e4567-78ea-4c48-a359-231d269e10cb",
    queueUuid: "123e4567-fe01-4a47-a873-231d2de3c6bb",
    staffUuid: "123e4567-74df-476f-8bfc-231d218586db",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-db36-472c-b03e-231d2fe2d5cb",
    allocatedByStaffUuid: "123e4567-b4ae-4504-8ea4-231d28c7b36b",
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