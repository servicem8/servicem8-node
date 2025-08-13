# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-4cb0-4111-864c-231d253c931b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-d151-45b2-8d07-231d23d0f86b",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-27f8-4b38-8dc9-231d2097da7b",
    categoryUuid: "123e4567-d95d-469e-8ea7-231d2a474c1b",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-28d3-41a8-990e-231d2eb1ea3b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-89a3-457f-aef5-231d2d6e39db",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-a493-4008-bf5b-231d2f799abb",
    editDate: "2025-08-01 12:00:00",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-a62b-487b-ae65-231d2134f7db",
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

