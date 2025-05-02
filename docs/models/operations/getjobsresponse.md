# GetJobsResponse


## Supported Types

### `components.Job`

```typescript
const value: components.Job = {
  createdByStaffUuid: "123e4567-f090-4be9-8c1c-22b6c3eb7cdb",
  date: "YYYY-MM-DD",
  companyUuid: "123e4567-eae5-458e-a360-22b6c9cfe6bb",
  status: "Quote",
  paymentDate: "2025-05-01 12:00:00",
  paymentActionedByUuid: "123e4567-00fe-4744-9e7c-22b6c874e0db",
  categoryUuid: "123e4567-6ae1-4086-be02-22b6c21193fb",
  invoiceSentStamp: "2025-05-01 12:00:00",
  queueUuid: "123e4567-d25c-4ffa-a04e-22b6cc27329b",
  queueExpiryDate: "2025-05-01 12:00:00",
  queueAssignedStaffUuid: "123e4567-b0e7-42cb-9e78-22b6ce674aeb",
  quoteDate: "2025-05-01 12:00:00",
  quoteSentStamp: "2025-05-01 12:00:00",
  workOrderDate: "2025-05-01 12:00:00",
  uuid: "123e4567-0b3d-4d92-a55c-22b6cac5e87b",
  editDate: "2025-05-01 12:00:00",
  paymentProcessedStamp: "2025-05-01 12:00:00",
  paymentReceivedStamp: "2025-05-01 12:00:00",
  completionDate: "2025-05-01 12:00:00",
  completionActionedByUuid: "123e4567-9c3b-4390-8933-22b6c0d5924b",
  unsuccessfulDate: "2025-05-01 12:00:00",
  jobIsScheduledUntilStamp: "2025-05-01 12:00:00",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

