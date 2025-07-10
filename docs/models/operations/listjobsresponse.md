# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-6555-4d14-8802-22fc071ed9fb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-e58a-4cad-baeb-22fc00dc7f4b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-3d4a-4979-8ecc-22fc07d45a6b",
    categoryUuid: "123e4567-fe9a-4e5b-8a72-22fc05be161b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-000d-4e85-b430-22fc076e255b",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-643b-45e8-95ae-22fc08af693b",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-6701-45ba-85d6-22fc0bc548cb",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-ffd8-41fd-9605-22fc03792bcb",
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

