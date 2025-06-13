# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-1674-4dfd-992d-22e07e37473b",
    editDate: "2025-06-01 12:00:00",
    jobUuid: "123e4567-0955-4a57-a620-22e07476bcdb",
    queueUuid: "123e4567-c2d8-4399-8c85-22e074b5a07b",
    staffUuid: "123e4567-53cc-45e0-8b06-22e0704d60bb",
    allocationDate: "2025-06-01 12:00:00",
    allocationWindowUuid: "123e4567-1f0b-4700-b4a1-22e075798d3b",
    allocatedByStaffUuid: "123e4567-fd80-4c8f-9f04-22e0758985db",
    allocatedTimestamp: "2025-06-01 12:00:00",
    expiryTimestamp: "2025-06-01 12:00:00",
    readTimestamp: "2025-06-01 12:00:00",
    completionTimestamp: "2025-06-01 12:00:00",
    acceptanceTimestamp: "2025-06-01 12:00:00",
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

