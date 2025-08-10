# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-d60a-4915-9011-231b24a24ddb",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-6fa9-4410-b75f-231b2b026deb",
  completedTimestamp: "2025-08-01 12:00:00",
  completedByStaffUuid: "123e4567-cd9b-4f8e-93af-231b2014954b",
  completedDuringCheckinUuid: "123e4567-da9b-4c36-87bb-231b214481cb",
  regardingObjectUuid: "123e4567-8336-4f61-93b1-231b2a82345b",
  fulfilledByObjectUuid: "123e4567-9567-49d0-8b08-231b2cd8616b",
  assignedToStaffUuids: [
    "123e4567-7b5e-4158-8347-231b2784acbb",
  ],
  assignedTimestamp: "2025-08-01 12:00:00",
  assignedByStaffUuid: "123e4567-9d75-4da9-8ded-231b2f30be6b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

