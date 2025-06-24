# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-8ab8-4744-808b-22ec70298f5b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-2d26-4656-a650-22ec74c9babb",
    status: "Quote",
    paymentDate: "2025-06-01 12:00:00",
    paymentActionedByUuid: "123e4567-d1cc-44d9-9670-22ec744a39eb",
    categoryUuid: "123e4567-702b-41df-973b-22ec7235162b",
    invoiceSentStamp: "2025-06-01 12:00:00",
    queueUuid: "123e4567-5ee0-46a6-9deb-22ec7e54dbdb",
    queueExpiryDate: "2025-06-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-ca1a-410e-add0-22ec732273fb",
    quoteDate: "2025-06-01 12:00:00",
    quoteSentStamp: "2025-06-01 12:00:00",
    workOrderDate: "2025-06-01 12:00:00",
    uuid: "123e4567-b1e0-4f32-aae6-22ec7d0e040b",
    editDate: "2025-06-01 12:00:00",
    paymentProcessedStamp: "2025-06-01 12:00:00",
    paymentReceivedStamp: "2025-06-01 12:00:00",
    completionDate: "2025-06-01 12:00:00",
    completionActionedByUuid: "123e4567-ad35-490d-9813-22ec765ebcbb",
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

