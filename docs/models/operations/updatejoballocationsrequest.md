# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-740c-4fa5-bf5e-23f94609a4bb",
    staffUuid: "123e4567-a785-42a0-a73f-23f948f854fb",
    allocationDate: "2026-03-01 12:00:00",
    allocationWindowUuid: "123e4567-6550-4c79-a464-23f946c4a94b",
    allocatedByStaffUuid: "123e4567-97e7-40aa-94e3-23f94ca2c33b",
    allocatedTimestamp: "2026-03-01 12:00:00",
    expiryTimestamp: "2026-03-01 12:00:00",
    readTimestamp: "2026-03-01 12:00:00",
    completionTimestamp: "2026-03-01 12:00:00",
    uuid: "123e4567-2d60-4e31-9315-23f94dd3f31b",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |