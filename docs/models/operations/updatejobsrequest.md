# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-f1ae-4448-a9dd-230c46717d8b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-bd70-4453-bdd8-230c4e60049b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-039d-4840-bde1-230c49f409db",
    categoryUuid: "123e4567-7e68-4dee-bffa-230c4e400a4b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-ef23-4f2c-ac73-230c4c5ba6bb",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-0226-48d5-8b20-230c45b6bbcb",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-d807-4d0a-b7d7-230c48eda23b",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-baf1-4bf1-8440-230c48c6556b",
    unsuccessfulDate: "2025-07-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `uuid`                                                     | *string*                                                   | :heavy_check_mark:                                         | UUID of the Job                                            |
| `job`                                                      | [components.JobInput](../../models/components/jobinput.md) | :heavy_check_mark:                                         | Job fields to update                                       |