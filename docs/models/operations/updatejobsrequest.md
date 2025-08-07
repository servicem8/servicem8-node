# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-f67c-4cec-b874-231841969d5b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-5fa2-4b5c-8437-231846e7c7eb",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-18ee-41a1-bca7-2318493cc57b",
    categoryUuid: "123e4567-7078-408a-a981-23184b730dab",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-280f-48d1-8c93-23184e2bed8b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-7ba8-4c7b-aee2-23184b120b8b",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-1a86-49a5-ae73-2318499e234b",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-0ec3-4703-9572-231848df6a0b",
    unsuccessfulDate: "2025-08-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `uuid`                                                     | *string*                                                   | :heavy_check_mark:                                         | UUID of the Job                                            |
| `job`                                                      | [components.JobInput](../../models/components/jobinput.md) | :heavy_check_mark:                                         | Job fields to update                                       |