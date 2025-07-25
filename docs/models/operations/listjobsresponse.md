# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-179a-4c7e-bc8a-230a648b75cb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-a4a9-46cd-b06f-230a6aa0f20b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-b9de-4873-9de7-230a6554922b",
    categoryUuid: "123e4567-f1bb-427a-a2c3-230a6f760e1b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-b2f6-4ac9-906a-230a690b19eb",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-5fac-4941-93b1-230a627756ab",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-1576-449f-8e35-230a6546f14b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-8381-4b30-808c-230a62afedbb",
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

