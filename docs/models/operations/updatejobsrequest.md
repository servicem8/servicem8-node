# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-f7ec-44f1-8f82-23f94fdc6cab",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-9fc3-4f4c-ae8c-23f94a2a432b",
    status: "Quote",
    paymentDate: "2026-03-01 12:00:00",
    paymentActionedByUuid: "123e4567-e130-4744-bf68-23f94937a7eb",
    categoryUuid: "123e4567-5651-43fe-a6f2-23f94a6f9c7b",
    queueUuid: "123e4567-e5cb-43ec-8a27-23f948619a1b",
    queueExpiryDate: "2026-03-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-3588-4466-8265-23f9431c9d3b",
    quoteDate: "2026-03-01 12:00:00",
    workOrderDate: "2026-03-01 12:00:00",
    uuid: "123e4567-8032-4212-ae45-23f94e9e212b",
    completionDate: "2026-03-01 12:00:00",
    unsuccessfulDate: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Job                                              |
| `jobCreate`                                                  | [components.JobCreate](../../models/components/jobcreate.md) | :heavy_check_mark:                                           | Job fields to update                                         |