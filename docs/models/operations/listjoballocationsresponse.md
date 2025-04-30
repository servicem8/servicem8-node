# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-40a1-4fa4-9807-22b56b53408b",
    editDate: "2025-04-01 12:00:00",
    jobUuid: "123e4567-4a95-42a7-9648-22b561c602ab",
    queueUuid: "123e4567-a6a4-4b84-9002-22b5660284eb",
    staffUuid: "123e4567-ac2c-4ab0-9baf-22b56ea05adb",
    allocationDate: "2025-04-01 12:00:00",
    allocationWindowUuid: "123e4567-7664-4415-8175-22b56bd74fcb",
    allocatedByStaffUuid: "123e4567-1cd6-43e0-97ed-22b56c1bb14b",
    allocatedTimestamp: "2025-04-01 12:00:00",
    expiryTimestamp: "2025-04-01 12:00:00",
    readTimestamp: "2025-04-01 12:00:00",
    completionTimestamp: "2025-04-01 12:00:00",
    acceptanceTimestamp: "2025-04-01 12:00:00",
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

