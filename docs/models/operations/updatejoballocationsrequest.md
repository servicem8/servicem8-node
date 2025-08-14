# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-a4b2-472d-a123-231fe640755b",
    jobUuid: "123e4567-67a3-41e0-8643-231fe9edfb0b",
    queueUuid: "123e4567-502e-4a9a-89e9-231fe3423ddb",
    staffUuid: "123e4567-0982-463c-a12e-231feadd72ab",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-e0a6-4e63-84e3-231fe31716bb",
    allocatedByStaffUuid: "123e4567-87bf-4114-ab63-231fe4cca40b",
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