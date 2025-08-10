# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-d518-405e-b205-231b273ee2ab",
    jobUuid: "123e4567-e9a5-4f57-9b2c-231b21d2b61b",
    queueUuid: "123e4567-2b70-4dfd-97be-231b2083d97b",
    staffUuid: "123e4567-2edf-4eea-963f-231b2ba6039b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-15a0-4e95-a20b-231b2fbff81b",
    allocatedByStaffUuid: "123e4567-fd2f-46cb-aafd-231b2a591b4b",
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