# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-0839-4584-8479-22b6cf2c458b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-6088-4b00-801a-22b6cbfae61b",
    status: "Completed",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-acbc-4d35-b95d-22b6cfe1516b",
    categoryUuid: "123e4567-db4a-4077-9e25-22b6c1bc07ab",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-41d2-4e4b-a59b-22b6c0bdbd3b",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-9ab5-4e7e-8a7d-22b6c7d09dbb",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-0db4-47b3-a86a-22b6c444451b",
    editDate: "2025-05-01 12:00:00",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-69fe-4150-9243-22b6c8ed273b",
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

