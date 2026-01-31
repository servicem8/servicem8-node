# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |