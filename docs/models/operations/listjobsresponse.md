# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-1a8b-4b1b-83c9-22bcb482b7eb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-e79a-44b8-8a3e-22bcba5eef3b",
    status: "Completed",
    paymentDate: "2025-05-01 12:00:00",
    paymentActionedByUuid: "123e4567-d307-4e29-8691-22bcba18737b",
    categoryUuid: "123e4567-7c53-4686-be44-22bcb803f54b",
    invoiceSentStamp: "2025-05-01 12:00:00",
    queueUuid: "123e4567-837e-48a8-9f07-22bcb568071b",
    queueExpiryDate: "2025-05-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-ba1e-476a-9cfc-22bcb39e845b",
    quoteDate: "2025-05-01 12:00:00",
    quoteSentStamp: "2025-05-01 12:00:00",
    workOrderDate: "2025-05-01 12:00:00",
    uuid: "123e4567-61ef-4f95-9124-22bcb35ad94b",
    editDate: "2025-05-01 12:00:00",
    paymentProcessedStamp: "2025-05-01 12:00:00",
    paymentReceivedStamp: "2025-05-01 12:00:00",
    completionDate: "2025-05-01 12:00:00",
    completionActionedByUuid: "123e4567-8545-4efd-a360-22bcbc27728b",
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

