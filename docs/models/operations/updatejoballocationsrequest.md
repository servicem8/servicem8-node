# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-bad0-483a-a051-2308e02131fb",
    jobUuid: "123e4567-e091-4b52-aede-2308e1cc05db",
    queueUuid: "123e4567-fd16-41dd-ab90-2308e5a87adb",
    staffUuid: "123e4567-0437-4a0b-8206-2308ee3e935b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-4094-4da8-a163-2308efe48c3b",
    allocatedByStaffUuid: "123e4567-9b1f-46db-892a-2308e001ac4b",
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