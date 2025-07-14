# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-7329-4a9f-959f-2300424b055b",
    jobUuid: "123e4567-1a5d-4f2f-a0c3-230043790c4b",
    queueUuid: "123e4567-cdce-4fd7-be5b-23004f3f99bb",
    staffUuid: "123e4567-d989-4b53-806c-2300423aaf3b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-5054-485d-85fe-230047ab5ddb",
    allocatedByStaffUuid: "123e4567-6a40-481d-9fd6-23004c3ef0fb",
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