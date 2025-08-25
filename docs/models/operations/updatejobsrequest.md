# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-112d-493c-8e86-2329b97c2cbb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-b7b6-49ff-ad51-2329b561f55b",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-a51f-4a39-8bd6-2329b4cbb36b",
    categoryUuid: "123e4567-157a-4633-aa01-2329bcfe936b",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-c023-4f9b-ac5d-2329b5a96d8b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-8763-44e4-b40b-2329b699b8ab",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-90a9-43c5-8676-2329b648021b",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-fc4e-42d1-aa87-2329b8d4a80b",
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