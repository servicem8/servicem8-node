# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-8521-4ed2-b37f-230ef650592b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-3772-4eab-bfd1-230efd2b4dfb",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-038b-451e-8909-230ef498b44b",
    categoryUuid: "123e4567-e98e-4839-a2ab-230ef0df73fb",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-5f1c-4959-ba25-230ef5e4576b",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-6b60-484d-aa31-230ef05fb92b",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-7bae-4ed0-9c6e-230ef148febb",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-6645-4b13-a439-230ef8a8073b",
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

