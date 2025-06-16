# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-f154-414e-b37c-22e47d4ef5ab",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-27e0-4d84-8f47-22e47196b12b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-4a6b-4ffe-9595-22e47287969b",
  completedDuringCheckinUuid: "123e4567-eabc-45f1-834c-22e473b011db",
  regardingObjectUuid: "123e4567-3203-4815-97fe-22e479849deb",
  fulfilledByObjectUuid: "123e4567-8221-4f81-91aa-22e4714bc9fb",
  assignedToStaffUuids: [
    "123e4567-59ae-48da-8bad-22e47aa9ef6b",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-dbda-408a-a886-22e475f56a4b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

