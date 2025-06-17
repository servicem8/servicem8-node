# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-f7d5-41ab-acdb-22e47b81998b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-c494-4e4d-baa0-22e47775c4cb",
    status: "Quote",
    paymentDate: "2025-06-01 12:00:00",
    paymentActionedByUuid: "123e4567-43fb-49bf-aa11-22e471abd0db",
    categoryUuid: "123e4567-e12f-40c1-8b26-22e4789fd50b",
    invoiceSentStamp: "2025-06-01 12:00:00",
    queueUuid: "123e4567-aef5-44f9-91bd-22e47963c7eb",
    queueExpiryDate: "2025-06-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-ca47-4c6e-8b07-22e479aab6eb",
    quoteDate: "2025-06-01 12:00:00",
    quoteSentStamp: "2025-06-01 12:00:00",
    workOrderDate: "2025-06-01 12:00:00",
    uuid: "123e4567-9b8c-4f6d-a4a1-22e4711ff0bb",
    editDate: "2025-06-01 12:00:00",
    paymentProcessedStamp: "2025-06-01 12:00:00",
    paymentReceivedStamp: "2025-06-01 12:00:00",
    completionDate: "2025-06-01 12:00:00",
    completionActionedByUuid: "123e4567-1226-456a-ab87-22e4755be90b",
    unsuccessfulDate: "2025-06-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-06-01 12:00:00",
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

