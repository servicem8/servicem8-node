# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-f509-4dbf-bcc5-22bdc34a87cb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-db0e-4da6-91a5-22bdcd5a07eb",
    status: "Quote",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-b118-4fc8-9cb3-22bdca61857b",
    categoryUuid: "123e4567-c7ac-4e4c-b93a-22bdce70db2b",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-2fb7-4685-8e93-22bdcfb57ceb",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-3e55-4df7-b18d-22bdc684904b",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-0927-460d-a12a-22bdcfb83edb",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-6ebe-4209-8425-22bdc405aa7b",
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