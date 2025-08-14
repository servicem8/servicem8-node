# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-4e11-406d-b738-231ef06f361b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-8d5c-4b83-a8c2-231efb9ea2cb",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-9872-4e75-9bf4-231ef69e2dfb",
    categoryUuid: "123e4567-a1f5-42e6-9598-231efbfae7db",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-18a8-4b12-8705-231efce0fd9b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-47cf-4846-9286-231ef192906b",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-1a18-4afa-9b95-231efed0eb1b",
    editDate: "2025-08-01 12:00:00",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-9577-413f-8505-231ef9c5a57b",
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

