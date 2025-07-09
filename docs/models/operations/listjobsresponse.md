# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-ce68-4376-88bc-22fb2144214b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-99e9-4b9b-bd2b-22fb2b368bdb",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-ce49-4a67-8eed-22fb287df08b",
    categoryUuid: "123e4567-e262-491d-9532-22fb2c1808cb",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-e4a6-46f4-b9f0-22fb2d2854db",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-c2ae-4b23-b4da-22fb2eecd45b",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-f754-41ea-a995-22fb273ae57b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-b659-44ed-89dd-22fb2f89835b",
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

