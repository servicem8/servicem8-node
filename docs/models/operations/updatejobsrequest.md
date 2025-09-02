# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    createdByStaffUuid: "123e4567-d2dc-4cda-92ab-2331247613ab",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-44bc-42f7-ba11-2331254a44cb",
    status: "Quote",
    paymentDate: "2025-09-01 12:00:00",
    paymentActionedByUuid: "123e4567-c35e-4123-89ab-233124b459bb",
    categoryUuid: "123e4567-b6f5-415e-b341-23312b8ed61b",
    invoiceSentStamp: "2025-09-01 12:00:00",
    queueUuid: "123e4567-228a-42a0-9504-23312894180b",
    queueExpiryDate: "2025-09-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-0d1c-4509-8cc7-233126bf422b",
    quoteDate: "2025-09-01 12:00:00",
    quoteSentStamp: "2025-09-01 12:00:00",
    workOrderDate: "2025-09-01 12:00:00",
    uuid: "123e4567-031c-4edb-8d44-233126314ccb",
    paymentProcessedStamp: "2025-09-01 12:00:00",
    paymentReceivedStamp: "2025-09-01 12:00:00",
    completionDate: "2025-09-01 12:00:00",
    completionActionedByUuid: "123e4567-7682-4513-b02f-233126a7b8fb",
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