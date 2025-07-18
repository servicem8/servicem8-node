# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-5210-408e-9537-2302fcd0801b",
    jobUuid: "123e4567-43d2-4326-8539-2302f1f0a0eb",
    queueUuid: "123e4567-a4e5-4f8e-a755-2302fd04ee3b",
    staffUuid: "123e4567-5983-4f61-ae2f-2302f1cafbcb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-af94-44ab-a91e-2302fca87e6b",
    allocatedByStaffUuid: "123e4567-b3d4-4d16-86b7-2302f7243a8b",
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