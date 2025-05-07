# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-7839-449c-8c98-22bcb40249cb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-a819-4010-bb17-22bcb00d922b",
    status: "Completed",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-e0c8-4fc0-9da6-22bcb1d85cfb",
    categoryUuid: "123e4567-45e0-4c1c-808f-22bcb78d0a7b",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-654b-4162-87e3-22bcb1ad4e2b",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-5705-47e4-a327-22bcb92e772b",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-3653-49d7-b971-22bcb35d0c8b",
    editDate: "2025-05-01 12:00:00",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-8643-4430-8197-22bcb1461f9b",
    unsuccessfulDate: "2025-05-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-05-01 12:00:00",
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

