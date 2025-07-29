# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-6048-4f1f-9cb7-230fe13ad4bb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-0ee8-4561-b7a2-230fe53651eb",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-7839-4d3b-9598-230fed6bc7eb",
    categoryUuid: "123e4567-2d16-4669-b905-230fe4fe1d1b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-e5ab-4a66-8305-230fea91465b",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-d0ad-49b2-bdd7-230fe7f2fd0b",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-379b-414b-8cdd-230fef33487b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-9c80-4324-b475-230fe9f3929b",
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

