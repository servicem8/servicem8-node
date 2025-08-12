# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-08ca-4789-93a3-231cf01e747b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-8b9e-4337-ae8f-231cf764c6ab",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-989d-49d2-a14a-231cf1b08d0b",
    categoryUuid: "123e4567-9a01-43af-a500-231cfcf8bc4b",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-4e3e-4abb-babd-231cfe321b3b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-c31b-418a-a45e-231cf7da32eb",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-7282-4f09-bb7f-231cf87b629b",
    editDate: "2025-08-01 12:00:00",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-4d38-438d-a4ff-231cf3f4074b",
    unsuccessfulDate: "2025-08-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-08-01 12:00:00",
  },
];
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

