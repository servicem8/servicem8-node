# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-901c-4f2c-bd0b-230b7938d3db",
    jobUuid: "123e4567-32ec-4fbc-bc34-230b77882feb",
    queueUuid: "123e4567-6e88-4297-a92d-230b7169d10b",
    staffUuid: "123e4567-9891-41ca-88a3-230b7b97dbab",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-555b-4d15-bec0-230b7fdf3a4b",
    allocatedByStaffUuid: "123e4567-fccf-4056-9764-230b748f542b",
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