# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-38a7-4a71-8f33-22b70c04d65b",
    jobUuid: "123e4567-df31-4ec8-9282-22b7097ac8fb",
    queueUuid: "123e4567-3e58-4f97-ab8f-22b705fd611b",
    staffUuid: "123e4567-7cd5-4c42-addd-22b705790f2b",
    allocationDate: "2025-05-01 12:00:00",
    allocationWindowUuid: "123e4567-f4c2-4306-9497-22b70ce6dd7b",
    allocatedByStaffUuid: "123e4567-81f7-4198-b9c3-22b7069e91ab",
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