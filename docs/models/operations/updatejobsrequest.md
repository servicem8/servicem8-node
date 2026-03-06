# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-2fab-4317-86a3-23eb21745aab",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-1b11-4b1c-8625-23eb2f2886eb",
    status: "Quote",
    paymentDate: "2026-03-01 12:00:00",
    paymentActionedByUuid: "123e4567-f0e4-491c-a5af-23eb2704e08b",
    categoryUuid: "123e4567-a7be-4a8b-a3c0-23eb2cc2df6b",
    queueUuid: "123e4567-a3ae-488a-be6f-23eb24bcecbb",
    queueExpiryDate: "2026-03-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-031a-415d-b26a-23eb284b5a1b",
    quoteDate: "2026-03-01 12:00:00",
    workOrderDate: "2026-03-01 12:00:00",
    uuid: "123e4567-51f5-4133-87e9-23eb238cf82b",
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