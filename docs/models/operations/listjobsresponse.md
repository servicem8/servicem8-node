# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-4c65-438f-b918-230a6c12665b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-6b6c-4813-9f5f-230a6edffe9b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-0d43-471c-909d-230a63fc646b",
    categoryUuid: "123e4567-470d-4b73-a872-230a67166e1b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-f31a-443e-ad1f-230a661aed8b",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-4618-43ba-b53a-230a6895410b",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-82a3-4a29-b50a-230a6b68279b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-f54e-477e-894b-230a6c11807b",
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

