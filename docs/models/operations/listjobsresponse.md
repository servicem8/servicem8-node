# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-c95e-41c4-afff-230b7a8d855b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-3810-49d5-904e-230b7aacdb4b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-f03f-4bb3-8da8-230b7d08b62b",
    categoryUuid: "123e4567-13ba-4ea8-a273-230b71ac065b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-8fed-49e6-8fbd-230b7c4cba7b",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-3e03-46a4-a810-230b7f24c06b",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-33e9-4bc7-9d15-230b701d543b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-31bf-4e6b-85aa-230b732c875b",
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

