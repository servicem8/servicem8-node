# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-6e3d-47bb-bfdc-231fe37dd8bb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-99a5-459b-84af-231fe3c1c11b",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-949b-4f36-96d0-231fe060aacb",
    categoryUuid: "123e4567-2549-4c86-86a7-231fe1a3a9bb",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-a8b7-4552-b316-231fe249983b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-4574-4816-a1c3-231fedefbb1b",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-d773-48f0-ac26-231fe1edc5eb",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-7f85-48df-a414-231fe531965b",
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