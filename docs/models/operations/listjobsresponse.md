# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-f374-4e28-8493-231d26ac2b5b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-3857-41c5-ac4d-231d22a6a86b",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-010f-4ce2-86bf-231d2933795b",
    categoryUuid: "123e4567-5559-4c8a-b61a-231d28dcfe5b",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-09bd-4e35-bf9f-231d278e874b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-2829-4cba-8f9c-231d22f8bbfb",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-2a37-42c9-9e8d-231d2cc1aa6b",
    editDate: "2025-08-01 12:00:00",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-14eb-47a9-b3dd-231d25bb4a0b",
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

