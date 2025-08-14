# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-ae42-4b82-9d85-231ef59d636b",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-b9ef-4c8f-be37-231ef6ff488b",
  completedTimestamp: "2025-08-01 12:00:00",
  completedByStaffUuid: "123e4567-c9f0-4572-974c-231efdba7c1b",
  completedDuringCheckinUuid: "123e4567-b92f-4cd8-b962-231efbe7116b",
  regardingObjectUuid: "123e4567-6ad2-41d4-8778-231eff7413ab",
  fulfilledByObjectUuid: "123e4567-5b0e-4a15-8bea-231ef6ab6a4b",
  assignedToStaffUuids: [
    "123e4567-1579-47da-a0a3-231ef6dcb01b",
  ],
  assignedTimestamp: "2025-08-01 12:00:00",
  assignedByStaffUuid: "123e4567-8553-4767-a0d8-231ef390647b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

