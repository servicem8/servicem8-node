# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-1821-42b4-96c9-2329b8d1505b",
    jobUuid: "123e4567-5799-4bb4-85b1-2329befb431b",
    queueUuid: "123e4567-5f55-496a-abcd-2329ba5116bb",
    staffUuid: "123e4567-b51c-4c13-a9d5-2329b5b07bcb",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-c395-4744-b3f9-2329b9d10deb",
    allocatedByStaffUuid: "123e4567-8b9a-4a58-83e0-2329b4f49c2b",
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