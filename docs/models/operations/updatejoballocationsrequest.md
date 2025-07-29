# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-ada3-4826-9e93-230fe287e58b",
    jobUuid: "123e4567-f7ce-4af4-b139-230fe2c16f4b",
    queueUuid: "123e4567-e232-413b-a159-230fe281098b",
    staffUuid: "123e4567-bd37-4c23-be2a-230fefa81ccb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-e1be-414b-8c19-230fe736d52b",
    allocatedByStaffUuid: "123e4567-06af-4be2-8621-230fe2981abb",
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