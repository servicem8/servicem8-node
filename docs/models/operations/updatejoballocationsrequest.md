# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-94ef-4dfc-97cc-231d2835307b",
    jobUuid: "123e4567-7138-4709-8c89-231d2294595b",
    queueUuid: "123e4567-c63d-48a7-bc49-231d2e27356b",
    staffUuid: "123e4567-c35a-413f-89b3-231d2e69ba6b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-449b-4a94-8165-231d211b602b",
    allocatedByStaffUuid: "123e4567-44f3-4d05-809c-231d28a7514b",
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