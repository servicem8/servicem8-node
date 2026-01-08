# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocationCreate: {
    jobUuid: "123e4567-d328-4247-80bf-23b2eb4c399b",
    staffUuid: "123e4567-1e8c-41c8-8bd5-23b2e239f1eb",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-9e4f-4359-a661-23b2ee2a8e9b",
    allocatedByStaffUuid: "123e4567-adad-4d42-9fb7-23b2e7e89adb",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-91d7-4189-9f56-23b2e6ce815b",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Job Allocation                                                       |
| `jobAllocationCreate`                                                            | [components.JobAllocationCreate](../../models/components/joballocationcreate.md) | :heavy_check_mark:                                                               | Job Allocation fields to update                                                  |