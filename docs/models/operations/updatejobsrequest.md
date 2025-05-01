# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-0839-4584-8479-22b6cf2c458b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-6088-4b00-801a-22b6cbfae61b",
    status: "Quote",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-acbc-4d35-b95d-22b6cfe1516b",
    categoryUuid: "123e4567-db4a-4077-9e25-22b6c1bc07ab",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-41d2-4e4b-a59b-22b6c0bdbd3b",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-9ab5-4e7e-8a7d-22b6c7d09dbb",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-0db4-47b3-a86a-22b6c444451b",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-69fe-4150-9243-22b6c8ed273b",
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