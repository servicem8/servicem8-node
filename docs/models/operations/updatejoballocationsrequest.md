# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-205e-4d4e-9c8e-230fe4dd88cb",
    jobUuid: "123e4567-6d6b-477a-b7cd-230fe83a814b",
    queueUuid: "123e4567-24de-4906-893e-230febaac39b",
    staffUuid: "123e4567-41e3-4829-bded-230febff3ecb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-e154-4e31-bec7-230fe6d8d53b",
    allocatedByStaffUuid: "123e4567-33c0-4c19-b185-230fef75bbeb",
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