# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  job: {
    uuid: "123e4567-8cff-4c3a-8bde-22b4d691c6ab",
    createdByStaffUuid: "123e4567-f0f0-457f-a537-22b4d9f498fb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-aa9e-464d-9326-22b4de3d759b",
    status: "<value>",
    paymentDate: "YYYY-MM-DD HH:MM:SS",
    paymentActionedByUuid: "123e4567-e6aa-4ea9-808f-22b4dcfd243b",
    categoryUuid: "123e4567-aa72-4560-af19-22b4d8abc3db",
    invoiceSentStamp: "YYYY-MM-DD HH:MM:SS",
    readyToInvoiceStamp: "YYYY-MM-DD HH:MM:SS",
    paymentProcessedStamp: "YYYY-MM-DD HH:MM:SS",
    queueUuid: "123e4567-7024-4d50-ba86-22b4d72fb96b",
    queueExpiryDate: "YYYY-MM-DD HH:MM:SS",
    queueAssignedStaffUuid: "123e4567-7eae-4433-884f-22b4dc4690db",
    paymentReceivedStamp: "YYYY-MM-DD HH:MM:SS",
    quoteDate: "YYYY-MM-DD HH:MM:SS",
    quoteSentStamp: "YYYY-MM-DD HH:MM:SS",
    workOrderDate: "YYYY-MM-DD HH:MM:SS",
    completionDate: "YYYY-MM-DD HH:MM:SS",
    completionActionedByUuid: "123e4567-bae3-4495-92a8-22b4d7e66dfb",
    unsuccessfulDate: "YYYY-MM-DD HH:MM:SS",
    jobIsScheduledUntilStamp: "YYYY-MM-DD HH:MM:SS",
    activeNetworkRequestUuid: "123e4567-fc23-410a-a2b5-22b4d48c796b",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `uuid`                                                     | *string*                                                   | :heavy_check_mark:                                         | UUID of the Job                                            |
| `job`                                                      | [components.JobInput](../../models/components/jobinput.md) | :heavy_check_mark:                                         | Job fields to update                                       |