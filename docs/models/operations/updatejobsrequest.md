# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-e583-4317-9e7f-23c6f8ea30db",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-8b0a-4bb2-99fe-23c6f43fe25b",
    status: "Quote",
    paymentDate: "2026-01-01 12:00:00",
    paymentActionedByUuid: "123e4567-f9bc-42f5-92d1-23c6f8a2907b",
    categoryUuid: "123e4567-3139-4cd1-a745-23c6f104500b",
    queueUuid: "123e4567-6d88-4b78-9c58-23c6f931fa5b",
    queueExpiryDate: "2026-01-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-bfa3-40b5-900c-23c6fb48431b",
    quoteDate: "2026-01-01 12:00:00",
    workOrderDate: "2026-01-01 12:00:00",
    uuid: "123e4567-bb4b-441d-a0ab-23c6fcd4d80b",
    completionDate: "2026-01-01 12:00:00",
    unsuccessfulDate: "2026-01-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Job                                              |
| `jobCreate`                                                  | [components.JobCreate](../../models/components/jobcreate.md) | :heavy_check_mark:                                           | Job fields to update                                         |