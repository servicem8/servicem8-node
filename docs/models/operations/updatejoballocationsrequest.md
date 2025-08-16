# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-354a-462f-bfd5-232178a7997b",
    jobUuid: "123e4567-8434-45b8-8db8-23217e8888eb",
    queueUuid: "123e4567-6aa3-41fd-bc65-2321770ef06b",
    staffUuid: "123e4567-0238-4b69-aecd-23217a2b65cb",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-8f05-421e-a6ac-2321766ec48b",
    allocatedByStaffUuid: "123e4567-cda3-4ea0-b086-2321754a0f5b",
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