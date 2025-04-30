# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-3bd0-4b8d-a4b5-22b56637d4ab",
    editDate: "YYYY-MM-DD HH:MM:SS",
    jobUuid: "123e4567-8873-4c0e-a65d-22b56dbd608b",
    queueUuid: "123e4567-8a12-4717-91fc-22b564de0abb",
    staffUuid: "123e4567-378d-434f-8391-22b56a19765b",
    allocationDate: "YYYY-MM-DD HH:MM:SS",
    allocationWindowUuid: "123e4567-f3c0-4bd6-ba76-22b56702d30b",
    allocatedByStaffUuid: "123e4567-acfd-4a62-a3ba-22b560f2f75b",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    expiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    completionTimestamp: "YYYY-MM-DD HH:MM:SS",
    acceptanceTimestamp: "YYYY-MM-DD HH:MM:SS",
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

