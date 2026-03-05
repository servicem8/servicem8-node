# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-40b5-4df1-9654-23e9331512bb",
    staffUuid: "123e4567-c9b7-4da2-8cb9-23e931e7dabb",
    allocationDate: "2026-03-01 12:00:00",
    allocationWindowUuid: "123e4567-98bf-46a3-9900-23e931a38cab",
    allocatedByStaffUuid: "123e4567-30ec-4b8e-bf47-23e93be68bdb",
    allocatedTimestamp: "2026-03-01 12:00:00",
    expiryTimestamp: "2026-03-01 12:00:00",
    readTimestamp: "2026-03-01 12:00:00",
    completionTimestamp: "2026-03-01 12:00:00",
    uuid: "123e4567-7487-4e53-bf93-23e933e779db",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |