# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-fcd1-4502-8107-22d9d59548eb",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-343b-4e21-a53d-22d9d6eacecb",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-9ea5-414a-af7e-22d9d5579acb",
  completedDuringCheckinUuid: "123e4567-2dd0-4022-929a-22d9d9cc3cbb",
  regardingObjectUuid: "123e4567-56c9-495b-b762-22d9d134a6eb",
  fulfilledByObjectUuid: "123e4567-6c4e-43fe-b1fa-22d9dd84753b",
  assignedToStaffUuids: [
    "123e4567-a8a4-4b14-a4fd-22d9dfc6620b",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-3a11-4a1c-bb42-22d9d2052aab",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

