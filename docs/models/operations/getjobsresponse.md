# GetJobsResponse


## Supported Types

### `components.Job`

```typescript
const value: components.Job = {
  createdByStaffUuid: "123e4567-dccc-4604-85fb-22e6e6d4ab2b",
  date: "YYYY-MM-DD",
  companyUuid: "123e4567-ae11-457f-988e-22e6e4542adb",
  status: "Quote",
  paymentDate: "2025-06-01 12:00:00",
  paymentActionedByUuid: "123e4567-5087-4459-aae3-22e6e7b1f8bb",
  categoryUuid: "123e4567-d7a9-4df5-b8b3-22e6ea16143b",
  invoiceSentStamp: "2025-06-01 12:00:00",
  queueUuid: "123e4567-1f0f-4341-bd43-22e6ec7f1f1b",
  queueExpiryDate: "2025-06-01 12:00:00",
  queueAssignedStaffUuid: "123e4567-edd7-4f82-bf06-22e6e14cd4ab",
  quoteDate: "2025-06-01 12:00:00",
  quoteSentStamp: "2025-06-01 12:00:00",
  workOrderDate: "2025-06-01 12:00:00",
  uuid: "123e4567-4ccd-4018-85ce-22e6eb291d7b",
  editDate: "2025-06-01 12:00:00",
  paymentProcessedStamp: "2025-06-01 12:00:00",
  paymentReceivedStamp: "2025-06-01 12:00:00",
  completionDate: "2025-06-01 12:00:00",
  completionActionedByUuid: "123e4567-7cfc-4dcd-8806-22e6e807259b",
  unsuccessfulDate: "2025-06-01 12:00:00",
  jobIsScheduledUntilStamp: "2025-06-01 12:00:00",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

