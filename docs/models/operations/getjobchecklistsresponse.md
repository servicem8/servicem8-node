# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-6e3f-40ed-87ea-22b4da51e71b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  jobUuid: "123e4567-5336-4ee2-8dc4-22b4dc442beb",
  completedTimestamp: "YYYY-MM-DD HH:MM:SS",
  completedByStaffUuid: "123e4567-2f9e-4d12-aacb-22b4d22152eb",
  completedDuringCheckinUuid: "123e4567-5b0e-486f-9a75-22b4d1ee0d7b",
  regardingObjectUuid: "123e4567-d249-4a7f-aa18-22b4d707f7bb",
  fulfilledByObjectUuid: "123e4567-6b70-4c7c-a3de-22b4d4c4fbdb",
  assignedToStaffUuids: [
    "123e4567-607f-446b-b71d-22b4d676e55b",
  ],
  assignedTimestamp: "YYYY-MM-DD HH:MM:SS",
  assignedByStaffUuid: "123e4567-0f45-417f-bd89-22b4daa439db",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

