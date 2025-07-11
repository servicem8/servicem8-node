# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-17ed-499e-b5cc-22fd8922cb5b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-9737-4bff-bead-22fd8f6ea44b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-5ce8-4ed9-8d01-22fd8715648b",
    categoryUuid: "123e4567-442a-41cd-8595-22fd8ce7341b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-d015-4766-9b61-22fd88eedb5b",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-ba50-40b3-afd9-22fd87c1ccab",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-9ddd-4a1f-a368-22fd8fb2797b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-b501-4400-be53-22fd83e6a36b",
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

