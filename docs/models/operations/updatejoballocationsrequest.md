# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-cb94-4d5b-90ca-23d5966d2f9b",
    staffUuid: "123e4567-c716-4b3e-a5e2-23d591cf013b",
    allocationDate: "2026-02-01 12:00:00",
    allocationWindowUuid: "123e4567-c2d2-4746-83ed-23d595d49b7b",
    allocatedByStaffUuid: "123e4567-5bc7-4b8c-a25e-23d59543910b",
    allocatedTimestamp: "2026-02-01 12:00:00",
    expiryTimestamp: "2026-02-01 12:00:00",
    readTimestamp: "2026-02-01 12:00:00",
    completionTimestamp: "2026-02-01 12:00:00",
    uuid: "123e4567-0440-4268-8f5b-23d59e45a20b",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |