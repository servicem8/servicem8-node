# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-3ab4-4291-956a-22b70c55ceab",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-6fa2-4fb2-b685-22b70979d05b",
    status: "Quote",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-9016-461c-bdb7-22b70af05afb",
    categoryUuid: "123e4567-68c3-4616-ae1d-22b704b451bb",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-7ab9-4fa8-a124-22b70cce1c8b",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-2f02-4ef7-9e55-22b700d8a83b",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-1a81-47bb-8c3b-22b70f001feb",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-039f-4e46-b842-22b70e74f86b",
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