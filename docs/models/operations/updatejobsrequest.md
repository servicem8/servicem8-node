# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-5bfa-41ac-b653-23312c6bc37b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-6f60-4fc4-a227-23312edc412b",
    status: "Quote",
    paymentDate: "2025-09-01 12:00:00",
    paymentActionedByUuid: "123e4567-fb76-4365-b94c-2331211c577b",
    categoryUuid: "123e4567-eaa2-4f99-aa8b-23312ccd1d7b",
    invoiceSentStamp: "2025-09-01 12:00:00",
    queueUuid: "123e4567-f2a9-4730-b852-23312e32f5cb",
    queueExpiryDate: "2025-09-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-08fc-4344-a5c7-2331255607cb",
    quoteDate: "2025-09-01 12:00:00",
    quoteSentStamp: "2025-09-01 12:00:00",
    workOrderDate: "2025-09-01 12:00:00",
    uuid: "123e4567-a815-401e-9beb-233121259e7b",
    paymentProcessedStamp: "2025-09-01 12:00:00",
    paymentReceivedStamp: "2025-09-01 12:00:00",
    completionDate: "2025-09-01 12:00:00",
    completionActionedByUuid: "123e4567-ca6a-4986-9492-2331206b8c7b",
    unsuccessfulDate: "2025-09-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `uuid`                                                     | *string*                                                   | :heavy_check_mark:                                         | UUID of the Job                                            |
| `job`                                                      | [components.JobInput](../../models/components/jobinput.md) | :heavy_check_mark:                                         | Job fields to update                                       |