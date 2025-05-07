# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-6fd3-41e6-810c-22bcb9a2467b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-54a3-4050-a242-22bcbe3fb21b",
    status: "Quote",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-9541-4480-8fb8-22bcbd0eb50b",
    categoryUuid: "123e4567-1d75-4a9b-82f3-22bcb244e32b",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-9c97-48da-91f1-22bcb9cc2bfb",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-8e3f-407f-9f60-22bcbea2f81b",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-5291-471c-b8e5-22bcba23829b",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-3aa4-4243-a753-22bcb41fa3bb",
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