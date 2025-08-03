# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-2d31-4c06-abb0-2313f083650b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-ac68-417e-9132-2313f5745f9b",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-e955-4b0b-8f07-2313fbe2428b",
    categoryUuid: "123e4567-cb81-422a-abbb-2313f58f3bbb",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-25f9-4921-971c-2313f6e0f96b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-c536-4b45-a2b7-2313f118825b",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-39af-47d6-be37-2313f5a9048b",
    editDate: "2025-08-01 12:00:00",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-9f01-4006-b941-2313ffc20ecb",
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

