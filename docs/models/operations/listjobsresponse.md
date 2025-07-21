# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-8862-4091-a964-23076c3a93bb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-7314-4b16-b9b8-23076a630f4b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-1e50-40ee-8934-230762bab24b",
    categoryUuid: "123e4567-99c6-4e09-ac2b-2307683e2fbb",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-a52c-4189-8f05-23076ddcbcab",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-d5a9-4adc-be4b-23076900a3eb",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-ea41-4a71-8565-23076596998b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-8d9f-4e67-b7f3-23076b6672bb",
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

