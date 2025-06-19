# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-2b57-4dff-bcff-22e733df8b8b",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-9adc-4ca4-95a6-22e73363182b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-b06f-4d9a-adbf-22e73d6f999b",
  completedDuringCheckinUuid: "123e4567-1498-4ec1-a524-22e73ed7853b",
  regardingObjectUuid: "123e4567-1601-436d-8871-22e73ab1e13b",
  fulfilledByObjectUuid: "123e4567-efbe-4324-8244-22e73bc1339b",
  assignedToStaffUuids: [
    "123e4567-66bd-482a-a4ec-22e73a99f01b",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-0c6b-4607-9867-22e73991ffeb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

