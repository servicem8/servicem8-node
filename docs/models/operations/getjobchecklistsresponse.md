# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-7078-477c-b32c-231d2818ec9b",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-822e-45a1-a956-231d2eebfbab",
  completedTimestamp: "2025-08-01 12:00:00",
  completedByStaffUuid: "123e4567-5ab4-4d01-ad78-231d22111e3b",
  completedDuringCheckinUuid: "123e4567-f9d8-4fcd-9b40-231d2b13384b",
  regardingObjectUuid: "123e4567-3beb-4656-a2db-231d22d8de4b",
  fulfilledByObjectUuid: "123e4567-dc38-4f7e-a527-231d29105bdb",
  assignedToStaffUuids: [
    "123e4567-d852-44b8-9bc8-231d2ff7232b",
  ],
  assignedTimestamp: "2025-08-01 12:00:00",
  assignedByStaffUuid: "123e4567-6f7e-415c-bc04-231d24bd5e7b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

