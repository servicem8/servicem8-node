# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-dd6e-4378-aae7-231feefcb05b",
    jobUuid: "123e4567-67d5-43b4-9cea-231fe8b2651b",
    queueUuid: "123e4567-445f-4599-bc77-231fe488609b",
    staffUuid: "123e4567-de7b-4199-920d-231feb6023bb",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-a4e5-4032-b624-231fecfb4e9b",
    allocatedByStaffUuid: "123e4567-3d7c-4940-a3f7-231feb0441db",
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