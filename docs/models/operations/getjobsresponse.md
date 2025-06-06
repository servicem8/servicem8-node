# GetJobsResponse


## Supported Types

### `components.Job`

```typescript
const value: components.Job = {
  createdByStaffUuid: "123e4567-0e90-4f39-9801-22d9df66e0cb",
  date: "YYYY-MM-DD",
  companyUuid: "123e4567-5267-491b-a326-22d9d02c848b",
  status: "Quote",
  paymentDate: "2025-06-01 12:00:00",
  paymentActionedByUuid: "123e4567-4b7a-491b-a9a3-22d9d4298c2b",
  categoryUuid: "123e4567-c9dd-41ce-9c51-22d9d4e23f1b",
  invoiceSentStamp: "2025-06-01 12:00:00",
  queueUuid: "123e4567-abc7-40f5-aa3a-22d9d59a949b",
  queueExpiryDate: "2025-06-01 12:00:00",
  queueAssignedStaffUuid: "123e4567-e456-48ed-8c5b-22d9de5680bb",
  quoteDate: "2025-06-01 12:00:00",
  quoteSentStamp: "2025-06-01 12:00:00",
  workOrderDate: "2025-06-01 12:00:00",
  uuid: "123e4567-2324-41b8-afd6-22d9db6dc37b",
  editDate: "2025-06-01 12:00:00",
  paymentProcessedStamp: "2025-06-01 12:00:00",
  paymentReceivedStamp: "2025-06-01 12:00:00",
  completionDate: "2025-06-01 12:00:00",
  completionActionedByUuid: "123e4567-34f6-4136-83d7-22d9da11feab",
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

