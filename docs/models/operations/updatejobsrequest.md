# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-6506-480d-ac54-22bb0129006b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-71c7-440f-9019-22bb014bcfeb",
    status: "Quote",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-5265-4a83-8283-22bb0368563b",
    categoryUuid: "123e4567-e885-4554-b3ef-22bb0e9589db",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-587e-41a2-867a-22bb04a25f5b",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-4dba-4941-8c02-22bb0a6c97cb",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-08dd-4c23-9d01-22bb002a7e5b",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-9966-454d-8791-22bb030a754b",
    unsuccessfulDate: "2025-05-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `uuid`                                                     | *string*                                                   | :heavy_check_mark:                                         | UUID of the Job                                            |
| `job`                                                      | [components.JobInput](../../models/components/jobinput.md) | :heavy_check_mark:                                         | Job fields to update                                       |