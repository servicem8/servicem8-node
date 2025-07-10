# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-8c4b-49fe-abd0-22fc0b98690b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-e9c3-4ee9-9167-22fc0dad686b",
    queueUuid: "123e4567-1636-473c-b557-22fc06270d4b",
    staffUuid: "123e4567-f378-467e-aa1a-22fc0e90c14b",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-b8ea-4026-9c24-22fc03109f8b",
    allocatedByStaffUuid: "123e4567-7495-4e94-870d-22fc0dc8b53b",
    allocatedTimestamp: "2025-07-01 12:00:00",
    expiryTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    completionTimestamp: "2025-07-01 12:00:00",
    acceptanceTimestamp: "2025-07-01 12:00:00",
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

