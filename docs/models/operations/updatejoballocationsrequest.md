# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-985c-4089-9ee8-22bcba0f79eb",
    jobUuid: "123e4567-f2c4-4c66-af25-22bcbb2361db",
    queueUuid: "123e4567-d23b-4382-90fc-22bcb1e8279b",
    staffUuid: "123e4567-02d0-4a33-b197-22bcbeb8b29b",
    allocationDate: "2025-05-01 12:00:00",
    allocationWindowUuid: "123e4567-f5a1-4284-b961-22bcba3f38cb",
    allocatedByStaffUuid: "123e4567-c942-4390-9def-22bcba617e5b",
    allocatedTimestamp: "2025-05-01 12:00:00",
    expiryTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    completionTimestamp: "2025-05-01 12:00:00",
    acceptanceTimestamp: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Allocation                                                     |
| `jobAllocation`                                                                | [components.JobAllocationInput](../../models/components/joballocationinput.md) | :heavy_check_mark:                                                             | Job Allocation fields to update                                                |