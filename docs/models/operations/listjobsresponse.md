# ListJobsResponse


## Supported Types

### `components.Job[]`

```typescript
const value: components.Job[] = [
  {
    createdByStaffUuid: "123e4567-c229-4856-ae3f-22ed3955206b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-3453-416e-ae4c-22ed3b4d78db",
    status: "Quote",
    paymentDate: "2025-06-01 12:00:00",
    paymentActionedByUuid: "123e4567-8ff6-4340-a852-22ed32ad30ab",
    categoryUuid: "123e4567-261c-4b25-a5cb-22ed3544ec2b",
    invoiceSentStamp: "2025-06-01 12:00:00",
    queueUuid: "123e4567-ec13-48b2-9fea-22ed315308ab",
    queueExpiryDate: "2025-06-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-48d5-45c9-a138-22ed363835cb",
    quoteDate: "2025-06-01 12:00:00",
    quoteSentStamp: "2025-06-01 12:00:00",
    workOrderDate: "2025-06-01 12:00:00",
    uuid: "123e4567-4167-42c5-8f81-22ed33b5c1db",
    editDate: "2025-06-01 12:00:00",
    paymentProcessedStamp: "2025-06-01 12:00:00",
    paymentReceivedStamp: "2025-06-01 12:00:00",
    completionDate: "2025-06-01 12:00:00",
    completionActionedByUuid: "123e4567-21bb-4d1f-8f7e-22ed37ce350b",
    unsuccessfulDate: "2025-06-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-06-01 12:00:00",
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

