# GetJobAllocationsResponse


## Supported Types

### `components.JobAllocation`

```typescript
const value: components.JobAllocation = {
  uuid: "123e4567-67d5-4193-b60d-231cfd47697b",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-2fb3-45d5-bc89-231cf720673b",
  queueUuid: "123e4567-177b-41e0-9d64-231cfced911b",
  staffUuid: "123e4567-1fb5-47ed-a810-231cfa8889db",
  allocationDate: "2025-08-01 12:00:00",
  allocationWindowUuid: "123e4567-ef6d-4380-87a6-231cf592865b",
  allocatedByStaffUuid: "123e4567-bf47-45e7-a596-231cfc4a730b",
  allocatedTimestamp: "2025-08-01 12:00:00",
  expiryTimestamp: "2025-08-01 12:00:00",
  readTimestamp: "2025-08-01 12:00:00",
  completionTimestamp: "2025-08-01 12:00:00",
  acceptanceTimestamp: "2025-08-01 12:00:00",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

