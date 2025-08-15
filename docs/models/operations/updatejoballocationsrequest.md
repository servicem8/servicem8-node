# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-f2c8-468b-b9d1-2320ae4ae82b",
    jobUuid: "123e4567-6564-4a57-85f7-2320a06ca4bb",
    queueUuid: "123e4567-f35d-4dd4-acf4-2320a1662bdb",
    staffUuid: "123e4567-8380-4a7a-b324-2320acf2709b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-6227-4e2b-a2fd-2320a4e8bc5b",
    allocatedByStaffUuid: "123e4567-f951-4540-9f31-2320a8c98f8b",
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