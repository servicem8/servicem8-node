# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-4559-4323-8bf9-231cf9ca5e9b",
    jobUuid: "123e4567-31e9-43c7-9525-231cf1efabbb",
    queueUuid: "123e4567-669b-4c55-8c69-231cf70ed91b",
    staffUuid: "123e4567-2705-4078-b8cb-231cf484ff6b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-37b9-4674-857d-231cfa7261bb",
    allocatedByStaffUuid: "123e4567-01a5-4dc5-bde8-231cfb2e2c5b",
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