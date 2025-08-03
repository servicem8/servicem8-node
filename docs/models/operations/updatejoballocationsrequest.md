# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-dc8a-45e0-80d6-2313f156bc9b",
    jobUuid: "123e4567-c2f7-4bae-a2d0-2313ffc1350b",
    queueUuid: "123e4567-3f20-480b-b3e8-2313f459c6eb",
    staffUuid: "123e4567-2026-412a-94c5-2313f9fc04cb",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-3301-475b-ae9a-2313fc68142b",
    allocatedByStaffUuid: "123e4567-f27b-4744-809b-2313f41eabfb",
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