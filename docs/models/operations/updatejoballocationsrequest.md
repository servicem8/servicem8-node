# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-a6b3-4cbf-9af1-22b6ceb8259b",
    jobUuid: "123e4567-099e-4a58-bac3-22b6c4a7579b",
    queueUuid: "123e4567-7a8d-4f7e-b611-22b6c93a962b",
    staffUuid: "123e4567-932a-48da-9246-22b6ca35cf1b",
    allocationDate: "2025-05-01 12:00:00",
    allocationWindowUuid: "123e4567-7047-4117-8453-22b6cbf9e79b",
    allocatedByStaffUuid: "123e4567-46db-4448-9775-22b6cc0a634b",
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