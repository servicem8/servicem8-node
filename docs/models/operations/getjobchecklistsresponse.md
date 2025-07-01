# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-c7d1-417d-b4a6-22f38169dd3b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-01f6-40bf-8e18-22f389403f5b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-d1ac-4ddc-93ca-22f3862281eb",
  completedDuringCheckinUuid: "123e4567-1360-4ae5-bd17-22f38de15d6b",
  regardingObjectUuid: "123e4567-9569-4e5c-9e03-22f3841f491b",
  fulfilledByObjectUuid: "123e4567-d7e8-4166-8278-22f386305f9b",
  assignedToStaffUuids: [
    "123e4567-093b-4891-8a07-22f383f09c9b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-1388-4f58-9a66-22f387372dbb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

