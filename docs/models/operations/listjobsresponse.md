# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-a0e1-4e33-8455-231efe57fe6b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-195c-4720-879a-231ef00e03db",
    status: "Quote",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-68a3-424c-9b19-231efae793cb",
    categoryUuid: "123e4567-2b2e-42b0-8a48-231ef9e91b4b",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-ebaf-45ab-811f-231ef6458fab",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-35d4-4294-a909-231efcceda2b",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-5d12-4aa7-aa33-231efc0e060b",
    editDate: "2025-08-01 12:00:00",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-5f85-426c-9bc8-231ef04b349b",
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

