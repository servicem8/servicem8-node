# GetJobsResponse


## Supported Types

### `components.Job`

```typescript
const value: components.Job = {
  createdByStaffUuid: "123e4567-7f8e-4b2a-9ea5-22f457319ddb",
  date: "YYYY-MM-DD",
  companyUuid: "123e4567-d4f7-41d2-97de-22f459d78fbb",
  status: "Quote",
  paymentDate: "2025-07-01 12:00:00",
  paymentActionedByUuid: "123e4567-af6a-45b2-8d9c-22f45e0d28cb",
  categoryUuid: "123e4567-ddf8-4d2c-be1c-22f45f0f60eb",
  invoiceSentStamp: "2025-07-01 12:00:00",
  queueUuid: "123e4567-7390-4213-9e90-22f4513d954b",
  queueExpiryDate: "2025-07-01 12:00:00",
  queueAssignedStaffUuid: "123e4567-b6c8-4c97-9b22-22f450d6252b",
  quoteDate: "2025-07-01 12:00:00",
  quoteSentStamp: "2025-07-01 12:00:00",
  workOrderDate: "2025-07-01 12:00:00",
  uuid: "123e4567-8cf5-4585-8076-22f45cedae0b",
  editDate: "2025-07-01 12:00:00",
  paymentProcessedStamp: "2025-07-01 12:00:00",
  paymentReceivedStamp: "2025-07-01 12:00:00",
  completionDate: "2025-07-01 12:00:00",
  completionActionedByUuid: "123e4567-7b77-4aaa-b5de-22f45f1e7bdb",
  unsuccessfulDate: "2025-07-01 12:00:00",
  jobIsScheduledUntilStamp: "2025-07-01 12:00:00",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

