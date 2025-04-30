# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-4201-44be-b807-22b561afc1bb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-cd81-407b-8808-22b56dff6d1b",
    status: "Completed",
    paymentDate: "2025-04-01 12:00:00",
    paymentActionedByUuid: "123e4567-dc92-469b-bf52-22b56b8c000b",
    categoryUuid: "123e4567-ae7e-4815-ad67-22b568139e3b",
    invoiceSentStamp: "2025-04-01 12:00:00",
    queueUuid: "123e4567-553a-4d0a-b3c5-22b561ff4d3b",
    queueExpiryDate: "2025-04-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-40b8-40c3-b352-22b5607bec4b",
    quoteDate: "2025-04-01 12:00:00",
    quoteSentStamp: "2025-04-01 12:00:00",
    workOrderDate: "2025-04-01 12:00:00",
    uuid: "123e4567-1144-451a-92a8-22b5658aac6b",
    editDate: "2025-04-01 12:00:00",
    paymentProcessedStamp: "2025-04-01 12:00:00",
    paymentReceivedStamp: "2025-04-01 12:00:00",
    completionDate: "2025-04-01 12:00:00",
    completionActionedByUuid: "123e4567-077c-4d7a-9f95-22b56cb79d9b",
    unsuccessfulDate: "2025-04-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-04-01 12:00:00",
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

