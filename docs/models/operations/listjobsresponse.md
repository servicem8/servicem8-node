# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-e6bc-400b-ae77-22f38bc104ab",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-7b7a-4b59-bfe3-22f383aebd7b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-b3d0-4ce8-9b78-22f38d8a0ccb",
    categoryUuid: "123e4567-158c-4fdd-ab39-22f38249689b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-2f4e-4e3f-b5e9-22f383a21f4b",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-fc3e-4e85-b6c3-22f38f76cf9b",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-7715-4b2d-96e3-22f38d214f5b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-3ae9-42a0-a444-22f38f23edbb",
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

