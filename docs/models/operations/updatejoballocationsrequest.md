# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-62e2-43db-8db6-23110311bb0b",
    jobUuid: "123e4567-eceb-4d55-9b35-2311063f24cb",
    queueUuid: "123e4567-4ce7-48b0-9870-23110534382b",
    staffUuid: "123e4567-110f-455a-83ec-231109fe739b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-a269-45cd-882b-23110a604d8b",
    allocatedByStaffUuid: "123e4567-53cd-4320-a8f4-23110007d92b",
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