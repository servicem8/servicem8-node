# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-2ad6-4a37-bbd0-233c652c64db",
    staffUuid: "123e4567-4d58-43f3-a621-233c656d4ffb",
    allocationDate: "2025-09-01 12:00:00",
    allocationWindowUuid: "123e4567-e2c8-49ff-bb1c-233c6b4406cb",
    allocatedByStaffUuid: "123e4567-27c9-4e41-a56a-233c697db4eb",
    allocatedTimestamp: "2025-09-01 12:00:00",
    expiryTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    completionTimestamp: "2025-09-01 12:00:00",
    uuid: "123e4567-3038-4e48-950a-233c666b64bb",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |