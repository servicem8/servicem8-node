# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-8af4-4655-838b-231ef6a8783b",
    jobUuid: "123e4567-236b-49d0-b2ba-231ef059038b",
    queueUuid: "123e4567-f552-4c92-b6cd-231ef5b5910b",
    staffUuid: "123e4567-42aa-467b-9f0b-231ef1b9df0b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-a11e-48f0-ba81-231ef7ea046b",
    allocatedByStaffUuid: "123e4567-ad6c-421e-bf2f-231ef19dfa6b",
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