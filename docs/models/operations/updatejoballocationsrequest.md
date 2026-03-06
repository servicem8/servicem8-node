# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-12a0-4bac-9f0d-23eb213c08eb",
    staffUuid: "123e4567-17fd-40e0-aeeb-23eb2637bb9b",
    allocationDate: "2026-03-01 12:00:00",
    allocationWindowUuid: "123e4567-5b3a-4363-acb9-23eb298d321b",
    allocatedByStaffUuid: "123e4567-0631-4aca-b133-23eb2a2e51eb",
    allocatedTimestamp: "2026-03-01 12:00:00",
    expiryTimestamp: "2026-03-01 12:00:00",
    readTimestamp: "2026-03-01 12:00:00",
    completionTimestamp: "2026-03-01 12:00:00",
    uuid: "123e4567-e52d-4ca0-ae32-23eb23e16feb",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |