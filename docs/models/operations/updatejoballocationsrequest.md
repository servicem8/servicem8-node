# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-d2a5-470f-bcfc-23312fbf0bdb",
    jobUuid: "123e4567-f430-4652-b867-23312f1283eb",
    queueUuid: "123e4567-c0eb-4e6c-a7d9-233127781a9b",
    staffUuid: "123e4567-4650-451a-a45c-23312ff968cb",
    allocationDate: "2025-09-01 12:00:00",
    allocationWindowUuid: "123e4567-be5c-42a2-b38b-2331247dbc9b",
    allocatedByStaffUuid: "123e4567-95b9-4424-8edb-23312fb871db",
    allocatedTimestamp: "2025-09-01 12:00:00",
    expiryTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    completionTimestamp: "2025-09-01 12:00:00",
    acceptanceTimestamp: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Allocation                                                     |
| `jobAllocation`                                                                | [components.JobAllocationInput](../../models/components/joballocationinput.md) | :heavy_check_mark:                                                             | Job Allocation fields to update                                                |