# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-1ff6-43c7-a21a-22bcb9fd543b",
    jobUuid: "123e4567-4a47-47fa-9a16-22bcb4ee033b",
    queueUuid: "123e4567-1ada-4138-b674-22bcbca1cc2b",
    staffUuid: "123e4567-9052-476b-bc91-22bcbc01446b",
    allocationDate: "2025-05-01 12:00:00",
    allocationWindowUuid: "123e4567-385f-40a7-8a9a-22bcb5d7702b",
    allocatedByStaffUuid: "123e4567-46a1-47e1-bec3-22bcb1c6700b",
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