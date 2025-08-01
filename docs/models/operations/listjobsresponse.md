# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-32fb-4fb9-8869-23126451971b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-f46e-402f-ab40-2312626e0ecb",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-30ac-4088-949b-23126989242b",
    categoryUuid: "123e4567-9f84-4ab5-9d7b-23126ef92f8b",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-b023-4d8c-8d49-23126eec375b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-5a26-47ee-8af3-231266a29bcb",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-05d7-4b24-858e-2312610150ab",
    editDate: "2025-08-01 12:00:00",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-6571-4fda-acde-2312610bb13b",
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

