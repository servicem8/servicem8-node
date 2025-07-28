# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-6dbe-42f7-9871-230c4c4fdf8b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-148a-4805-8060-230c4b760a9b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-1fb8-486b-bc73-230c40d82f7b",
    categoryUuid: "123e4567-8a23-4980-9afb-230c4b8b245b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-5cff-4165-843e-230c46aed7cb",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-3524-4ff8-b146-230c4ad3e0bb",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-9e8f-4454-9674-230c44f7c9ab",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-e7e9-4bc8-974c-230c43e4b76b",
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

