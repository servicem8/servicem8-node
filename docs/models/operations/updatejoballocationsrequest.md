# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-e0be-4323-b11e-230fefe27e3b",
    jobUuid: "123e4567-5566-43ea-9e1d-230fe0b61b0b",
    queueUuid: "123e4567-4450-4ec9-8104-230fee76150b",
    staffUuid: "123e4567-fbe6-4713-9027-230fe4ab63db",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-96e8-4d57-9b50-230fec19382b",
    allocatedByStaffUuid: "123e4567-9a42-4dd8-aa41-230fe6802cbb",
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