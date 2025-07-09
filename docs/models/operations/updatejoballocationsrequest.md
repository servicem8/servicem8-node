# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-de83-4ab0-8423-22fb2695b81b",
    jobUuid: "123e4567-511a-4ef5-b2b3-22fb282a91cb",
    queueUuid: "123e4567-3cbd-4ac4-a643-22fb2d5ebc1b",
    staffUuid: "123e4567-c57e-4277-9dfe-22fb250cf71b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-6e9e-44c0-bc90-22fb287708bb",
    allocatedByStaffUuid: "123e4567-b9dd-4428-a830-22fb27a8fbbb",
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