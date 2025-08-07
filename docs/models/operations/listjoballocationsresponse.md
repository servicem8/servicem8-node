# ListJobAllocationsResponse


## Supported Types

### `components.JobAllocation[]`

```typescript
const value: components.JobAllocation[] = [
  {
    uuid: "123e4567-4e96-4746-9d02-2318483c117b",
    editDate: "2025-08-01 12:00:00",
    jobUuid: "123e4567-0fcc-47fb-860c-231846e1ec8b",
    queueUuid: "123e4567-cbee-4a81-baa8-23184c97115b",
    staffUuid: "123e4567-5ca8-444a-be67-23184029db0b",
    allocationDate: "2025-08-01 12:00:00",
    allocationWindowUuid: "123e4567-d757-4685-b57b-231849b041db",
    allocatedByStaffUuid: "123e4567-ed7e-4a1c-976e-23184e1c3feb",
    allocatedTimestamp: "2025-08-01 12:00:00",
    expiryTimestamp: "2025-08-01 12:00:00",
    readTimestamp: "2025-08-01 12:00:00",
    completionTimestamp: "2025-08-01 12:00:00",
    acceptanceTimestamp: "2025-08-01 12:00:00",
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

