# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-51c4-45a2-a585-22fb233a3b6b",
    jobUuid: "123e4567-9ec5-4378-a134-22fb2852bffb",
    queueUuid: "123e4567-a330-4f09-ab94-22fb28e4996b",
    staffUuid: "123e4567-0bb6-4094-a0ce-22fb2648eebb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-6045-4cdd-a8ef-22fb2a08bdcb",
    allocatedByStaffUuid: "123e4567-c3d4-4028-bc0f-22fb2cd76a0b",
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