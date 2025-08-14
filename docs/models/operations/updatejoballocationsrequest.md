# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-ca97-44c1-97b8-231efb5598ab",
    jobUuid: "123e4567-02e2-47ef-b40e-231efbb85a1b",
    queueUuid: "123e4567-3b38-4f8f-9979-231efed268eb",
    staffUuid: "123e4567-5308-40ba-88de-231efa9f8f9b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-03ab-4ae7-9cfc-231ef37ef11b",
    allocatedByStaffUuid: "123e4567-7257-42b8-89fb-231efd798c0b",
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