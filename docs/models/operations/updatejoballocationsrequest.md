# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-17ac-4a20-a2e7-2308efbdf13b",
    jobUuid: "123e4567-2dff-4d46-9b06-2308e293173b",
    queueUuid: "123e4567-3627-4751-9142-2308eec26e1b",
    staffUuid: "123e4567-2519-4a66-84e1-2308ea5a32ab",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-8441-4e9d-bf70-2308e6ced71b",
    allocatedByStaffUuid: "123e4567-1cb5-49dd-a8d0-2308e77dc39b",
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