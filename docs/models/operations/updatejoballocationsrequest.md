# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-60e9-420e-8698-23eb24b9194b",
    staffUuid: "123e4567-5bca-40f8-a198-23eb2f199b2b",
    allocationDate: "2026-03-01 12:00:00",
    allocationWindowUuid: "123e4567-d05f-42f5-a718-23eb2658888b",
    allocatedByStaffUuid: "123e4567-e1a4-4336-a7f2-23eb257472fb",
    allocatedTimestamp: "2026-03-01 12:00:00",
    expiryTimestamp: "2026-03-01 12:00:00",
    readTimestamp: "2026-03-01 12:00:00",
    completionTimestamp: "2026-03-01 12:00:00",
    uuid: "123e4567-3dbf-43ee-aa8e-23eb2010cfbb",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |