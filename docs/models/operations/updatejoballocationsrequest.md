# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-b3d6-464b-ad2b-23482eb648fb",
    staffUuid: "123e4567-531a-45e8-9b26-23482037810b",
    allocationDate: "2025-09-01 12:00:00",
    allocationWindowUuid: "123e4567-662f-45ee-b4ee-23482143ad7b",
    allocatedByStaffUuid: "123e4567-6096-4405-b2ea-23482fad8e7b",
    allocatedTimestamp: "2025-09-01 12:00:00",
    expiryTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    completionTimestamp: "2025-09-01 12:00:00",
    uuid: "123e4567-a2c0-4206-9c5d-2348200e298b",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |