# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-647f-4fa9-b1c5-23110915a5bb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-0815-4a46-bff1-23110345195b",
    status: "Quote",
    paymentDate: "2025-07-01 12:00:00",
    paymentActionedByUuid: "123e4567-a51d-4818-b08a-23110daf0d9b",
    categoryUuid: "123e4567-eee5-40ba-9e98-23110ec2808b",
    invoiceSentStamp: "2025-07-01 12:00:00",
    queueUuid: "123e4567-aa62-4a13-8d6b-231107a4daab",
    queueExpiryDate: "2025-07-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-d6b9-400f-8865-231103ad16cb",
    quoteDate: "2025-07-01 12:00:00",
    quoteSentStamp: "2025-07-01 12:00:00",
    workOrderDate: "2025-07-01 12:00:00",
    uuid: "123e4567-0100-4970-9119-231105fbd40b",
    editDate: "2025-07-01 12:00:00",
    paymentProcessedStamp: "2025-07-01 12:00:00",
    paymentReceivedStamp: "2025-07-01 12:00:00",
    completionDate: "2025-07-01 12:00:00",
    completionActionedByUuid: "123e4567-c54e-4734-acf1-231104760f5b",
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

