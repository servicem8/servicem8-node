# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-ec27-45a7-8cbe-22fb2a75783b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-9d91-4750-8b8a-22fb2109320b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-6aa9-419c-94c9-22fb265191eb",
    categoryUuid: "123e4567-5b71-4f6e-911d-22fb2a0921fb",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-0c22-47da-bff5-22fb2bfe3b1b",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-3e9f-4356-99fc-22fb285af58b",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-e98b-448d-974a-22fb282f881b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-c0f0-4fb9-8f50-22fb297380cb",
    unsuccessfulDate: "2025-07-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-07-01 12:00:00",
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

