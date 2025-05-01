# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-66c7-4a42-9b56-22b6c0f8213b",
    jobUuid: "123e4567-66bd-44f9-8145-22b6c541264b",
    queueUuid: "123e4567-7403-4c3e-8d45-22b6c4d12d0b",
    staffUuid: "123e4567-402a-4849-8cfe-22b6cb50f34b",
    allocationDate: "2025-05-01 12:00:00",
    allocationWindowUuid: "123e4567-a055-413d-aa91-22b6cb8cd56b",
    allocatedByStaffUuid: "123e4567-6ae5-4594-96bb-22b6cf1124eb",
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