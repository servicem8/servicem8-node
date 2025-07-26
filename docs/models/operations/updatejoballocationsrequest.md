# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-fac3-4597-957b-230c4ee6f68b",
    jobUuid: "123e4567-952f-4eee-945d-230c4b4b4e8b",
    queueUuid: "123e4567-289c-42e7-b4e6-230c4cc5f29b",
    staffUuid: "123e4567-d845-4878-a1fd-230c45975d2b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-6bc4-4fbb-936f-230c4ee92e9b",
    allocatedByStaffUuid: "123e4567-4322-4eed-82d0-230c4051adfb",
    allocatedTimestamp: "2025-07-01 12:00:00",
    expiryTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    completionTimestamp: "2025-07-01 12:00:00",
    acceptanceTimestamp: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Allocation                                                     |
| `jobAllocation`                                                                | [components.JobAllocationInput](../../models/components/joballocationinput.md) | :heavy_check_mark:                                                             | Job Allocation fields to update                                                |