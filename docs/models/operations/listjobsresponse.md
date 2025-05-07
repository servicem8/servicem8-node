# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-6506-480d-ac54-22bb0129006b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-71c7-440f-9019-22bb014bcfeb",
    status: "Completed",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-5265-4a83-8283-22bb0368563b",
    categoryUuid: "123e4567-e885-4554-b3ef-22bb0e9589db",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-587e-41a2-867a-22bb04a25f5b",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-4dba-4941-8c02-22bb0a6c97cb",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-08dd-4c23-9d01-22bb002a7e5b",
    editDate: "2025-05-01 12:00:00",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-9966-454d-8791-22bb030a754b",
    unsuccessfulDate: "2025-05-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-05-01 12:00:00",
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

