# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-b55c-490a-92a6-231fe807043b",
    jobUuid: "123e4567-b316-4ff9-b147-231fe6a07d4b",
    queueUuid: "123e4567-1bc1-417c-b8f3-231fe996165b",
    staffUuid: "123e4567-9617-47f4-b74a-231fe18c987b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-8d7a-4ad6-ad43-231fe307f21b",
    allocatedByStaffUuid: "123e4567-a453-4427-a4ea-231fecea101b",
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