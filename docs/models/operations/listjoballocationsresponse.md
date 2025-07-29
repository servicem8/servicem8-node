# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-205e-4d4e-9c8e-230fe4dd88cb",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-6d6b-477a-b7cd-230fe83a814b",
    queueUuid: "123e4567-24de-4906-893e-230febaac39b",
    staffUuid: "123e4567-41e3-4829-bded-230febff3ecb",
    allocationDate: "2025-07-01 12:00:00",
    allocationWindowUuid: "123e4567-e154-4e31-bec7-230fe6d8d53b",
    allocatedByStaffUuid: "123e4567-33c0-4c19-b185-230fef75bbeb",
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

