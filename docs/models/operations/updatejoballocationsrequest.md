# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-1c73-4b8a-b9a6-23497ffcf6ab",
    staffUuid: "123e4567-f619-4ead-8719-234973ae91eb",
    allocationDate: "2025-09-01 12:00:00",
    allocationWindowUuid: "123e4567-4276-404e-9c10-234976627d7b",
    allocatedByStaffUuid: "123e4567-d212-48d5-a35c-2349749bbb3b",
    allocatedTimestamp: "2025-09-01 12:00:00",
    expiryTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    completionTimestamp: "2025-09-01 12:00:00",
    uuid: "123e4567-94c2-4555-9162-23497750d3fb",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |