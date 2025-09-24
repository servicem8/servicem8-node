# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-9f25-459b-933d-234823fa8d5b",
    staffUuid: "123e4567-c980-4685-925e-23482da32ebb",
    allocationDate: "2025-09-01 12:00:00",
    allocationWindowUuid: "123e4567-184a-49f1-ac4a-234821b9cc3b",
    allocatedByStaffUuid: "123e4567-f464-4cf5-98f1-234821f3f22b",
    allocatedTimestamp: "2025-09-01 12:00:00",
    expiryTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    completionTimestamp: "2025-09-01 12:00:00",
    uuid: "123e4567-ffd7-40cb-9693-2348288b92eb",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |