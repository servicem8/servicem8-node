# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-4f54-4a09-ac14-230ef62401bb",
    jobUuid: "123e4567-7a69-48e6-bfb4-230ef5fbe9cb",
    queueUuid: "123e4567-f504-46ce-bf21-230efbdcea7b",
    staffUuid: "123e4567-88af-4a4d-929a-230ef084febb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-889d-478a-a66a-230ef9612b5b",
    allocatedByStaffUuid: "123e4567-6eee-435f-a69d-230ef43a06cb",
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