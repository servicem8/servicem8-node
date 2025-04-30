# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    uuid: "123e4567-9ec3-4194-b9af-22b560c5f1cb",
    editDate: "YYYY-MM-DD HH:MM:SS",
    createdByStaffUuid: "123e4567-8d34-46f6-8e1f-22b560c54d9b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-2c1d-4a0c-af30-22b56ab44acb",
    status: "<value>",
    paymentDate: "YYYY-MM-DD HH:MM:SS",
    paymentActionedByUuid: "123e4567-f083-45d1-855a-22b564cded8b",
    categoryUuid: "123e4567-5ce6-4ddb-8eec-22b568d6f2bb",
    invoiceSentStamp: "YYYY-MM-DD HH:MM:SS",
    readyToInvoiceStamp: "YYYY-MM-DD HH:MM:SS",
    paymentProcessedStamp: "YYYY-MM-DD HH:MM:SS",
    queueUuid: "123e4567-abc5-483b-a73f-22b56c84294b",
    queueExpiryDate: "YYYY-MM-DD HH:MM:SS",
    queueAssignedStaffUuid: "123e4567-a6a9-4ea9-8136-22b5627427bb",
    paymentReceivedStamp: "YYYY-MM-DD HH:MM:SS",
    quoteDate: "YYYY-MM-DD HH:MM:SS",
    quoteSentStamp: "YYYY-MM-DD HH:MM:SS",
    workOrderDate: "YYYY-MM-DD HH:MM:SS",
    completionDate: "YYYY-MM-DD HH:MM:SS",
    completionActionedByUuid: "123e4567-888a-4ac1-8a2e-22b56672fa6b",
    unsuccessfulDate: "YYYY-MM-DD HH:MM:SS",
    jobIsScheduledUntilStamp: "YYYY-MM-DD HH:MM:SS",
    activeNetworkRequestUuid: "123e4567-fcaf-4d22-b990-22b56282501b",
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

