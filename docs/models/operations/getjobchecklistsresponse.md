# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-1258-4aad-824d-22f45bb4446b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-7c7b-489d-afe8-22f4508acdab",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-8a9e-4ee0-895f-22f4506901cb",
  completedDuringCheckinUuid: "123e4567-78e9-4526-984e-22f4546c9fbb",
  regardingObjectUuid: "123e4567-2c0d-4a70-ab61-22f4524fdb6b",
  fulfilledByObjectUuid: "123e4567-9fd7-4292-8c33-22f45d880c6b",
  assignedToStaffUuids: [
    "123e4567-b7a9-44f5-b542-22f45be870ab",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-0f88-431f-bf3b-22f457cb079b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

